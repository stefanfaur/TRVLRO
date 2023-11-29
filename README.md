
# Trvlro Project Overview

## Project Description

Trvlro is an app designed to provide personalized travel itineraries for cities in Romania. It leverages user personality data and city profiles to make tailored suggestions.

## Target Audience

Individuals planning to visit Romanian cities, both locals and foreigners, with an initial focus on scalability for future growth.

## Technology Stack

-   **Frontend**: React with Hooks
-   **Backend**: FastAPI (Python) or NodeJS
-   **Database**: Firestore
-   **Authentication**: Firebase Auth
-   **Deployment**: Initially on-prem, with plans to move to cloud-based hosting

----------

# Software Architecture

## Frontend Development

1.  **Project Setup**: Initialize React project with create-react-app, setup Git.
2.  **Environment Configuration**:  Configure environment variables for API endpoints, Firebase configuration, etc.
3.  **Firebase Integration**: Setup Firebase SDK for authentication.
4.  **State Management**: Setup state management using React Context or Redux.
5.  **Component Development**: Develop various UI components(Using Ant Components)
		*!!!Use the Figma design, it keeps compatibility with the Ant Components Repo (I hope)*
6.  **Routing and Navigation**: Implement navigation using React Router.
7.  **API Integration**: Develop services for backend communication.
8.  **Responsive Design**: Ensure UI responsiveness.
9.  **Testing**: Implement unit and integration tests.
10.  **Deployment Preparation**: Configure build and deployment settings.
11.  **UI/UX Refinement**: Enhance user interface and experience.
12.  **Final Testing and Debugging**: Comprehensive testing and debugging.

## Backend Development

1.  **Project Setup**: Initialize FastAPI project, setup Git.
2.  **Environment Configuration**: Setup environment variables.
3.  **Firestore Integration**: Integrate Firestore for database operations.
4.  **API Endpoints Development**: Develop RESTful API endpoints.
5.  **LLM Integration**: Setup and integrate LLM for itinerary suggestions.
6.  **Security**: Implement security measures.
7.  **Testing**: Write unit and integration tests.
8.  **Deployment Preparation**: Containerize application, prepare deployment scripts.
9.  **Monitoring and Logging**: Setup monitoring and logging.
10.  **Documentation**: Document API endpoints and architecture.
11.  **Final Testing and Debugging**: Conduct comprehensive testing and debugging.

----------

# Database Structure - Firestore Integration: Data Models

For Firestore, which is a NoSQL database, the data will be structured in documents and collections. Here are proposed models:

**1. User Profile Model**

-   **Collection**: `users`
-   **Document Structure**:
    -   `userId` (String): Unique identifier for the user.
    -   `email` (String): User's email address.
    -   `username` (String): User's chosen username.
    -   `createdAt` (Timestamp): Account creation date.
    -   `personalityData` (Map): Stores answers to personality questions.
    -   `preferences` (Map): Aggregated preferences from questionnaire responses.
    -   `itineraries` (Array of References): Links to user's planned itineraries.

**2. City Profile Model**

-   **Collection**: `cities`
-   **Document Structure**:
    -   `cityId` (String): Unique identifier for the city.
    -   `name` (String): Name of the city.
    -   `description` (String): Brief description of the city.
    -   `attractions` (Array of Maps): Detailed info on various attractions.
        -   Each map in the array could have fields like `name`, `category`, `tags`, `description`, `location`, etc.

**3. Itinerary Model**

-   **Collection**: `itineraries`
-   **Document Structure**:
    -   `itineraryId` (String): Unique identifier for the itinerary.
    -   `userId` (String): Identifier of the user who created the itinerary.
    -   `cityId` (String): Identifier of the city for the itinerary.
    -   `startDate` (Timestamp): Start date of the trip.
    -   `endDate` (Timestamp): End date of the trip.
    -   `activities` (Array of Maps): List of planned activities with details.

----------

# API Endpoint Structure: FastAPI

## Endpoints

**1. User Profile Endpoints**

-   `/users/{userId}`:
    -   GET to retrieve user profile.
    -   PUT to update user profile.
    -   DELETE to delete user profile.

**2. Personality Data Endpoints**

-   `/users/{userId}/personality`:
    -   POST to submit personality questionnaire responses.
    -   GET to retrieve stored personality data.

**3. City Profile Endpoints**

-   `/cities`: GET to retrieve all city profiles.
-   `/cities/{cityId}`: GET to retrieve a specific city profile.

**4. Itinerary Endpoints**

-   `/itineraries`:
    -   POST to create a new itinerary.
    -   GET to retrieve all itineraries for a user.
-   `/itineraries/{itineraryId}`:
    -   GET to retrieve a specific itinerary.
    -   PUT to update an itinerary.
    -   DELETE to delete an itinerary.

**5. Recommendation Endpoints**

-   `/recommendations/{userId}`: GET request to generate personalized itinerary suggestions based on user personality data and city profiles.

**6. Feedback Endpoints**

-   `/feedback`: POST request for users to submit feedback on itineraries or app features.

#### Each of these endpoints would need to include appropriate error handling, validation, and security checks (like authentication and authorization where necessary). The API design follows RESTful principles, aiming for clarity, simplicity, and effectiveness in communication with the frontend.
----------

# Additional Technical Considerations

## Asynchronous Itinerary Generation

-   Implement background processing for generating itineraries.
-   Use task queuing system for efficient management(`Celery` maybe)
-   Implement user notification system for status updates.
- Implement a progress indicator for the generation

## Efficient Tagging System for LLM Integration

-   Create a concise tagging system for attractions and user traits.
-   Develop a matching mechanism to align user preferences with city attractions.
-   Use summarization and aggregation techniques to efficiently feed data into the LLM within token limits.

## User Experience and Scalability

-   Ensure a seamless user experience with asynchronous processes.
-   Design for scalability from the outset, considering potential future growth.
## Frontend Handling

-   **Asynchronous UI Design**: Design the frontend to handle asynchronous processes. Show loading states and enable users to navigate away and come back to check the status.
-   **Polling or WebSockets**: Implement a mechanism to check for updates on the itinerary status, either through regular polling or using WebSockets for real-time updates.
-  **Robust Error Handling**: In case of failure in itinerary generation, ensure there is a mechanism to notify the user and possibly retry the request.
