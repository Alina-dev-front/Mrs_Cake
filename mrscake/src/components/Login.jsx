import React, { Component } from 'react';
import './Login.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, 
         FormGroup, FormGroupAddon, FormGroupText, Row } from 'reactstrap';
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
 
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(event) {
        debugger;
        fetch('http://localhost:3000/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push("/Dashboard");
            })
    }
 
    render() {
         return <Form  onSubmit={this.props.user ? this.submitEdit : this.submitNew}>

            
            <div className="app flex-row align-items-center">
                <Container><br/><br/><br/>
                
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <div class="row" 
                                            className="mb-2 pageheading">
                                                <div class="col-sm-12 btn btn-primary">
                                                    Login
                                                </div>
                                            </div>
                                            <FormGroup className="mb-3">
                                                <Input required='true' type="email" name = "email"
                                                 onChange={this.Email} 
                                                 placeholder="Email" />
                                            </FormGroup>
                                            <FormGroup className="mb-4">
                                                <Input required='true' type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                onChange={this.Password} 
                                                placeholder="Password" />
                                            </FormGroup>

                                            <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                             </div>
                                            </div>
                                            <Button onClick={this.login} 
                                            color="success" block href="/homePage" >Login</Button>
                                            <p className="forgot-password text-center">
                                            <a href="abc">Forgot password?</a><br/><br/>
                                            <button >  <a role="button" class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy" href="/signup"
                                            ajaxify="/reg/spotlight/" id="u_0_2" data-testid="open-registration-form-button" rel="async">
                                            Not Registered,Sign Up</a></button>
                                                </p>

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
 
export default Login;