import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Campaign from './pages/Campaign';
import Donation from './pages/Donation';
import Donor from './pages/Donor';
import ViewCampaign from './pages/ViewCampaign';
import ViewDonor from './pages/ViewDonor';
import ViewDonation from './pages/ViewDonation';
import EditDonor from './pages/EditDonor';
import About from './pages/About';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<About/>}></Route>
     <Route path='/Campaign' element={<Campaign/>} />
     <Route path='/Donation' element={<Donation/>} />
     <Route path='/Donor' element={<Donor/>} />
     <Route path='/ViewCampaign' element={<ViewCampaign/>} />
     <Route path='/ViewDonor' element={<ViewDonor/>} />
     <Route path='/ViewDonation' element={<ViewDonation/>} />
     <Route path='/EditDonor' element={<EditDonor/>} />
    </Routes>
    </Router>
    
);
  }

export default App;
