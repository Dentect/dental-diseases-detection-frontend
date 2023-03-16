import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ImageUpload from './Components/Upload x-ray';
import DisplayDection from './Components/Display Detection';
import NavBar from './Components/NavBar';
import DoctorRegister from './Components/Doctor Register Form';
import PatientRegister from './Components/Add Patient Form';
import DoctorLogin from './Components/Doctor Login Form';
import EditPatient from './Components/Edit Patient Data';
import Home from './Components/Home ';
import MainFunctionalities from './Components/Main Functionalitioes';

import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';


/*const routes = createBrowserRouter([
  {
    path: '/Login',
    element: <DoctorLogin />
  },
  {
    path:'/Register',
    element:<DoctorRegister />
  },
  {
    path:'/Home',
    element:<Home />
  },
  {
    path:'/PatientRegister',
    element:<PatientRegister />
  },
  {
    path:'/ImageUpload',
    element:<ImageUpload />
  },
  {
    path:'/DisplayDection',
    element:<DisplayDection />
  },
]);*/

function App() {
  return (
      // 

      // <Home />
      // <DisplayDection />
      // <ImageUpload />
      // <RouterProvider router={routes}/>
      // <PatientRegister />
      // <DoctorLogin />
      // <EditPatient />

      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route  path="/Register" element={<DoctorRegister />}/>
          <Route  path='' element={<Home />} />
          <Route  path="/Login" element={<DoctorLogin />} />
          <Route  path="//Main Functions" element={<MainFunctionalities />} />
          <Route  path="/ImageUpload" element={<ImageUpload />} />
          <Route  path="/DisplayDection" element={<DisplayDection />} />
          <Route  path="/PatientRegister" element={<PatientRegister />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
