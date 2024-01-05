import axios from "axios";
import { json } from "stream/consumers";

interface User {
  userId: string;
  email: string;
  isAdmin: boolean;
  threadId: string;
  username: string;
  createdAt: string;
  questionAnswerPairs: {
    [key: string]: string;
  };
  tags: string[];
  itineraries: string[];
}

const defaultUser: User = {
  userId: "",
  email: "",
  isAdmin: false,
  threadId: "",
  username: "",
  createdAt: "",
  questionAnswerPairs: {},
  tags: [],
  itineraries: [],
};

interface ItineraryMeta { 
    cityId: string,
    startDate: string,
    endDate: string
    focus: string
}

export const createUser = async (userId: string, userEmail: string) => {
  try {
    const user = { ...defaultUser, userId };
    user.createdAt = new Date().toISOString();
    user.email = userEmail;
    const response = await axios.post(
      "http://127.0.0.1:8000/api/users",
      JSON.stringify(user),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const getUserIsAdmin = async (userId: string) => {
  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/users/${userId}/isAdmin/`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching isAdmin:", error);
    throw error;
  }
};

export const getUserThreadId = async (userId: string) => {
  if (!userId) {
    return null;
  }

  try {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/users/${userId}/threadId/`
    );
    console.log(response.data["threadId"]);
    return response.data["threadId"];
  } catch (error) {
    console.error("Error fetching threadId:", error);
    throw error;
  }
};

export const updateThreadId = async (userId: string, threadId: string) => {
  const maxRetries = 10;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      console.log("updateThreadId", userId, threadId);
      const response = await axios.post(
        `http://127.0.0.1:8000/api/users/${userId}/threadId/?threadId=${threadId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating threadId:", error);
      retries++;
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Add a 1-second delay
    }
  }

  console.error("Max retries exceeded. Failed to update threadId.");
};

export const updateUserKnowledge = async (
  userId: string,
  questionAnswerPairs: Map<string, string>
) => {
  try {
      console.log("updateUserKnowledge API ", userId, questionAnswerPairs);
      const json = JSON.stringify(Object.fromEntries(questionAnswerPairs));
      console.log("stringify", json);
    const response = await axios.post(
      `http://127.0.0.1:8000/api/users/${userId}/knowledge/`,
      json,
      { headers: { "Content-Type": "application/json" } }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating user knowledge:", error);
    throw error;
  }
};


export const createItinerary = async (userId: string, itineraryMeta: ItineraryMeta) => {
  console.log("createItinerary API ", userId, JSON.stringify(itineraryMeta));
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/itineraries/add/${userId}`,
      itineraryMeta,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating itinerary:", error);
    throw error;
  }
}


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
  

  export const getItineraries = async (userId: string): Promise<Itinerary[]> => {
    try {
      const response = await axios.get<Itinerary[]>(`http://127.0.0.1:8000/api/itineraries/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching itineraries', error);
      throw error;
    }
  };
  
  // Function to get a specific itinerary for a user
  export const getItinerary = async (userId: string, itineraryId: string): Promise<Itinerary> => {
    try {
      const response = await axios.get<Itinerary>(`http://127.0.0.1:8000/api/itineraries/${userId}/${itineraryId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching specific itinerary', error);
      throw error;
    }
  };