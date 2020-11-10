import React from "react";
import { Carousel } from 'react-bootstrap';
import cakeRose from "../Images/cakeRose.jpg";
import carousel_pic from "../Images/carousel_pic.jpeg";
import carousel_pic2 from "../Images/carousel_pic2.jpg";
import sale from "../Images/sale.jpg";
import "./Carrousel.css";

function CarouselControlled(){
    const carouselPictures = [cakeRose, carousel_pic, carousel_pic2, sale];
    
    return (<Carousel className="carousel">
            {carouselPictures.map((item, i) => 
                (<Carousel.Item key={i} >
                    <img className="carousel-picture"
                    src={item}
                    alt="Carousel"
                    />
                </Carousel.Item>
                ))
            }
            </Carousel>
    )
}

export default CarouselControlled;
