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
        <div className="app container">

            <div className="FormImage">
                <img src={registerImage}></img>
            </div>

            <div className='form-wrapper'>
                <h2>Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='data'>
                        <label>First Name</label>
                        <input type='text' {...register("firstName")} />
                        <label htmlFor="lastName">Last Name</label>
                        <input type='text' {...register("lastName")} />
                    </div>

                    <div className='data'>
                        <label htmlFor="email">Email</label>
                        <input type='email'{...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="password">Password</label>
                        <input type='password'{...register("password", { required: true, minLength: 6 })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="medicalID">Medical ID</label>
                        <input type='text' {...register("medicalID")} />
                    </div>

                    <div className='data'>
                        <label htmlFor="phone">Clinic Phone</label>
                        <input type='text' {...register("phone")} />
                    </div>

                    <div className='data'>
                        <label htmlFor="address">Clinic Address</label>
                        <input type='text' {...register("address")} />
                    </div>


                    <div className='data submit'>
                        <Link to={'/Login'}>
                            <button type="submit" className="buttons" >Register Me</button>
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default DoctorRegister;