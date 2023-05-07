import { useState } from "react";
import registerImage from '../assets/Login.png';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";



function DoctorLogin(props:any) {

    const baseURL = "http://localhost:3000/auth/signIn";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [token, setToken] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function onSubmit(data: any) {
        data.preventDefault();

        setError('');
        setLoading(true);
        
        axios.post(baseURL, {email, password}).then(response => {
            setLoading(false);
            const t = response.headers['auth-token']
            props.onLogin(t)
            // if (response.status === 401) setError(response.data.message);
            // else setError("Something went wrong. Please try again later.");
            navigate("/MainFunctions")    

        }).catch(error => {
            setLoading(false);
            console.log(error);
        });
        setPassword("");
        setEmail("");
    };


    return (
        <div className="row justify-content-center">

            <div className="col-md-5 my-auto col-sm-9">
                <img className="w-100" src={registerImage}></img>
            </div>

            <div className='form-wrapper col-md-5 col-sm-9'>
                <h2>Login</h2>

                <form>

                    <div className='data'>
                        <label htmlFor="email">Email</label>
                        <input className="inputdata" 
                        type='email' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email} 
                        autoComplete="off"
                        required/>
                    </div>

                    <div className='data'>
                        <label htmlFor="password">Password</label>
                        <input className="inputdata" 
                        type='password' 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} 
                        required/>
                    </div>

                    <div className='data submit'>
                        <Link onClick={onSubmit} to={'/MainFunctions'}>
                            <button type="submit" className="buttons">Login</button>
                        </Link>
                    </div>

                    {loading ? <h2 className="loading">Loading...</h2> : ""}

                </form>
            </div>

        </div>
    );
}
export default DoctorLogin;