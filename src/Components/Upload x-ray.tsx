import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DisplayDection from "./Display Detection";

function ImageUpload() {
  const [image, setImages] = useState('');
  const [uploadedImage, setUploadedImages] = useState('');
  const [loading, setloading] = useState(true);


  const handleChange = (e: any) => {
    const blob = new Blob([e.target.files[0]], { type: '*/*' });
    const imageUrl = URL.createObjectURL(blob);
    setUploadedImages(imageUrl)
    setImages(e.target.files[0])
  }

  const handleApi = () => {
    const url = 'http://localhost:3000/patients/6408c454cd28f77798fbfd76/xrays';
    const formData = new FormData();
    formData.append('xray', image);
    formData.append('xrayDate', '2023-10-6');

    const response = axios.post(url, formData).then((res) => {
          console.log(res.data.xray.originalURL)
          const newURL = res.data.xray.originalURL;
          setUploadedImages(newURL);


    }).catch((err) => {
      console.log(err)
    })


  }

  return (

    <div className="upload">

      <img className="images" src={uploadedImage}/>
      <button className=" buttons" onClick={handleChange}>
        <label htmlFor="files" className="btn">Upload X-ray</label>
        <input id="files" type="file"/>
      </button>
      {/* <Link to={'/DisplayDection'}> */}
        <button className="buttons" onClick={handleApi}>Detect</button>
      {/* </Link> */}
    </div>
  );
}

export default ImageUpload;