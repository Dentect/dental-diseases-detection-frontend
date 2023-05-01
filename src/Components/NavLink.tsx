import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import teeth from '../assets/image9.png';

export default function NavLink(props: any) {


    return (
        <Link to={props.target}>{props.text}</Link>
    );
}

