import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function ViewXrays(props: any) {


  const [response, setResponse] = useState<AxiosResponse | null | void>()

  const {
    register,
    handleSubmit
  } = useForm();

  console.log(props.token)



  async function onSubmit(data: any) {

    props.setId(data.clinicId)
    const baseURL = `http://localhost:3000/dentists/patients/${data.clinicId}`;

    let config = {
      headers: {
        authorization: props.token,
      }
    }
    try {
      await axios.get(baseURL, config)
        .then(res => {
          setResponse(res);
          console.log(res);
        })
    } catch (error) {
      console.log(error)
    }
  }

  console.log(response)


  return (

    <div className="col upload">

      <div className='m-5'>
        <label htmlFor="Id">ID</label>
        <input className="inputdata m-5" type='text' {...register("clinicId", { required: true })} />
        <button className="buttons" onClick={handleSubmit(onSubmit)}>View</button>
      </div>

      <div className="patientInfo">
        <div className='mx-5'>

          <li> <label>Username</label>
            {response?.data.userName}</li>
          <li> <label>Email</label>
            {response?.data.email}</li>
          <li><label>Phone</label>
            {response?.data.phone}</li>
          <li><label>Gender</label>
            {response?.data.gender}</li>
          <li><label>Medical History</label>
            {response?.data.medicalHistory}</li>
          <li><label>Dental History</label>
            {response?.data.dentalHistory}</li>
          <li><label>Age</label>
            {response?.data.age}</li>

        </div>
      </div>

      <Link to={''}>
        <button className="buttons m-4">Old X-Rays</button>
      </Link>
      <Link to={'/ImageUpload'}>
        <button className="buttons m-4">Upload X-ray</button>
      </Link>
    </div>

  );
}

export default ViewXrays
