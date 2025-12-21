# Create Virtual Environment
- python -m venv venv
- source venv/bin/activate   # Linux / Mac
- venv\Scripts\activate      # Windows

# Install Dependencies

- pip install fastapi uvicorn motor python-jose passlib[bcrypt] python-dotenv pydantic[email]

# Run Server
- uvicorn app.main:app --reload

# Urls
- http://127.0.0.1:8000/docs

# Authentication Flow
- Signup → Hash Password → Store in DB
- Login → Verify Password → Issue JWT
- JWT → Used in Authorization: Bearer <token>

# Generate the requirements.txt
- pip freeze > requirements.txt