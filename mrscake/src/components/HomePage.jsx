import React, { Component } from 'react';
import CarouselControlled from "./Carrousel";

export class HomePage extends Component{
    render(){
        let wrapperStyle = {
            margin: 'auto',
            top: '0%',
            position: 'center',
            width: '98%',
            height: '150px',           
          };
        return(
            <div style={wrapperStyle}>
                <CarouselControlled/>
            </div>
        );
    }
}
