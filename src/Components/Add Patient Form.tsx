import { useEffect, useState } from "react";
import registerImage from '../assets/Register patient data.png';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";




function PatientRegister(props: any) {


    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const baseURL = "http://localhost:3000/dentists/patients";

    async function onSubmit(data: any) {
        let config = {
            headers: {
             authorization: "value",
            }
          }
        try {
            await axios.post(baseURL, data, config)
            .then(res => {
                console.log(res);
            })
            console.log('hi')
        } catch (error) {
            console.log(error)
        }

        navigate("/Login")        
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-5 my-auto col-sm-9">
                <img className="w-100" src={registerImage}></img>
            </div>

            <div className='form-wrapper col-md-5 col-sm-9'>
                <h2>Patient data</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='data'>
                        <label htmlFor="firstName">First Name</label>
                        <input className="inputdata" type='text' name='firstName' />
                        <label htmlFor="middleName">Middle Name</label>
                        <input className="inputdata" type='text' name='middleName' />
                        <label htmlFor="lastName">Last Name</label>
                        <input className="inputdata" type='text' name='lastName' />
                    </div>

                    <div className='data'>
                        <label htmlFor="email">Email</label>
                        <input className="inputdata" type='email' /*name='email'*/ {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="medicalHistory">Medical History</label>
                        <input className="inputdata" type='text' />
                    </div>

                    <div className='data'>
                        <label htmlFor="gender">Gender</label>
                        <input className="inputdata" type='text' />
                    </div>

                    <div className='data'>
                        <label htmlFor="phone">Phone</label>
                        <input className="inputdata" type='text' />
                    </div>

                    <div className='data'>
                        <label htmlFor="phone">ID</label>
                        <input className="inputdata" type='text' />
                    </div>


                    <div className='data'>
                        <label htmlFor="birthDate">Birth Date</label>
                        <input className="inputdata" type='text' />
                    </div>

                    <div className='data'>
                        <label htmlFor="dentalHistory">Dental History</label>
                        <input className="inputdata" type='text' />
                    </div>

                    <div className='data submit'>
                        <Link to={'/ImageUpload'}>
                            <button type="submit" className="buttons">Register Patient</button>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default PatientRegister;