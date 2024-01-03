from trvlro.services.database import update_user_knowledge

def test_update_user_knowledge():
    tags = [
        "bigman",
        "mista",
        "scooby",
    ]
    # make a pairs map
    pairs = {
        "question1": "answer1",
        "question2": "answer2",
        "question3": "answer3"
    }
    user_id = "uuid01"
    update_user_knowledge(user_id, tags=tags, questionAnswerPairs=pairs)
    
    
    from trvlro.services.database import add_itinerary
    itinerary = {
    "itineraryId": "itinerary2",
    "userId": "uuid01",
    "cityId": "timisoara",
    "startDate": "2025-06-01 00:00:00",
    "endDate": "2025-06-04 00:00:00",
    "focus" : "none",
    "activities": [
        {
            "name": "Visit to Altfel",
            "description": "Batai.",
            "dayOfVisit": "2024-06-01 00:00:00",
            "startTime": "2024-06-01 10:00:00",
            "endTime": "2024-06-01 12:00:00",
            "duration": 13,
            "tags": [
                "sightseeing",
                "historical",
                "architecture"
            ],
            "itineraryId": "itinerary2"
        },
        {
            "name": "Walk in Coke Park",
            "description": "A relaxing walk in the famous Roses Park, admiring the beautiful crackheads.",
            "dayOfVisit": "2024-06-02 00:00:00",
            "startTime": "2024-06-02 15:00:00",
            "endTime": "2024-06-02 17:00:00",
            "duration": 33,
            "tags": [
                "coke",
                "leisure",
                "park"
            ],
            "itineraryId": "itinerary2"
        }
    ]
    }
    add_itinerary(itinerary)
