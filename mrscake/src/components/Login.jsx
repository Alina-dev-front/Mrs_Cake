import React from 'react';
import './Login.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, FormGroup,Row, Label } from 'reactstrap';
import { LOGIN_API_URL } from '../constants/api_url_path';
import { Link } from 'react-router-dom';
import CallCookie from './CookieFunction';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }

    getUser = (request) => {
        fetch(`${LOGIN_API_URL}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: request.inputEmail,
                password: request.inputPassword
            })
        })
        .then(response => {
            if(response.status === 200) {
                var dbResponse = response.json();
                return dbResponse;
            }
            alert("User not found. Check email and password and try again");
        })
        .then(userData => {
            this.setState({ user: userData })
            if(this.state.user && this.state.user.loginStatus === "Logged in") {
                this.showWelcome(this.state.user.firstName)
                this.props.history.push('/')
            } else if(this.state.user &&  this.state.user.loginStatus === "Invalid password") {
                alert(this.state.user.loginStatus)
            }
        })     
        .catch(err => console.log(err));
    }

    login = (e) => {
        e.preventDefault();
        let request = {
            inputEmail: document.getElementById('inputEmail').value,
            inputPassword: document.getElementById('inputPassword').value,
        }
        this.getUser(request);
    }
    showWelcome = (userName) => {
        alert("Welcome, " + userName);
    }

    render() {
        return <Form onSubmit={(e) => this.login(e)}>
                    <div className="app flex-row align-items-center">
                        <Container style={{paddingTop: "100px"}}>
                            <Row className="justify-content-center">
                                <Col md="9" lg="7" xl="6">
                                    <CardGroup>
                                        <Card className="p-2">
                                            <CardBody style={{paddingBottom: "50px"}}>
                                            <div className="links" style={{color: "Black"}}>
                                            <b>LOGIN PAGE</b>
                                            </div>
                                                <FormGroup className="mb-3">
                                                    <Input type="email" name = "inputEmail"  id="inputEmail" placeholder="Email" />
                                                </FormGroup>	                                           
                                                <FormGroup className="mb-4">
                                                    <Input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name = "inputPassword" id="inputPassword" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                    placeholder="Password" />
                                                </FormGroup>
                                                <FormGroup>
                                                <div className="custom-control custom-checkbox">
                                                    <Input type="checkbox" className="custom-control-input" />
                                                    <Label className="custom-control-label">Remember me</Label>
                                                </div>	
                                                </FormGroup>
                                                <Button color="success" block>Login</Button>
                                                <div style={{ display: "none"}}>
                                                    <CallCookie 
                                                        user = {this.state.user}
                                                    />
                                                </div>
                                                <div className="links">
                                                    <Link to="/forgotpassword">Forgot password?</Link><br />
                                                    <Link to="/signup">Not Registered? Sign Up</Link>
                                                </div>
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

export default Login;
