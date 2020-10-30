import React, { useState} from "react";
import Carousel from "react-bootstrap/Carousel";


function CarouselControlled(){
    let [index, setIndex] = useState(1)
    let handleSelect = (selectedIndex) =>{
        setIndex(selectedIndex);
    };
    return(

        <Carousel fade="true" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block min-vw-100"
                    src={require("../Images/31.jpeg").default}
                    alt="First Slide"
                    style={{height: "50vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vw-100"
                    src={require("../Images/macaron.jpg").default}
                    alt="Second Slide"
                    style={{height: "50vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vw-100"
                    src={require("../Images/cakeRoses.jpg").default}
                    alt="Thirst Slide"
                    style={{height: "50vh"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block min-vw-100"
                    src={require("../Images/34.jpeg").default}
                    alt="Fourth Slide"
                    style={{height: "50vh"}}
                />
            </Carousel.Item>
        </Carousel>

    );
}

export default CarouselControlled;
