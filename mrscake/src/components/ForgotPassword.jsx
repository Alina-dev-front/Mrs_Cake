import React, { Component } from 'react';
import './Login.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, 
         FormGroup,  Row } from 'reactstrap';
         import { USERS_API_URL } from '../constants/user_api_url';
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }
    getUser = (request) => {
        fetch(`${USERS_API_URL}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: request.inputEmail

            })
        })
        .then(response => {
            var dbResponse = response.json();
            return dbResponse;
        })
        .then(userData => {
            this.setState({ user: userData })
        })     
        .catch(err => console.log(err));
    }
    forgotPassword = (e) => {
        e.preventDefault();
        let request = {
            inputEmail: document.getElementById('inputEmail').value,
          
        }
        this.getUser(request);
    }

   
    render() {
         return <Form onSubmit={(e) => this.forgotPassword(e)}>
            <div className="app flex-row align-items-center">
                <Container style={{paddingTop: "120px"}}>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup style={{paddingBottom: "100px"}}>
                                <Card className="p-2">
                                    <CardBody style={{paddingBottom: "100px"}}>
                                        <Form>
                                            <div class="row" className="mb-2 pageheading">
                                                <div>
                                                   <b>Forgot Password</b> 
                                                </div>
                                            </div >
                                            <p >To reset your password, submit your email address below. If we can find you in the database, an email will be sent to your email address, with instructions how to get access again.</p>
                                           <FormGroup className="mb-3" style={{paddingTop: "100px"}}>
                                                <Input type="email" name = "inputEmail"  id="inputEmail" placeholder="Email" />
                                            </FormGroup>
                                            <Button onSubmit={this.mySubmitHandler} color="success" block>Submit</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Form>
    }
}

export default ForgotPassword;
