import React, { useState} from "react";
import Carousel from "react-bootstrap/Carousel";




function CarouselControlled(){
    const [index, setIndex] = useState(1)
     const handleSelect = (selectedIndex) =>{
        setIndex(selectedIndex);
     };
    return(

            <Carousel fade="true" activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                  <img
                        className="d-block min-vw-100"
                        src={require("../Images/49.jpeg")}
                        alt="First Image"
                        style={{height: "50vh"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block min-vw-100"
                        src={require("../Images/35.jpeg")}
                        alt="First Image"
                        style={{height: "50vh"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block min-vw-100"
                        src={require("../Images/Cake 35.jpeg")}
                        alt="First Image"
                        style={{height: "50vh"}}
                    />
                </Carousel.Item>
            </Carousel>

    );
}

export default CarouselControlled;




