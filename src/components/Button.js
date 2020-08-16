import React from 'react';
import '../App.css';

const Button = (props) => {
    return (
        <button className="button-normal">
            {props.buttonName}
        </button>
    )
}

export default Button;