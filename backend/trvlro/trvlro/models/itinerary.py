from pydantic import BaseModel
from typing import List, Dict
from datetime import datetime
from enum import Enum

class focusEnum(str, Enum):
    food = "food"
    leisure = "leisure"
    culture = "culture"
    none = "none"

class Activity(BaseModel):
    name: str
    description: str
    dayOfVisit: datetime
    startTime: datetime
    endTime: datetime
    duration: int  # in minutes
    tags: List[str]
    itineraryId: str # this is the id of the itinerary that this activity is associated with

class Itinerary(BaseModel):
    itineraryId: str
    userId: str
    cityId: str
    startDate: datetime
    endDate: datetime
    focus: focusEnum
    activities: List[Activity]
    
class ItineraryMeta(BaseModel):
    cityId: str
    startDate: datetime
    endDate: datetime
    focus: focusEnum
    
