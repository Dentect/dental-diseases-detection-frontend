import { useEffect, useState } from "react";
import registerImage from '../assets/Register.png';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { Link } from "react-router-dom";




function DoctorRegister(props: any) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const baseURL = "http://localhost:3000/auth/signUp";
    async function onSubmit(data: any) {
        console.log(data);

        await axios.post(baseURL, data)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div className="row justify-content-center">

            <div className="col-md-5 my-auto col-sm-9">
                <img className="w-100" src={registerImage}></img>
            </div>

            <div className='form-wrapper col-md-5 col-sm-9'>
                <h2>Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='data'>
                        <label>First Name</label>
                        <input className="inputdata" type='text' {...register("firstName", { required: true})} />
                        <label htmlFor="lastName">Last Name</label>
                        <input className="inputdata" type='text' {...register("lastName", { required: true})} />
                    </div>

                    <div className='data'>
                        <label htmlFor="email">Email</label>
                        <input className="inputdata" type='email'{...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="password">Password</label>
                        <input className="inputdata" type='password'{...register("password", { required: true, minLength: 6 })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="medicalID">Medical ID</label>
                        <input className="inputdata" type='text' {...register("medicalID", { required: true})} />
                    </div>

                    <div className='data'>
                        <label htmlFor="phone">Clinic Phone</label>
                        <input className="inputdata" type='text' {...register("phone")} />
                    </div>

                    <div className='data'>
                        <label htmlFor="address">Clinic Address</label>
                        <input className="inputdata" type='text' {...register("address")} />
                    </div>


                    <div className='data submit'>
                        {/* <Link to={'/Login'}> */}
                            
                            <button type="submit" className="buttons">Register Me</button>
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </div>

    );
}

export default DoctorRegister;