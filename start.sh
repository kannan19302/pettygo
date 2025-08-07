#!/bin/bash
# Start both backend and frontend for PettyGo ERP









# Kill any process running on port 3000
if lsof -i :3000 > /dev/null 2>&1; then
  PID=$(lsof -ti :3000)
  echo "Killing process on port 3000 (PID: $PID)..."
  kill $PID
fi


# Ensure prisma CLI is installed globally if not present
if ! command -v prisma &> /dev/null; then
  echo "Prisma CLI not found. Installing globally..."
  npm install -g prisma
fi

# Install backend dependencies only if node_modules is missing
if [ -d "backend" ]; then
  if [ ! -d "backend/node_modules" ]; then
    echo "Installing backend dependencies..."
    (cd backend && npm install) || { echo "[ERROR] Backend npm install failed!"; exit 1; }
  else
    echo "Backend dependencies already installed."
  fi
else
  echo "[ERROR] backend directory not found!"
  exit 1
fi

# Create and apply Prisma migrations for first-time setup


# Create and apply Prisma migrations for first-time setup
if [ -d "prisma/migrations" ] && [ "$(ls -A prisma/migrations)" ]; then
  echo "Running Prisma migrations..."
  (cd backend && npx prisma migrate dev --schema=../prisma/schema.prisma) || { echo "[ERROR] Prisma migrate dev failed!"; exit 1; }
else
  echo "No Prisma migrations found. Creating initial migration and applying..."
  (cd backend && npx prisma migrate reset --force --schema=../prisma/schema.prisma) || { echo "[ERROR] Prisma migrate reset failed!"; exit 1; }
fi



# Seed super admin user
echo "Seeding super admin user..."
(cd backend && npx ts-node seed.ts) || { echo "[ERROR] Seeding failed!"; exit 1; }


# Start Prisma Studio for database inspection
echo "Starting Prisma Studio..."
npx prisma studio --schema=prisma/schema.prisma &


# Install frontend dependencies only if node_modules is missing
if [ -d "frontend" ]; then
  if [ ! -d "frontend/node_modules" ]; then
    echo "Installing frontend dependencies..."
    (cd frontend && npm install) || { echo "[ERROR] Frontend npm install failed!"; exit 1; }
  else
    echo "Frontend dependencies already installed."
  fi
else
  echo "[ERROR] frontend directory not found!"
  exit 1
fi

# Start backend
if [ -d "backend" ]; then
  (cd backend && npm run start:dev) &
  BACKEND_PID=$!
else
  echo "[ERROR] backend directory not found!"
  exit 1
fi


# Start frontend from the correct directory
if [ -d "frontend" ]; then
  echo "Starting frontend from /frontend directory..."
  (cd frontend && npm run dev) &
  FRONTEND_PID=$!
else
  echo "[ERROR] frontend directory not found!"
  exit 1
fi

# Wait for both to exit
wait $BACKEND_PID
wait $FRONTEND_PID
