import { useState } from "react";
import  test from '../assets/image9.png';
import axios from "axios";



export default function DisplayDection(props: any) {

  const [detectedImage, setDetectedImage] = useState('');
  const [detectedImageBlod, setDetectedImageBlob] = useState('');


  const handleChange = (e: any) => {
    const blob = new Blob([test], { type: '*/*' });
    const imageUrl = URL.createObjectURL(blob);
    setDetectedImageBlob(imageUrl);
    setDetectedImage(test);
  }
  
  return (
    <div className="app upload">
      <img className="images" src={detectedImage} alt="" />

      <button className="buttons"  onClick={handleChange}>Print</button>
    </div>
  );
}