import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OTP(props: any) {

    const baseURL = 'http://localhost:3000/auth/verifyAccount';
    const [OTP, SetOTP] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function onSubmit(data: any) {

        axios.post(baseURL, {email: props.email, OTP}).then(response => {
            setLoading(false);
            navigate("/MainFunctions")

        }).catch(error => {
            setLoading(false);
            console.log(error);
        });
    }

    return (
        <div className="row justify-content-center">

            <div className='form-wrapper col-md-5 col-sm-9'>
                <h2>Mail verification</h2>

                <div className='data'>
                    <label htmlFor="OTP">OTP</label>
                    <input className="inputdata"
                        type='text'
                        onChange={(e) => SetOTP(e.target.value)}
                        value={OTP}
                        autoComplete="off"
                        required />
                </div>

                <div className='data submit'>
                        <button  className="buttons m-4">Resend code</button>
                        <button  className="buttons m-4" onClick={onSubmit}>Submit</button>
                </div>

                {loading ? <h2 className="loading">Loading...</h2> : ""}

            </div>

        </div>
    );
}

export default OTP;
