import React, { Component } from 'react';
import './Login.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, FormGroup,Row } from 'reactstrap';
import { LOGIN_API_URL } from '../constants/api_url_path';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {
              id: '',
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              mobilePhone: '',
              address: '',
              creditCardNUmber: '',
              userRolls: '',
              status: '',
              message: ''
          }
        }
    }

    componentDidMount() {
        if (this.props.user) {
            const { id, firstName, lastName, email, password, mobilePhone, address, creditCardNUmber, userRolls, status, message } = this.props.product
            this.setState({ id, firstName, lastName, email, password, mobilePhone, address, creditCardNUmber, userRolls, status, message });
        }
    }

    getUser = () => {
        fetch(`${LOGIN_API_URL}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.inputEmail,
                password: this.inputPassword
            })
        })
        // .then(res => res.json())
        // .then(userData => {
        //     this.setState({ user: userData })
        // })
        // .catch(err => console.log(err));
    }

    login = (e) => {
        e.preventDefault();
        let request = {
            inputEmail: document.getElementById('inputEmail').value,
            inputPassword: document.getElementById('inputPassword').value,
        }
        this.getUser(request);
    }

    render() {
        return <Form onSubmit={(e) => this.login(e)}>
                <Container style={{paddingTop: "100px"}}>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <Row className="mb-2 pageheading"> 
                                                <div class="col-sm-12 btn btn-primary">
                                                    Login
                                                </div>
                                            </Row>
                                            <FormGroup className="mb-3">
                                                <Input type="email" name = "inputEmail"  id="inputEmail" placeholder="Email" />
                                            </FormGroup>	                                           
                                            <FormGroup className="mb-4">
                                                <Input type="text" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name = "inputPassword" id="inputPassword" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                placeholder="Password" />
                                            </FormGroup>
                                            <FormGroup>
                                                <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                                </div>
                                            </FormGroup>
                                            <Button color="success" block >Login</Button>
                                            <p className="forgot-password text-center">
                                            <b> <a href="forgotpassword">Forgot password?</a></b><br/><br/>
                                            <b> <a role="button" class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy" href="/signup"
                                            data-testid="open-registration-form-button" rel="async">
                                                Not Registered,Sign Up</a></b>
                                            </p>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
        </Form>
    }
}

export default Login;
