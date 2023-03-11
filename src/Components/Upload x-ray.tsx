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
    const url = 'http://localhost:3000/posts/1';
    const formData = new FormData();
    formData.append('image', image);

    axios.post(url, formData).then((res) => {
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className="upload">
      <img className="images" src={uploadedImage} alt="" />
      <button className="buttons">
        <label htmlFor="files" className="btn">Upload X-ray</label>
        <input id="files" type="file" onChange={handleChange} />
      </button>

      <button className="buttons" onClick={handleApi}>Detect</button>
    </div>
  );
}

export default ImageUpload;