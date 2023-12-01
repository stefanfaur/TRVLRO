from pydantic import BaseModel
from typing import List, Dict

class Attraction(BaseModel):
    name: str
    category: str
    tags: List[str]
    description: str
    location: str

class City(BaseModel):
    cityId: str
    name: str
    description: str
    attractions: List[Attraction]
