import React, { Component } from 'react';
import './Login.css';
import { Button,  CardBody, CardGroup, Col, Container, Form, Input, FormGroup,Row } from 'reactstrap';
import { USERS_API_URL } from '../constants/user_api_url.js';

class Login extends Component {

    constructor() {
        super();
 
        this.state = {
            Email: '',
            Password: ''
        }
 
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.login = this.login.bind(this);
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
         this.props.history.push('/homepage')
      } 
 
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(event) {
        
        
        // debugger;
       
        fetch(`${USERS_API_URL}`,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((User) => User.json())
            .then((result) => {
                console.log(result);
                if (result.Status === 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push("/Homepage");
            })
            // .catch((error) => {
            //     console.log(error);
            // })
    }
 
render() {
         return (
            <div className="app flex-row align-items-center">
                <Container><br/><br/><br/>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                {/* <Card className="p-2"> */}
                                    <CardBody>
                                    <Form>
                                            <div 
                                            className="mb-2 pageheading">
                                                 <div className="col-sm-12 btn btn-primary"> 
                                                  <b> Login</b>
                                                 </div> 
                                            </div>
                                            <FormGroup className="mb-3">
                                            <Input type="text" 
                                                 onChange={this.Email} 
                                                 placeholder="Enter Email" />
                                            </FormGroup>

                                            <FormGroup className="mb-4">
                                                <Input  type = 'password' id ="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                onChange={this.Password} 
                                                placeholder="password" />
                                             </FormGroup>

                                            <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                             </div>
                                            </div>
                                            <Button onSubmit={this.mySubmitHandler} onClick={this.login} 
                                            color="success" block>Login</Button>

                                            <p className="forgot-password text-center">
                                            <b> <a href="forgotpassword">Forgot password?</a></b><br/><br/>
                                            <b> <a href="/signup">Not Registered,Sign Up</a></b>
                                                </p>
                                        </Form>
                                    </CardBody>
                                {/* </Card> */}
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}

export default Login;
