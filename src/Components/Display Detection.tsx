import axios from "axios";
import { useForm } from "react-hook-form";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function DisplayDection(props: any) {

  console.log(props.xray);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const baseURL = `http://localhost:3000/patients/xrays/${props.xray?._id}`;

  async function onSubmit(data: any) {

    let config = {
      headers: {
        authorization: props.token,
      }
    }
    try {
      await axios.post(baseURL, data, config)
        .then(res => {
        })
    } catch (error) {
      console.log(error)
    }
  }


  return (

    <div className="row justify-content-center">
      <div className=" upload my-5">
        <img className="images my-5" src={props.xray?.detectionURL} alt="" />
             <Popup trigger=
                {<button className="buttons m-4"> Click to open popup </button>}
                position="right center">
                <div>GeeksforGeeks</div>
            </Popup>


      </div>

      <div className="form-wrapper col-md-5 col-sm-9">

        <label htmlFor="dentistComment" className='dataStyle'>Comments</label><br />
        <input className="inputdata form-control" type='text' {...register("dentistComment", { required: true })} /><br />

        <div className="data submit">
          <button onClick={handleSubmit(onSubmit)} type="submit" className="buttons m-4">Save</button>
        </div>

      
      </div>
    </div>

  );
}