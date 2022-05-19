import React from "react";
import MensEssential from './image/MensEssential.jpg'
import Monaco from './image/Monaco.jpg'
import OversizedBlackT from './image/OversizedBlackT.jpg'
import OversizedBlueT from './image/Oversizedbluet.webp'
import OversizedWhiteT from './image/OversizedWhitet.jpg'
import Longcream from './image/Longcream.jpg'
import MensBrownCoat from './image/MensBownCoat.jpg'
import SpaceGrayT from './image/SpaceGrayT.jpg'

const MensPage = (props) => {
    return(
        <div>
        <h1>Mens Page</h1>
        <img src={MensEssential} height={400} width={400} alt="MensEssential" />
        <div>
            <h3>Mens Essential</h3>
        </div>
        <div>
            <p>$40.00</p>
        </div>
        <div>
            <button>1</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        
        <div>
            
        </div>
        <div>
            <p></p>
        </div>
        <img src={OversizedBlackT} height={400} width ={400} alt="OversizedBlackT" />
        <div>
            <h3>OversizedBlackT</h3>
        </div>
        <div>
            <p>$45.00</p>
        </div>
        <div>
            <button>2</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        <img src={OversizedBlueT} height={400} width={400} alt="OversizedBlueT" />
        <div>
            <h3>OversizedBlueT</h3>
        </div>
        <div>
            <p>$45.00</p>
        </div>
        <div>
            <button>3</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        <img src={OversizedWhiteT} height={400} width={400} alt="OversizedWhitet" />
        <div>
            <h3>Oversized white T</h3>
        </div>
        <div>
            <p>$45.00</p>
        </div>
        <div>
            <button>4</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        <img src= {Longcream} height={400} width={400} alt="Longcream" />
        <div>
            <h3>Long Cream T Shirt</h3>
        </div>
        <div>
            <p>$50.00</p>
        </div>
        <div>
            <button>6</button>
            <a href="#"><buton>ADD TO CART</buton>
            </a>
        </div>
        <img src={MensBrownCoat} height={400} width={400} alt="MensBrownCoat" />
        <div>
            <h3>Brown Trench Coat</h3>
        </div>
        <div>
            <p>$100.00</p>
        </div>
        <div>
            <button>7</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        <img src={SpaceGrayT} height={400} width={400} alt="SpaceGrayt" />
        <div>
            <h3>SpaceGrayT</h3>
        </div>
        <div>
            <p>$60.00</p>
        </div>
        <div>
            <button>9</button>
            <a href="#"><button>ADD TO CART</button>
            </a>
        </div>
        </div>
    )
}

export default MensPage