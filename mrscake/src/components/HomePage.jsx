import React, { Component } from 'react';
import CarouselControlled from "./Carrousel";
import FooterPage from '../components/Footer';

export class HomePage extends Component{
    render(){
        return( <React.Fragment>
                    <CarouselControlled/>
                    <FooterPage />
                </React.Fragment>
        );
    }
}
