import React from 'react'
import {Link, To} from 'react-router-dom';

import {ThemeContext} from '../Contexts/Theme/ThemeContext';

export default function NavLink(props: { target: To; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    const theme = React.useContext(ThemeContext);
    return (
        <Link style={theme.button} to={props.target}>{props.text}</Link>
    )
}

