import React, { Component } from 'react';
import CarouselControlled from "./Carrousel";
import { Card, Col, Row } from 'react-bootstrap';
import './HomePage.css';


export class HomePage extends Component{
    render(){
        return( <React.Fragment>
                    <CarouselControlled/>
                    <Card className="location-home-page">
                        <Card.Header style={{textAlign: "center"}}>Our most popular locations</Card.Header>
                        <Card.Body>
                            <Row>
                            <Col>
                                <Card.Title>Stockholm</Card.Title>
                                <Card.Title>Gothenburg</Card.Title>
                            </Col>
                            <Col>
                                <Card.Title>Lund</Card.Title>
                                <Card.Title>Helsinborg</Card.Title>
                            </Col>
                            <Col>
                                <Card.Title>Falkenberg</Card.Title>
                                <Card.Title>Visby</Card.Title>
                            </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </React.Fragment>
        );
    }
}
