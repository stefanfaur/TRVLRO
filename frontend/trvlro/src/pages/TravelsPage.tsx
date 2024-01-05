import React, { useContext, useState } from 'react';
import NavigationLayout from '../components/NavigationLayout'; 
import { createItinerary } from '../utils/API';
import { AuthContext } from '../context/AuthContext';
import styles from '../styles/TravelsPage.module.css';
import Itinerary from '../components/Itinerary';

interface ItineraryMeta { 
  cityId: string,
  startDate: string,
  endDate: string,
  focus: string
}

const TravelsPage: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid ?? "";

  const [itineraryMeta, setItineraryMeta] = useState<ItineraryMeta>({
    cityId: "",
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    focus: ""
  });

  const [error, setError] = useState(false); // Add error state

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setItineraryMeta(prevState => ({
      ...prevState,
      [name]: name === 'startDate' || name === 'endDate' ? new Date(value).toISOString() : value
    }));
  };

  const handleCreateItinerary = () => {
    if (itineraryMeta.cityId === "" || itineraryMeta.startDate === "" || itineraryMeta.endDate === "" || itineraryMeta.focus === "") {
      setError(true); // Set error state to true if any field is empty
    } else {
      setError(false); // Reset error state
      console.log(itineraryMeta);
      createItinerary(userId, {
        ...itineraryMeta
      });
    }
  };

  return (
    <NavigationLayout defaultSelectedKeys={['2']}>
      <div className={styles.container}>
        <h1>TRAVELS PAGE</h1>
        {error && <p>Please fill in all fields.</p>} {/* Display error message if error state is true */}
        <div className={styles.inputGroup}>
          <label>City ID:</label>
          <input
            type="text"
            name="cityId"
            value={itineraryMeta.cityId}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={itineraryMeta.startDate.split('T')[0]}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={itineraryMeta.endDate.split('T')[0]}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Focus:</label>
          <input
            type="text"
            name="focus"
            value={itineraryMeta.focus}
            onChange={handleInputChange}
          />
        </div>
        <button className={styles.button} onClick={handleCreateItinerary}>Create Itinerary</button>
      </div>
      <Itinerary />
    </NavigationLayout>
  );
};

export default TravelsPage;
