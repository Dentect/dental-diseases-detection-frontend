import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import './App.css';


import NavBar from './Components/NavBar';
import ImageUpload from './Components/Upload x-ray';


function App() {
  return (
    <div >
      <NavBar />
      <Container fluid>
             <ImageUpload />
 
      </Container>
    </div>
  );
}

export default App;
