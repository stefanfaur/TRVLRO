from pydantic import BaseModel, EmailStr
from typing import List, Dict
from datetime import datetime

class User(BaseModel):
    userId: str
    email: EmailStr
    username: str
    createdAt: datetime
    personalityData: Dict[str, str]
    preferences: List[str]
    itineraries: List[str]  # assuming the references are stored as strings