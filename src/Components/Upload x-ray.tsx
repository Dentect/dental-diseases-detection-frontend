import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ImageUpload(props: any) {
  const [image, setImages] = useState('');
  const [uploadedImage, setUploadedImages] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const url = `http://localhost:3000/patients/${props.id}/xrays`;


  console.log(props.token)

  const handleChange = (e: any) => {
    const blob = new Blob([e.target.files[0]], { type: '*/*' });
    const imageUrl = URL.createObjectURL(blob);
    setUploadedImages(imageUrl)
    setImages(e.target.files[0])
  }

  const handleApi = () => {
    setLoading(true);


    let config = {
      headers: {
        authorization: props.token,
      }
    }
    const formData = new FormData();
    formData.append('xray', image);
    formData.append('xrayDate', '2023-10-6');

    axios.post(url, formData, config).then((res) => {
      setLoading(false);
      console.log(res.data.xray.detection)
      const newURL = res.data.xray.detection;
      props.setDetectedImage(newURL);
      navigate("/DisplayDection");


    }).catch((err) => {
      setLoading(false);
      console.log(err);
    })
  }

  return (

    <div className="newUpload">

      <img className="images" src={uploadedImage} />
      <button className="buttons position-absolute bottom-0 start-0 m-4" >Upload X-ray
        <label htmlFor="files" className="btn"></label>
        <input id="files" type="file" onChange={handleChange} />
      </button>
      {/* <Link to={'/DisplayDection'}> */}
      <button className="buttons position-absolute bottom-0 end-0 my-4" onClick={handleApi}>Detect</button>
      {/* </Link> */}
      {loading ? <h2 className="loading">Loading...</h2> : ""}

    </div>
  );
}

export default ImageUpload;