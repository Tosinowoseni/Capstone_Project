import React from 'react';
import BodyCream from './image/BodyCream.jpg'
import Facebalm from './image/Facebalm.jpg'

const ProductPage = () => {
    return (
        <div>
         <h1>productpage</h1>
        <img src={BodyCream} height={400} width={400}  alt="BodyCream" />
        <img src={Facebalm} height={400} width={400} alt="Facebalm" />
        </div>
    );
};

export default ProductPage;