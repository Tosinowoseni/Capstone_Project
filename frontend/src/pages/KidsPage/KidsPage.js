import React from "react";
import BoysSweater from './image/BoysSweater.jpg'
import GirlsDress from './image/Girlswhitedress.jpg'
import Blackshorts from './image/Blackshorts.jpg'
import Mint from './image/BoysMint.jpg'
import Colorful from './image/ColorfulDress.jpg'

const KidsPage = (props) => {
    return(
        <div>
        <h1>KidsPage</h1>
        <img src={BoysSweater} height={400} width={400}  alt="Boys Sweater" />
        <div>
            <h3>Boys Sweater</h3>
        </div>
        <div>
            <p>$25.00</p>
        </div>
        <img src={GirlsDress} height={400} width={400} alt="Girls Dress" />
        <div>
            <h3>Girls Cream Dress</h3>
        </div>
        <div>
            <p>$30.00</p>
        </div>
        <img src={Blackshorts} height={400} width={400} alt="Black shorts" />
        <div>
            <h3>Girls Black Shorts</h3>
        </div>
        <div>
            <p>$30.00</p>
        </div>
        <img src={Mint} height={400} width={400} alt="Boys Mint" />
        <div>
            <h3>Boys Mint Hoodie</h3>
        </div>
        <div>
            <p>$40.00</p>
        </div>
        <img src={Colorful} height={400} width={400} alt="Girls Colorful Dres" />
        <div>
            <h3>Girls Colorful Dress</h3>
        </div>
        <div>
            <p>$35.00</p>
        </div>
        </div>
    )
}

export default KidsPage