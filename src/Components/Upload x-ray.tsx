import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function ImageUpload(props: any) {

  const [image, setImages] = useState('');
  const [uploadedImage, setUploadedImages] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit
  } = useForm();

  const handleChange = (e: any) => {
    const blob = new Blob([e.target.files[0]], { type: '*/*' });
    const imageUrl = URL.createObjectURL(blob);
    setUploadedImages(imageUrl)
    setImages(e.target.files[0])
  }

  const handleApi = (data: any) => {
    setLoading(true);

    const url = `http://localhost:3000/patients/${data.clinicId}/xrays`;

    let config = {
      headers: {
        authorization: props.token,
      }
    }

    const formData = new FormData();
    formData.append('xray', image);
    formData.append('xrayDate',data.xrayDate);

    axios.post(url, formData, config).then((res) => {
      setLoading(false);
      const newURL = res.data.xray.detectionURL;
      props.setDetectedImage(newURL);
      navigate("/DisplayDection");
      
    }).catch((err) => {
      setLoading(false);
      console.log(err);
    })
  }

  return (

    <div>
      <div className="upload">

        <div className='m-5'>
          <label htmlFor="Id">ID</label>
          <input className="inputdata m-5" type='text' {...register("clinicId", { required: true })} />
          <label htmlFor="date">X-Ray Date</label>
          <input className="inputdata m-5" type='date' {...register("xrayDate", { required: true })} />
        </div>

        <div>
          <div>
            <img className="images" src={uploadedImage} />
          </div>
        </div>


        <label className="buttons m-4 p-4">
          <input type="file" onChange={handleChange} />
          Upload X-ray
        </label>

        <button className="buttons m-4" onClick={handleSubmit(handleApi)}>Detect</button>


      </div>
      
      {loading ? <h2 className="loading">Loading...</h2> : ""}

    </div>


  );

}

export default ImageUpload;