import React from 'react';
import BodyCream from './image/bodycreamc.jpg'
import Facebalm from './image/Facebalm.jpg'
import Blacksoap from './image/Blacksoap.jpg'
import Facecleanser from './image/Facecleanser.jpg'
import faceoils from './image/Faceoils.jpg'
import Handsoap from './image/Handsoap.jpg'
import scrub from './image/scrub.jpg'
import sheabutter from './image/sheabutter.jpg'

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
        <div>
            <button>1</button>
            <a href='#'><button>ADD TO CART</button>
            </a>
        </div>
        <img src={Facebalm} height={400} width={400} alt="Facebalm" />
        <div>
            <h3>Face Balm</h3>
        </div>
        <div>
            <p>$35.00</p>
        </div>
        <div>
            <button>2</button>
            <a href='#'><button>ADD TO CART</button>
            </a>
        </div>
        <img src={Blacksoap} height={400} width={400} alt="Blacksoap" />
        <div>
            <h3>Black Soap</h3>
        </div>
        <div>
            <p>$40.00</p>
        </div>
        <div>
            <button>3</button>
            <a href='#'><button>ADD TO CART</button>
            </a>
        </div>
        <img src={Facecleanser} height={400} width={400} alt="Facecleanser" />
        <div>
            <h3>Face Cleanser</h3>
        </div>
        <div>
            <p>$35.00</p>
        </div>
        <div>
            <button>4</button>
            <a href='#'><button>ADD TO CART</button>
            </a>
        </div>
        <img src={faceoils} height={400} width={400} alt="Faceoils" />
        <div>
            <h3>Face Oils</h3>
        </div>
        <div>
            <p>$25.00</p>
        </div>
        <div>
            <button>5</button>
            <a href='#'><button>ADD TO CART</button>
            </a>
        </div>
        <img src={Handsoap} height={400} width={400} alt="Handsoap" />
        <div>
            <h3>Handsoap</h3>
        </div>
        <div>
            <p>$20.00</p>
        </div>
        <div>
            <button>6</button>
            <a href='#'><button>ADD TO CART</button>
            </a>
        </div>
        <img src={scrub} height={400} width={400} alt="scrub" />
        <div>
            <h3>Body Scrub</h3>
        </div>
        <div>
            <p>$25.00</p>
        </div>
        <div>
            <button>7</button>
            <a href='#'><button>ADD TO CART</button>
            </a>
        </div>
        <img src={sheabutter} height={400} width={400} alt="sheabutter" />
        <div>
            <h3>Sheabutter</h3>
        </div>
        <div>
            <p>$60.00</p>
        </div>
        <div>
            <button>8</button>
            <a href='#'><button>ADD TO CART</button>
            </a>
        </div>
        </div>
        

    
    );
};

export default ProductPage;