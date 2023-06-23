function ViewXrays(props: any) {

  var images = (props.xrays).map(function (image: any) {
    return (

      <div className="upload my-5">
        <h1>Original X-ray</h1>
        <img className="images my-3" src={image.originalURL} alt="" />
        <h1>Detected X-ray</h1>
        <img className="images my-3" src={image.detectionURL} alt="" />
      </div>
    );
  });

  return (
    <div className="col ">
      {images}
    </div>
  );
};

export default ViewXrays;
