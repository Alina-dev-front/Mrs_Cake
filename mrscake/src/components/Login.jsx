import React, { Component } from 'react';
import './Login.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, 
         InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
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
        return (

            
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
                                            <InputGroup className="mb-3">
                                                <Input type="text" 
                                                 onChange={this.Email} 
                                                 placeholder="Email" />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="password" 
                                                onChange={this.Password} 
                                                placeholder="Password" />
                                            </InputGroup>

                                            <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                                            <Button onClick={this.login} 
                                            color="success" block>Login</Button>
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
        );
    }
}
 
export default Login;