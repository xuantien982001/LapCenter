import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../../assets/images/slide1.png"
import banner2 from "../../assets/images/slide2.png"
import banner3 from "../../assets/images/slide3.jpg"
import banner4 from "../../assets/images/slide4.png"
const Slider = () => {
    return(
        <Carousel autoPlay= {true} interval={1800} infiniteLoop={true}>
                <div>
                    <img src={banner1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={banner2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={banner3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={banner4} />
                    <p className="legend">Legend 4</p>
                </div>
                
            </Carousel>
    )
}
export default Slider