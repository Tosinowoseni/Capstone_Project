import React from "react";
import AuxWhite from './image/AuxWhiteDress.jpg'
import LongPinkShirt from './image/LongPinkShirt.jpg'
import LongSlitDress from './image/LongSlitDress.jpg'
import Longwhiteshirt from './image/LongwhiteShirt.jpg'
import NikeRun from './image/NikeRunPink.jpg'
import OversizedPink from './image/OversizedPinkT.jpg'
import SkyBlue from './image/SkyBlue.jpg'

const WomensPage = (props) => {
    return(
        <div>
        <h1>Womens Page</h1>
        <img src={AuxWhite} height={400} width={400} alt="AuxWhiteDress" />
        <div>
            <h3>Aux White Dress</h3>
        </div>
        <div>
            <p>$52.00</p>
        </div>
        <div>
            <button>1</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        <img src={LongPinkShirt}  height={400} width={400} alt='LongPinkShirt' />
        <div>
            <h3>Long Pink Shirt</h3>
        </div>
        <div>
            <p>$52.00</p>
        </div>
        <div>
            <button>2</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        <img src={LongSlitDress} height={400} width={400} alt='Long slit Dress' />
        <div>
            <h3>Long Slit Dress</h3>
        </div>
        <div>
            <p>$60.00</p>
        </div>
        <div>
            <button>3</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        <img src={Longwhiteshirt} height={400} width={400} alt="Long white shirt" />
        <div>
            <h3>Long white shirt</h3>
        </div>
        <div>
            <p>$40.00</p>
        </div>
        <div>
            <button>4</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        <img src={NikeRun} height={400} width={400} alt="Nike Run Pink" />
        <div>
            <h3>Nike Run Pink</h3>
        </div>
        <div>
            <p>$50.00</p>
        </div>
        <div>
            <button>5</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        <img src={OversizedPink} height={400} width={400} alt="Oversized Pink" />
        <div>
            <h3>Oversized Pink T</h3>
        </div>
        <div>
            <p>$55.00</p>
        </div>
        <div>
            <button>6</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        <img src={SkyBlue} height={400} width={400} alt="Sky Blue" />
        <div>
            <h3>Sky Blue Denim</h3>
        </div>
        <div>
            <p>$45.00</p>
        </div>
        <div>
            <button>7</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        </div>
    )
}

export default WomensPage