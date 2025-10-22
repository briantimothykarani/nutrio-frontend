import React, { useState, useEffect } from 'react';
import LandingPage from "./components/landingpagecomponents/Landingpage";

// Your API base URL from config
import { API_BASE_URL } from './frontend_api_config'; 

const App: React.FC = () => {
  const [apiStatus, setApiStatus] = useState<string>('Checking live API connection...');
  const [statusColor, setStatusColor] = useState<string>('text-yellow-600');

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}v1/status`);
        if (response.ok) {
          const data = await response.json();
          setApiStatus(`Live API Connected! (Uptime: ${Math.floor(data.uptime)}s)`);
          setStatusColor('text-green-600');
          console.log("API Status Check OK:", data);
        } else {
          setApiStatus(`Connection Failed: Server Status ${response.status}`);
          setStatusColor('text-red-600');
        }
      } catch (error) {
        console.error("API Connection Error:", error);
        setApiStatus('Connection Failed: Could not reach Railway server.');
        setStatusColor('text-red-600');
      }
    };

    checkApiStatus();
  }, []);

  return (
    <>
      <div className={`p-2 text-center text-sm font-semibold bg-gray-100 border-b ${statusColor}`}>
        API Status: {apiStatus}
      </div>

      <LandingPage />
    </>
  );
};

export default App;


