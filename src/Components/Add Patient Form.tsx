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

        console.log(data)
        let config = {
            headers: {
                authorization: props.token,
            }
        }
        try {
            await axios.post(baseURL, data, config)
                .then(res => {
                    navigate("/ImageUpload", { replace: true })
                })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-5 my-auto col-sm-9">
                <img className="w-100" src={registerImage} alt=''></img>
            </div>

            <div className='form-wrapper col-md-5 col-sm-9'>
                <h2>Patient data</h2>

                <form>
                    <div className='data'>
                        <label htmlFor="firstName" className='dataStyle'>First Name</label>
                        <input className="inputdata" type='text'  {...register("firstName", { required: true })} />
                        <label htmlFor="middleName" className='dataStyle'>Middle Name</label>
                        <input className="inputdata" type='text'  {...register("middleName", { required: true })} />
                        <label htmlFor="lastName" className='dataStyle'>Last Name</label>
                        <input className="inputdata" type='text'  {...register("lastName", { required: true })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="email" className='dataStyle'>Email</label>
                        <input className="inputdata" type='email' {...register("email", { pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="medicalHistory" className='dataStyle'>Medical History</label>
                        <input className="inputdata" type='text' {...register("medicalHistory")} />
                    </div>

                    <div className='data'>
                        <label htmlFor="gender" className='dataStyle'>Gender</label>
                        <p className='gender'>                       
                            <input type='radio' value="Female"  {...register("gender", { required: true })} />
                        Female
                        </p>
                        <p className='gender'>
                        <input type='radio' value="Male" {...register("gender", { required: true })} />
                        Male
                        </p>
                    </div>

                    <div className='data'>
                        <label htmlFor="phone" className='dataStyle'>Phone</label>
                        <input className="inputdata" type='text' {...register("phone", { required: true })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="clinicId" className='dataStyle'>ID</label>
                        <input className="inputdata" type='text' {...register("clinicId", { required: true })} />
                    </div>


                    <div className='data'>
                        <label htmlFor="birthDate" className='dataStyle'>Birth Date</label>
                        <input className="inputdata" type='date' {...register("birthDate", { required: true })} />
                    </div>

                    <div className='data'>
                        <label htmlFor="dentalHistory" className='dataStyle'>Dental History</label>
                        <input className="inputdata" type='text' {...register("dentalHistory")} />
                    </div>

                    <div className='data submit'>
                        <Link onClick={handleSubmit(onSubmit)} to={'/ImageUpload'}>
                            <button type="submit" className="buttons">Register Patient</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PatientRegister;