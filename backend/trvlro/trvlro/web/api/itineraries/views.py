from fastapi import APIRouter
from trvlro.services.itinerary import ItineraryCreator, ItineraryUtil
from trvlro.models.itinerary import ItineraryMeta


router = APIRouter()

@router.get("/itineraries/{user_id}")
def get_itineraries(user_id: str):
    itineraries = ItineraryUtil.get_all_by_userid(user_id)
    return itineraries


@router.get("/itineraries/{user_id}/{itinerary_id}") # only show itinerary if userid matches
def get_itinerary(user_id: str, itinerary_id: str):
    itineraries = ItineraryUtil.get_by_itin_id(itinerary_id, user_id)
    return itineraries

@router.post("/itineraries/add/{user_id}")
def create_itinerary(user_id: str, itinerary_meta: ItineraryMeta):  
    itinerary = ItineraryCreator.create(user_id, itinerary_meta)  # Create itinerary using received ItineraryMeta obj
    return itinerary
