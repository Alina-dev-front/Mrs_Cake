import React, { Component } from 'react';
import CarouselControlled from "./Carrousel";
import FooterPage from '../components/Footer';

export class HomePage extends Component{
    render(){
        let wrapperStyle = {
            margin: 'auto',
            top: '0%',
            position: 'absolute',
            width: '100%',
            height: '150px',           
          };
        return(
            <div style={wrapperStyle}>
                <CarouselControlled/>
                <FooterPage />
            </div>
        );
    }
}
