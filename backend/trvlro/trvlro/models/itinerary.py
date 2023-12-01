from pydantic import BaseModel
from typing import List, Dict
from datetime import datetime

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
    activities: List[Activity]
