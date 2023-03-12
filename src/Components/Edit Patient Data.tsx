import { useEffect, useState } from "react";
import registerImage from '../assets/Edit.png';
import { useForm } from 'react-hook-form';
import axios from "axios";




function EditPatient(props: any) {


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
    
    return (
        <div className="app container">
            <div className="FormImage">
                <img src={registerImage}></img>
            </div>

            <div className='form-wrapper'>
                <h2>Register patient data</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='data'>
                        <label htmlFor="firstName">First Name</label>
                        <input type='text' name='firstName' />
                        <label htmlFor="middleName">Middle Name</label>
                        <input type='text' name='middleName' />
                        <label htmlFor="lastName">Last Name</label>
                        <input type='text' name='lastName' />
                    </div>

                    <div className='data'>
                        <label htmlFor="email">Email</label>
                        <input type='email' /*name='email'*/ {...register("email", { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="medicalHistory">Medical History</label>
                        <input type='text' />
                    </div>

                    <div className='data'>
                        <label htmlFor="gender">Gender</label>
                        <input type='text' />
                    </div>

                    <div className='data'>
                        <label htmlFor="phone">Phone</label>
                        <input type='text' />
                    </div>

                    <div className='data'>
                        <label htmlFor="birthDate">Birth Date</label>
                        <input type='text' />
                    </div>

                    <div className='data'>
                        <label htmlFor="dentalHistory">Dental History</label>
                        <input type='text' />
                    </div>

                    <div className='data submit'>
                        <button type="submit" className="buttons">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPatient;