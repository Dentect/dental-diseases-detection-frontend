import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";


// const ImageUpload: React.FC = () => {
//     const [currentImage, setCurrentImage] = useState<File>();
//     const [previewImage, setPreviewImage] = useState<string>("");
//     const [progress, setProgress] = useState<number>(0);
//     const [message, setMessage] = useState<string>("");

//     const [imageInfos, setImageInfos] = useState<Array<IFile>>([]);
//     const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const selectedFiles = event.target.files as FileList;
//         setCurrentImage(selectedFiles?.[0]);
//         setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
//         setProgress(0);
//     };

//     const upload = () => {
//         setProgress(0);
//         if (!currentImage) return;

//         UploadService.upload(currentImage, (event: any) => {
//             setProgress(Math.round((100 * event.loaded) / event.total));
//         })
//         .then((response) => {
//             setMessage(response.data.message);
//             return UploadService.getFiles();
//         })
//             .then((files) => {
//                 setImageInfos(files.data);
//             })
//             .catch((err) => {
//                 setProgress(0);

//                 if (err.response && err.response.data && err.response.data.message) {
//                     setMessage(err.response.data.message);
//                 } else {
//                     setMessage("Could not upload the Image!");
//                 }
//                 console.log(err.response);
//                 setCurrentImage(undefined);
//             });
//     };

//     useEffect(() => {
//         UploadService.getFiles().then((response) => {
//           setImageInfos(response.data);
//         });
//       }, []);

//     return (
//         <div>
//         <div>
//           <div>
//             <label>
//               <input type="file" accept="image/*" onChange={selectImage} />
//             </label>
//           </div>

//           <div>
//             <button
//               disabled={!currentImage}
//             >
//               Upload
//             </button>
//           </div>
//         </div>

//         {currentImage && progress > 0 && (
//           <div>
//             <div
//               role="progressbar"
//               aria-valuenow={progress}
//               aria-valuemin={0}
//               aria-valuemax={100}
//               style={{ width: progress + "%" }}
//             >
//               {progress}%
//             </div>
//           </div>
//         )}

//         {previewImage && (
//           <div>
//             <img src={previewImage} alt="" />
//           </div>
//         )}

//         {message && (
//           <div role="alert">
//             {message}
//           </div>
//         )}

//         {imageInfos.length > 0 && (
//           <div>
//             <div>List of Images</div>
//             <ul>
//               {imageInfos.map((img, index) => (
//                 <li key={index}>
//                   <p>
//                     <a href={img.url}>{img.name}</a>
//                   </p>
//                   <img src={img.url} alt={img.name} height="80px" />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//   );
// };

// export default ImageUpload;

export default function ImageUpload() {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}

    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps
      }) => (
        // write your building UI
        //upload__image-wrapper
          <div className="d-flex align-items-center justify-content-center custum-height">
            <button onClick={onImageUpload} {...dragProps}> Click or Drop here </button>
            <button onClick={onImageRemoveAll}>Remove all images</button>

            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

      )}
    </ImageUploading>
  );
}
