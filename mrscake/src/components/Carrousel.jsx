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
                    src={require("../Images/31.jpeg")}
                    alt="First Slide"
                    style={{height: "65vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vw-100"
                    src={require("../Images/macaron.jpg")}
                    alt="Second Slide"
                    style={{height: "65vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vw-100"
                    src={require("../Images/cakeRoses.jpg")}
                    alt="Thirst Slide"
                    style={{height: "65vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vw-100"
                    src={require("../Images/34.jpeg")}
                    alt="Fourth Slide"
                    style={{height: "65vh"}}
                />
            </Carousel.Item>
        </Carousel>

    );
}

export default CarouselControlled;