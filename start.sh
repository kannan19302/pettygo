#!/bin/bash
# Start both backend and frontend for PettyGo ERP









# Kill any process running on port 3000
if lsof -i :3000 > /dev/null 2>&1; then
  PID=$(lsof -ti :3000)
  echo "Killing process on port 3000 (PID: $PID)..."
  kill $PID
fi

# Install backend dependencies
if [ -d "backend" ]; then
  echo "Installing backend dependencies..."
  (cd backend && npm install)
else
  echo "[ERROR] backend directory not found!"
  exit 1
fi

# Create and apply Prisma migrations for first-time setup

# Create and apply Prisma migrations for first-time setup
if [ -d "prisma/migrations" ] && [ "$(ls -A prisma/migrations)" ]; then
  echo "Running Prisma migrations..."
  (cd backend && npx prisma migrate dev --schema=../prisma/schema.prisma)
else
  echo "No Prisma migrations found. Creating initial migration and applying..."
  (cd backend && npx prisma migrate reset --force --schema=../prisma/schema.prisma)
fi


# Seed super admin user
echo "Seeding super admin user..."
(cd backend && npx ts-node seed.ts)

# Start Prisma Studio for database inspection
echo "Starting Prisma Studio..."
npx prisma studio --schema=prisma/schema.prisma &

# Install frontend dependencies
if [ -d "frontend" ]; then
  echo "Installing frontend dependencies..."
  (cd frontend && npm install)
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

# Start frontend
if [ -d "frontend" ]; then
  (cd frontend && npm run dev) &
  FRONTEND_PID=$!
else
  echo "[ERROR] frontend directory not found!"
  exit 1
fi

# Wait for both to exit
wait $BACKEND_PID
wait $FRONTEND_PID
