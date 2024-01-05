import React, { useState, useEffect } from 'react';
import Activity from './Activity'; // Sub-component for each activity
import { getItineraries } from '../utils/API';

interface Activity {
    duration: number;
    tags: string[];
    description: string;
    endTime: string;
    itineraryId: string;
    startTime: string;
    dayOfVisit: string;
    name: string;
}

interface Itinerary {
    endDate: string;
    activities: Activity[];
    itineraryId: string;
    userId: string;
    focus: string;
    cityId: string;
    startDate: string;
}

const Itinerary = () => {
    const [itineraries, setItineraries] = useState<Itinerary[]>([]);
    useEffect(() => {
        const itineraries = getItineraries("uuid01").then((itineraries) => {
            console.log("itineraries", itineraries);
            setItineraries(itineraries);
        });

        // Replace with your actual API call
        const data: Itinerary[] = [
            {
                "endDate": "2024-06-04 00:00:00",
                "activities": [
                    {
                        "duration": 120,
                        "tags": [
                            "sightseeing",
                            "historical",
                            "architecture"
                        ],
                        "description": "A visit to the iconic Timisoara Orthodox Cathedral, known for its stunning architecture.",
                        "endTime": "2024-06-01 12:00:00",
                        "itineraryId": "itinerary1",
                        "startTime": "2024-06-01 10:00:00",
                        "dayOfVisit": "2024-06-01 00:00:00",
                        "name": "Visit to Timisoara Orthodox Cathedral"
                    },
                    {
                        "duration": 120,
                        "tags": [
                            "nature",
                            "leisure",
                            "park"
                        ],
                        "description": "A relaxing walk in the famous Roses Park, admiring the beautiful flowers.",
                        "endTime": "2024-06-02 17:00:00",
                        "itineraryId": "itinerary1",
                        "startTime": "2024-06-02 15:00:00",
                        "dayOfVisit": "2024-06-02 00:00:00",
                        "name": "Walk in Roses Park"
                    }
                ],
                "itineraryId": "itinerary1",
                "userId": "uuid01",
                "focus": "food",
                "cityId": "timisoara",
                "startDate": "2024-06-01 00:00:00"
            },
            {
                "endDate": "2024-06-04 00:00:00",
                "activities": [
                    {
                        "duration": 120,
                        "tags": [
                            "sightseeing",
                            "historical",
                            "architecture"
                        ],
                        "description": "A visit to the iconic Timisoara Orthodox Cathedral, known for its stunning architecture.",
                        "endTime": "2024-06-01 12:00:00",
                        "itineraryId": "itinerary1",
                        "startTime": "2024-06-01 10:00:00",
                        "dayOfVisit": "2024-06-01 00:00:00",
                        "name": "Visit to Timisoara Orthodox Cathedral"
                    },
                    {
                        "duration": 120,
                        "tags": [
                            "nature",
                            "leisure",
                            "park"
                        ],
                        "description": "A relaxing walk in the famous Roses Park, admiring the beautiful flowers.",
                        "endTime": "2024-06-02 17:00:00",
                        "itineraryId": "itinerary1",
                        "startTime": "2024-06-02 15:00:00",
                        "dayOfVisit": "2024-06-02 00:00:00",
                        "name": "Walk in Roses Park"
                    }
                ],
                "itineraryId": "itinerary1",
                "userId": "uuid01",
                "focus": "food",
                "cityId": "timisoara",
                "startDate": "2024-06-01 00:00:00"
            },
            // Add more itineraries here
        ];
        //setItineraries(data);
    }, []);

    if (itineraries.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ width: '100%', overflow: 'auto', maxHeight: '60%' }}>
            {itineraries.map((itinerary) => (
                <div key={itinerary.itineraryId} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', outline: '1px solid black', padding: '10px' }}>
                    <div>
                        <h2>Itinerary for {itinerary.cityId}</h2>
                        <p>Start Date: {itinerary.startDate}</p>
                        <p>End Date: {itinerary.endDate}</p>
                        <div>
                            {itinerary.activities.map((activity) => (
                                <Activity key={activity.itineraryId} activity={activity} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Itinerary;
