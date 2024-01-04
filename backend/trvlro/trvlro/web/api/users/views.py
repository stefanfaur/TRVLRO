from fastapi import APIRouter, HTTPException
from trvlro.models.user import User
from trvlro.services.database import add_user


router = APIRouter()

@router.post("/users")
async def create_user(user: User):
    try:
        add_user(user)
        return {"message": "User created successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error creating user: {str(e)}")
