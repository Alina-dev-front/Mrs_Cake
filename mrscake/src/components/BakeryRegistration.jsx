import React, { Component, Input } from 'react';
import {Button, Form} from 'react-bootstrap';
import Popup from 'reactjs-popup';


export class BakeryRegistration extends Component{
    render(){
        let formsStyle = {
            margin: 'auto',
            top: '25%',
            left: '33%',
            position: 'absolute',
            width: '25%',
            height: '150px',
            display: 'inline-grid',           
          };          
        return(

            <div className="cakeImage">
                <div style={formsStyle}>
                <Button  className="firstRegistrationButton">
                    Already have resigstered your bakery?
                    
                    <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button block bsSize="large"  type="submit">
                    Login
                    </Button>
                    </Form>
                    </Button>
                    <div>
                    <p>Not resigstered yet? </p>
                    </div>
                        <Popup trigger={<button> Sign up!</button>} position="right center">
                        <div style={formsStyle}>
                            <Form>
                            <Input
                                name="userEmail"
                                type="email"
                                required />
                            <Input
                                name="userPassword"
                                type="password"
                                required />
                            <Input
                                name="confirmPassword"
                                type="password"
                                required />
                            <Input
                                name="firstName" />
                            <Input
                                name="lastName" />
                            
                            <button>Register</button>
                        </Form></div>
                        </Popup>
                    <Button className="secondRegistrationButton">
                    Sign up!
                    </Button>
                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

            </div>
                </div>
            </div>
        );
    }
}
