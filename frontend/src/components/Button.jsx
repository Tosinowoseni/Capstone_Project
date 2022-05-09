import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium',  'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = Styles.include(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = Sizes.include(buttonSize)  ? buttonSize : SIZES[0]

    return(
        <link to='/sign-up'  className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </link>
    )
};
