from fastapi import APIRouter
from trvlro.models.itinerary import Itinerary, ItineraryMeta


router = APIRouter()

@router.get("/itineraries/{user_id}")
def get_itineraries(user_id: int):
    itineraries = Itinerary.get_all_by_user_id(user_id)
    return itineraries


@router.get("/itineraries/{user_id}/{itinerary_id}") # only show itinerary if userid matches
def get_itinerary(user_id: int, itinerary_id: int):
    itinerary = Itinerary.get_by_id(itinerary_id, user_id)
    return itinerary

@router.post("/itineraries/add/{user_id}")
def create_itinerary(user_id: int, itinerary_meta: ItineraryMeta):  # Add itinerary_meta parameter
    itinerary = Itinerary.create(user_id, itinerary_meta)  # Create itinerary using ItineraryMeta object
    return itinerary
