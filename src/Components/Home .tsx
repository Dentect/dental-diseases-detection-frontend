import { useState } from "react";
import test from '../assets/Home.png';
import axios from "axios";
import NavBar from "./NavBar";


export default function Home(props: any) {

    return (
        <div className="Home">
            <div className="homeBox">
                <h1>Dental Disease Detection</h1>

                <div>
                    <button type="submit" className="buttons">Join Now</button>
                </div>

            </div>
        </div>
    );
}