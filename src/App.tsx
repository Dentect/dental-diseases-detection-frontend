import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ImageUpload from './Components/Upload x-ray';
import DisplayDection from './Components/Display Detection';
import NavBar from './Components/NavBar';
import DoctorRegister from './Components/Doctor Register Form';
import PatientRegister from './Components/Add Patient Form';
import DoctorLogin from './Components/Doctor Login Form';
import Home from './Components/Home ';
import MainFunctionalities from './Components/Main Functionalitioes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPatient from './Components/Veiw Patient';



function App() {
  return (
      <BrowserRouter>
      <NavBar />

      <Routes>
          <Route  path="/Register" element={<DoctorRegister />}/>
          <Route  path='' element={<Home />} />
          <Route  path="/Login" element={<DoctorLogin />} />
          <Route  path="/MainFunctions" element={<MainFunctionalities />} />
          <Route  path="/ImageUpload" element={<ImageUpload />} />
          <Route  path="/DisplayDection" element={<DisplayDection />} />
          <Route  path="/PatientRegister" element={<PatientRegister />} />
          <Route  path="/ViewPatient" element={<ViewPatient />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
