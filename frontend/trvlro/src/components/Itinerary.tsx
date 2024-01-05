import React, { useState, useEffect } from 'react';
import Activity from './Activity'; // Sub-component for each activity
import { getItineraries } from '../utils/API';
import { AuthContext } from '../context/AuthContext';

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

interface ItineraryProps {
    itineraryList: Itinerary[];
}

const Itinerary: React.FC<ItineraryProps> = ({ itineraryList }) => {
    const { currentUser } = React.useContext(AuthContext);
    const [itineraries, setItineraries] = useState<Itinerary[]>([]);

    useEffect(() => {
        const fetchItineraries = async () => {
            const fetchedItineraries = await getItineraries(currentUser?.uid ?? "");
            console.log("itineraries", fetchedItineraries);
            setItineraries(fetchedItineraries);
        };

        fetchItineraries();
    }, [currentUser]);

    if (itineraries.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ width: '100%', overflow: 'auto', maxHeight: '60%' }}>
            {itineraryList.map((itinerary) => (
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
