from fastapi import APIRouter, HTTPException
from trvlro.models.user import User
from trvlro.services.database import add_user, get_thread_id, get_isAdmin, get_itinerary_count, update_user_knowledge


router = APIRouter()

@router.post("/users")
async def create_user(user: User):
    try:
        add_user(user)
        return {"message": "User created successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error creating user: {str(e)}")

@router.get("/users/{userId}/threadId")
async def get_thread_id_by_user_id(userId: str):
    try:
        threadId = get_thread_id(userId)
        return {"threadId": threadId}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error retrieving threadId: {str(e)}")


@router.get("/users/{userId}/isAdmin")
async def get_isAdmin_by_user_id(userId: str):
    try:
        isAdmin = get_isAdmin(userId)
        return isAdmin
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error retrieving isAdmin: {str(e)}")


@router.post("/users/{userId}/threadId")
async def update_thread_id_by_user_id(userId: str, threadId: str):
    try:
        update_user_knowledge(userId, threadId=threadId)
        return {"message": "Thread ID updated successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error updating threadId: {str(e)}")
    
    
@router.post("/users/{userId}/knowledge")
async def update_knowledge_by_user_id(userId: str, questionAnswerPairs: dict):
    try:
        print(questionAnswerPairs)
        update_user_knowledge(userId, questionAnswerPairs=questionAnswerPairs)
        return {"message": "Knowledge updated successfully with {questionAnswerPairs}"} 
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error updating knowledge: {str(e)}")