from fastapi import FastAPI
from app.routes import auth

app = FastAPI(title="FastAPI Auth Service")

app.include_router(auth.router)
