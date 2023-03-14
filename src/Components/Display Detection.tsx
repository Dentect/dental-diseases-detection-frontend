// import { useEffect, useState } from "react";
// import test from '../assets/image9.png';
// import axios from "axios";
// import { Image } from "react-native";
// // import { storage } from './Firbase';
// import { ref, list, listAll, getDownloadURL } from "firebase/storage"




// export default function DisplayDection(props: any) {

//   const [detectedImage, setDetectedImage] = useState([]);
//   const [detectedImageBlod, setDetectedImageBlob] = useState('');


//   const handleChange = (e: any) => {
//     const blob = new Blob([test], { type: '*/*' });
//     const imageUrl = URL.createObjectURL(blob);
//     setDetectedImageBlob(imageUrl);
//     setDetectedImage(test);
//   }


//   // Create a reference to the file we want to download
// // var starsRef = storageRef.child('images/stars.jpg');

// // // Get the download URL
// // starsRef.getDownloadURL()
// // .then((url) => {
// //   // Insert url into an <img> tag to "download"
// // })
//   // useEffect(() => {
//   //   const fetchImages = async () => {

//   //     const storageRef = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/dental-diseases-detection.appspot.com/o/xrays%2F3-1678730801578.jpg?alt=media&token=86ec1a9c-a026-4c73-aa40-5005588946f7/');
//   //     const result = await list(storageRef);
//   //     let urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

//   //     return Promise.all(urlPromises);

//   //   }

//   //   const loadImages = async () => {
//   //     const urls = await fetchImages();
//   //     setS(urls);
//   //   }
//   //   loadImages();
//   // }, []);

//   // storage.ref('images').child(image.name).getDownloadURL().then(url => {
//   //   console.log(url);
//   //   setDetectedImage({url});

//   return (
//     <div className="app upload">

//       <img className="images" src={detectedImage} alt="" />

//       <button className="buttons" onClick={handleChange}>Print</button>
//     </div>
//   );
// }


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
      <img className="images" src='https://firebasestorage.googleapis.com/v0/b/dental-diseases-detection.appspot.com/o/detections%2F238-2023-03-14%2003%3A10%3A15.858495.jpg?alt=media&token=95c22e18-985d-4491-94ec-e4cd727db30c' alt="" />

      <button className="buttons"  onClick={handleChange}>Print</button>
    </div>
  );
}