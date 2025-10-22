import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createRoutesFromElements,
  Route,
  BrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import AddAthlete from './components/AddAthlete';
import AddAthleteb from './components/Addathleteb';
import AddAthletec from './components/Addathletec';
import AthleteSummaryBasic from './components/AthleteSummaryBasic';
import DeleteAthlete from './components/DeleteAthlete';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import UpdateAthlete from './components/UpdateAthlete';
import ViewAthletes from './components/AthleteList';
import ReadAthlete from './components/Readathlete';
import { AthleteFormProvider } from './context/AthleteFormContext';

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/viewathletes" element={<ViewAthletes />} />
    <Route path="/athletesummarybasic/:id" element={<AthleteSummaryBasic />} />
    <Route path="/deleteathlete/:id" element={<DeleteAthlete />} />
    <Route path="/updateathlete/:id" element={<UpdateAthlete />} />
    <Route path="/readathlete/:id" element={<ReadAthlete />} />
    <Route
      path="/addathlete"
      element={
        <AthleteFormProvider>
          <AddAthlete />
        </AthleteFormProvider>
      }
    />
    <Route
      path="/addathleteb"
      element={
        <AthleteFormProvider>
          <AddAthleteb />
        </AthleteFormProvider>
      }
    />
    <Route
      path="/addathletec"
      element={
        <AthleteFormProvider>
          <AddAthletec />
        </AthleteFormProvider>
      }
    />
  </>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/nutrio-frontend">
      <RouterProvider router={router} />
    </BrowserRouter>
  </React.StrictMode>
);

