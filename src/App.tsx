import React, { useState, useEffect } from 'react';
import LandingPage from "./components/landingpagecomponents/Landingpage";

// Import the API configuration file that contains your live Railway URL.
import { API_BASE_URL } from './frontend_api_config'; 

// Define the App component as a Functional Component (FC) for TypeScript clarity
const App: React.FC = () => {
    // 1. State to track the connection status
    const [apiStatus, setApiStatus] = useState<string>('Checking live API connection...');
    const [statusColor, setStatusColor] = useState<string>('text-yellow-600');

    // 2. useEffect hook to run the API health check once on load
    useEffect(() => {
        const checkApiStatus = async () => {
            try {
                // Attempt to reach the live Railway backend health check endpoint
                // The backend server.js defines this endpoint at /api/v1/status
                const response = await fetch(`${API_BASE_URL}v1/status`);

                if (response.ok) {
                    // Success! The frontend can talk to the backend.
                    const data = await response.json();
                    // Display the server's uptime as a sign of success
                    setApiStatus(`Live API Connected! (Uptime: ${Math.floor(data.uptime)}s)`);
                    setStatusColor('text-green-600');
                    console.log("API Status Check OK:", data);
                } else {
                    // The server responded, but with an error status (e.g., 500)
                    setApiStatus(`Connection Failed: Server Status ${response.status}`);
                    setStatusColor('text-red-600');
                }
            } catch (error) {
                // Connection failed entirely (e.g., network error, CORS issue)
                console.error("API Connection Error:", error);
                setApiStatus('Connection Failed: Could not reach Railway server.');
                setStatusColor('text-red-600');
            }
        };

        checkApiStatus();
    }, []); // Empty dependency array ensures this runs only once when the app mounts

    return (
        <>
            {/* Display the API Connection Status at the top */}
            {/* This visually confirms the React app is communicating with the Express server */}
            <div className={`p-2 text-center text-sm font-semibold bg-gray-100 border-b ${statusColor}`}>
                API Status: {apiStatus}
            </div>

            {/* Your original LandingPage component, which is the rest of your app */}
            <LandingPage />
        </>
    );
}

export default App;
