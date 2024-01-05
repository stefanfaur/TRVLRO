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
    update_user_knowledge(user_id, tags=tags, questionAnswerPairs=pairs, isAdmin=True, threadId="threadId01")
    
    
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
    
    llm_itinerary = {
    "itineraryId": "itinerary101",
    "userId": "uuid01",
    "cityId": "timisoara",
    "startDate": "2023-04-01 00:00:00",
    "endDate": "2023-04-04 00:00:00",
    "focus": "none",
    "activities": [
        {
            "name": "Timisoara Orthodox Cathedral",
            "description": "An iconic symbol of Timisoara, known for its stunning architecture.",
            "dayOfVisit": "2023-04-01 00:00:00",
            "startTime": "2023-04-01 10:00:00",
            "endTime": "2023-04-01 11:00:00",
            "duration": 60,
            "location": "Bulevardul Regele Ferdinand I",
            "tags": [
                "architecture",
                "history",
                "religion"
            ],
            "itineraryId": "itinerary101"
        },
        {
            "name": "Victory Square (Piata Victoriei)",
            "description": "A vibrant square in the heart of the city, surrounded by historical buildings and cafes.",
            "dayOfVisit": "2023-04-01 00:00:00",
            "startTime": "2023-04-01 12:00:00",
            "endTime": "2023-04-01 12:30:00",
            "duration": 30,
            "location": "Piata Victoriei",
            "tags": [
                "shopping",
                "historical",
                "cafes"
            ],
            "itineraryId": "itinerary101"
        },
        {
            "name": "Evening Drinks at Local Bars",
            "description": "Explore local bars for a taste of Timisoara's nightlife and enjoy a variety of alcoholic beverages.",
            "dayOfVisit": "2023-04-01 00:00:00",
            "startTime": "2023-04-01 20:00:00",
            "endTime": "2023-04-01 23:59:59",
            "duration": 240,
            "location": "Various Bars in Timisoara",
            "tags": [
                "nightlife",
                "drinks",
                "social"
            ],
            "itineraryId": "itinerary101"
        },
        {
            "name": "Roses Park",
            "description": "A beautiful park known for its vast collection of roses and serene atmosphere.",
            "dayOfVisit": "2023-04-02 00:00:00",
            "startTime": "2023-04-02 11:00:00",
            "endTime": "2023-04-02 11:45:00",
            "duration": 45,
            "location": "Bulevardul Vasile Pârvan",
            "tags": [
                "nature",
                "leisure",
                "scenic"
            ],
            "itineraryId": "itinerary101"
        },
        {
            "name": "Cultural Day at Banat Museum",
            "description": "A museum showcasing the rich cultural and historical heritage of the Banat region.",
            "dayOfVisit": "2023-04-03 00:00:00",
            "startTime": "2023-04-03 14:00:00",
            "endTime": "2023-04-03 15:30:00",
            "duration": 90,
            "location": "Piata Huniade, 1",
            "tags": [
                "culture",
                "history",
                "art"
            ],
            "itineraryId": "itinerary101"
        }
    ]
}
    
    add_itinerary(llm_itinerary)
