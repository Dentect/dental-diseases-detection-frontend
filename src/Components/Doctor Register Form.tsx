import { useEffect, useState } from "react";
import registerImage from '../assets/Register.png';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";




function DoctorRegister(props: any) {

    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const baseURL = "http://localhost:3000/auth/signUp";

    async function onSubmit(data: any) {
        try {
            await axios.post(baseURL, data)
            .then(res => {
                props.setEmail(data.email)
                console.log(res);
            })

        } catch (error) {
            console.log(error)
        }

        navigate("/MailVerification", { replace: true })        
    }

    return (
        <div className="row justify-content-center">

            <div className="col-md-5 my-auto col-sm-9">
                <img className="w-100" src={registerImage}></img>
            </div>

            <div className='form-wrapper col-md-5 col-sm-9'>
                <h2>Sign Up</h2>

                <form>
                    <div className='data'>
                        <label className='dataStyle'>First Name</label>
                        <input className="inputdata" type='text' {...register("firstName", { required: true})} />
                        <label htmlFor="lastName">Last Name</label>
                        <input className="inputdata" type='text' {...register("lastName", { required: true})} />
                    </div>

                    <div className='data'>
                        <label htmlFor="email" className='dataStyle'>Email</label>
                        <input className="inputdata" type='email'{...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="password" className='dataStyle'>Password</label>
                        <input className="inputdata" type='password'{...register("password", { required: true, minLength: 6 })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="medicalId" className='dataStyle'>Medical ID</label>
                        <input className="inputdata" type='text' {...register("medicalId", { required: true})} />
                    </div>

                    <div className='data'>
                        <label htmlFor="yearsOfExperience" className='dataStyle'>Years Of Experience</label>
                        <input className="inputdata" type='text' {...register("yearsOfExperience", { required: true, valueAsNumber: true})} />
                    </div>

                    <div className='data'>
                        <label htmlFor="clinicPhone" className='dataStyle'>Clinic Phone</label>
                        <input className="inputdata" type='text' {...register("clinicPhone")} />
                    </div>

                    <div className='data'>
                        <label htmlFor="clinicAddress" className='dataStyle'>Clinic Address</label>
                        <input className="inputdata" type='text' {...register("clinicAddress")} />
                    </div>


                    <div className='data submit'>
                            <button type="submit" className="buttons" onClick={handleSubmit(onSubmit)}>Register Me</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default DoctorRegister;