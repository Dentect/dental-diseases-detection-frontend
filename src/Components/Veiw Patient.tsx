import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function ViewPatient(props: any) {

  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AxiosResponse | null | void>();

  const {
    register,
    handleSubmit
  } = useForm();

  async function ViewPatient(data: any) {
    setLoading(true);

    props.setId(data.clinicId);
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
          setLoading(false);
        })
    } catch (error) {
      console.log(error);
      setLoading(false);

    }
  }

  async function ViewOldXrays() {
    setLoading(true);

    const baseURL = `http://localhost:3000/patients/${response?.data.clinicId}/xrays`;
    let config = {
      headers: {
        authorization: props.token,
      }
    }

    try {
      await axios.get(baseURL, config)
        .then(res => {
          props.setXrays(res.data);
          setLoading(false);
          navigate("/ViewOldXrays", { replace: true });
        })
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (

    <div>
      <div className="col upload">

        <div className='m-5'>
          <label htmlFor="Id" className='dataStyle'>ID</label>
          <input className="inputdata m-5" type='text' {...register("clinicId", { required: true })} />
          <button className="buttons" onClick={handleSubmit(ViewPatient)}>View</button>
        </div>

        <div className="patientInfo">
          <div className='mx-5'>
            <li> <label className='dataStyle'>Username</label>
              {response?.data.userName}</li>
            <li> <label className='dataStyle'>Email</label>
              {response?.data.email}</li>
            <li><label className='dataStyle'>Phone</label>
              {response?.data.phone}</li>
            <li><label className='dataStyle'>Gender</label>
              {response?.data.gender}</li>
            <li><label className='dataStyle'>Medical History</label>
              {response?.data.medicalHistory}</li>
            <li><label className='dataStyle'>Dental History</label>
              {response?.data.dentalHistory}</li>
            <li><label className='dataStyle'>Age</label>
              {response?.data.age}</li>
          </div>
        </div>

        <button className="buttons m-4" onClick={ViewOldXrays}>Old X-Rays</button>
        <Link to={'/ImageUpload'}>
          <button className="buttons m-4">Upload X-ray</button>
        </Link>
      </div>

      {loading ? <h2 className="loading">Loading...</h2> : ""}
    </div>

  );
}

export default ViewPatient;
