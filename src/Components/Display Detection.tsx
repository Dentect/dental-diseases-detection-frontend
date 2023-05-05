export default function DisplayDection(props: any) {

  // const [detectedImage, setDetectedImage] = useState('');
  // const [detectedImageBlod, setDetectedImageBlob] = useState('');


  // const handleChange = (e: any) => {
  //   const blob = new Blob([test], { type: '*/*' });
  //   const imageUrl = URL.createObjectURL(blob);
  //   setDetectedImageBlob(imageUrl);
  //   setDetectedImage(test);
  // }
  // https://firebasestorage.googleapis.com/v0/b/dental-diseases-detection.appspot.com/o/detections%2F238-2023-03-14%2003%3A10%3A15.858495.jpg?alt=media&token=95c22e18-985d-4491-94ec-e4cd727db30c/ 


  return (
    <div className="upload">
      <img className="images" src={props.detectedImage} alt="" />

      <button className="buttons">Print</button>
    </div>
  );
}