#!/bin/bash
# Start both backend and frontend for PettyGo ERP


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
