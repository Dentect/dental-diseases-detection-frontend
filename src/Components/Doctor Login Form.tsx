import { useEffect, useState } from "react";
import registerImage from '../assets/Login.png';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { Link } from "react-router-dom";

function DoctorLogin() {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const baseURL = "http://localhost:3000/auth/signUp";
    async function onSubmit(data: any) {
        console.log(data);
        await axios.post("http://localhost:3000/auth/signUp")
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div className="container">

            <div className="FormImage">
                <img src={registerImage}></img>
            </div>

            <div className='form-wrapper'>
                <h2>Login</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='data'>
                        <label htmlFor="email">Email</label>
                        <input type='email' {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="password">Password</label>
                        <input type='password' {...register("password", { required: true, minLength: 6 })} />
                    </div>

                    <div className='data submit'>
                        <Link to={'/PatientRegister'}>
                            <button type="submit" className="buttons">Login</button>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default DoctorLogin;
