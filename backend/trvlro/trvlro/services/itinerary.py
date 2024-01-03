from trvlro.services.database import get_user_itineraries, get_itinerary_by_id

class ItineraryCreator:
    def create(self, data):
        # Implementation of the create function
        # This should also handle interaction with the LLM
        pass


class ItineraryUtil:
    
    # get all itineraries for a certain user(in order to render the TRAVELS page list of itineraries)
    def get_all_by_userid(user_id):
        itinerary_refs = get_user_itineraries(user_id) # gets just the itinerary_ids, we must then get the full itinerary for each of them
        
        full_itineraries = []
        for itinerary_id in itinerary_refs:
            full_itineraries.append(get_itinerary_by_id(itinerary_id, user_id))
        return full_itineraries

    # get a certain itinerary, checking to see if the user_id matches, to render a specific itinerary from the itinerary list
    def get_by_itin_id(itin_id, user_id):
        itinerary = get_itinerary_by_id(itin_id, user_id)
        if itinerary is None:
            return None
        return itinerary
