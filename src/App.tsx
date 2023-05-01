import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ImageUpload from './Components/Upload x-ray';
import DisplayDection from './Components/Display Detection';
import NavBar from './Components/NavBar';
import DoctorRegister from './Components/Doctor Register Form';
import PatientRegister from './Components/Add Patient Form';
import DoctorLogin from './Components/Doctor Login Form';
import Home from './Components/Home ';
import MainFunctionalities from './Components/Main Functionalitioes';
import ViewPatient from './Components/Veiw Patient';
import AboutUs from './Components/AboutUs';
import Feedback from './Components/Feedback';
import useToken from './Components/UseToken';


function App() {

  const [token, setToken] = useState(null);
  const [clinicId, setClinicId] = useState(null);


  const handleLogin = (newToken: any) => {
    setToken(newToken);
  };

  const patientId = (newId: any) => {
    setClinicId(newId);
  };


  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/Register" element={<DoctorRegister />} />
          <Route path='' element={<Home />} />
          <Route path="/Login" element={<DoctorLogin onLogin = {handleLogin}/>} />
          <Route path="/MainFunctions" element={<MainFunctionalities token = {token}/>} />
          <Route path="/ImageUpload" element={<ImageUpload />} />
          <Route path="/DisplayDection" element={<DisplayDection id={clinicId}/>} />
          <Route path="/PatientRegister" element={<PatientRegister token={token}/>} />
          <Route path="/ViewPatient" element={<ViewPatient  setId = {patientId} token={token}/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Feedback" element={<Feedback />} />

        </Routes>

      </BrowserRouter>



    </>
  );

}

export default App;
