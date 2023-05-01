import { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [image, setImages] = useState('');
  const [uploadedImage, setUploadedImages] = useState('');


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
          console.log(res.data.xray.detection)
          const newURL = res.data.xray.detection;
          setUploadedImages(newURL);
    }).catch((err) => {
      console.log(err)
    })


  }

  return (

    <div className=" col upload">
      <img  src={uploadedImage}/>
      <button className=" buttons m-4" >Upload X-ray
        <label htmlFor="files" className="btn"></label>
        <input id="files" type="file" onChange={handleChange}/>
      </button>
      {/* <Link to={'/DisplayDection'}> */}
        <button className="buttons m-4" onClick={handleApi}>Detect</button>
      {/* </Link> */}
    </div>
  );
}

export default ImageUpload;