import { useEffect, useState } from "react";
import registerImage from '../assets/Register.png';
import { useForm } from 'react-hook-form';
import axios from "axios";




function DoctorRegister(props: any) {


    const [post, setPost] = useState(null);

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
    // function onSubmit() {
    //     axios.post(baseURL, {
    //             title: "Hello World!",
    //             body: "This is a new post."
    //         }).then((response) => {
    //             setPost(response.data);
    //         });
    // }

    return (
        <div className="app container">

            <div className="FormImage">
                <img src={registerImage}></img>
            </div>

            <div className='form-wrapper'>
                <h2>Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='data'>
                        <label htmlFor="firstName">First Name</label>
                        <input type='text' name='firstName' />
                        <label htmlFor="lastName">Last Name</label>
                        <input type='text' name='lastName' />
                    </div>

                    <div className='data'>
                        <label htmlFor="email">Email</label>
                        <input type='email' /*name='email'*/ {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="password">Password</label>
                        <input type='password' /*name='password'*/ {...register("password", { required: true, minLength: 6 })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="ID">Medical ID</label>
                        <input type='text' {...register("password")}/>
                    </div>

                    <div className='data'>
                        <label htmlFor="phone">Clinic Phone</label>
                        <input type='text' {...register("password")}/>
                    </div>

                    <div className='data'>
                        <label htmlFor="phone">Clinic Address</label>
                        <input type='text' {...register("password")}/>
                    </div>


                    <div className='data submit'>
                        <button type="submit" className="buttons">Register Me</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default DoctorRegister;