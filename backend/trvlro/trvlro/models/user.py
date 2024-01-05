from pydantic import BaseModel, EmailStr
from typing import List, Dict
from datetime import datetime

class User(BaseModel):
    userId: str
    email: EmailStr
    isAdmin: bool
    threadId: str
    username: str
    createdAt: datetime
    questionAnswerPairs: Dict[str, str]
    tags: List[str]
    itineraries: List[str]  # assuming the references are stored as strings
