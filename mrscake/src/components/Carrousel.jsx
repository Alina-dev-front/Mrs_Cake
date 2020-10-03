import React, { useState} from "react";
import Carousel from "react-bootstrap/Carousel";




function CarouselControlled(){
    let [index, setIndex] = useState(1)
    let handleSelect = (selectedIndex) =>{
        setIndex(selectedIndex);
    };
    return(
            //make picutre run automatic
        <Carousel fade="true" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block min-vw-100"
                    src={require("../Images/1.jpeg")}
                    alt="First Image"
                    style={{height: "50vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vw-100"
                    src={require("../Images/4.jpeg")}
                    alt="First Image"
                    style={{height: "50vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vw-100"
                    src={require("../Images/3.jpeg")}
                    alt="First Image"
                    style={{height: "50vh"}}
                />
            </Carousel.Item>
        </Carousel>

    );
}

export default CarouselControlled;