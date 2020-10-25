import React, { Component } from 'react';
import './Login.css';
import { Button,  CardBody, CardGroup, Col, Container, Form, Input, FormGroup,Row } from 'reactstrap';
import { USERS_API_URL } from '../constants/user_api_url.js';
import axios from "axios";

class Login extends Component {

    constructor() {
        super();
 
        this.state = {
            Email: '',
            Password: ''
           
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
      handleSubmit(event) {
        const { email, password } = this.state;
    
        axios
          .post(
            "http://localhost:3000/login",
            {
              user: {
                email: email,
                password: password
              }
            },
            { withCredentials: true }
          )
          .then(response => {
            if (response.data.logged_in) {
              this.props.handleSuccessfulAuth(response.data);
            }
          })
          .catch(error => {
            console.log("login error", error);
          });
        event.preventDefault();
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
                                    <Form  onSubmit={this.handleSubmit}>
                                            <div 
                                            className="mb-2 pageheading">
                                                 <div className="col-sm-12 btn btn-primary"> 
                                                  <b> Login</b>
                                                 </div> 
                                            </div>
                                            <FormGroup className="mb-3">
                                            <Input type="text" 
                                            value={this.state.email}
                                                  onChange={this.handleChange}
                                                 placeholder="Enter Email" 
                                                 required
                                                 />
                                            </FormGroup>

                                            <FormGroup className="mb-4">
                                                <Input  type = 'password' id ="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                placeholder="password"  required
                                                />
                                             </FormGroup>

                                            <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                             </div>
                                            </div>
                                            <Button 
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
