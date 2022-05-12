import React from 'react';
import BodyCream from './image/BodyCream.jpg'
import Facebalm from './image/Facebalm.jpg'
import Blacksoap from './image/Blacksoap.jpg'
import Facecleanser from './image/Facecleanser.jpg'

const ProductPage = () => {
    return (
        <div>
         <h1>productpage</h1>
        <img src={BodyCream} height={400} width={400}  alt="BodyCream" />
        <div>
            <h3>Body Cream</h3>
        </div>
        <div>
            <p>$48.00</p>
        </div>
        <img src={Facebalm} height={400} width={400} alt="Facebalm" />
        <div>
            <h3>Face Balm</h3>
        </div>
        <div>
            <p>$35.00</p>
        </div>
        <img src={Blacksoap} height={400} width={400} alt="Blacksoap" />
        <div>
            <h3>Black Soap</h3>
        </div>
        <div>
            <p>$40.00</p>
        </div>
        <img src={Facecleanser} height={400} width={400} alt="Facecleanser" />
        <div>
            <h3>Face Cleanser</h3>
        </div>
        <div>
            <p>$35.00</p>
        </div>
        </div>
    
    );
};

export default ProductPage;