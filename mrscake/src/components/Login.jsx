import React, { Component } from 'react';
import './Login.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, 
         FormGroup,Row } from 'reactstrap';

class Login extends Component {
    state = 
    {
        Email: '',	
        Password: '',	     
     }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are successfully signed in ");
  } 
  componentDidMount() {
      if (this.props.user) {
          const { email, password } = this.props.user
          this.setState({  email, password,});
      }
  }

  handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
  }  

  Login = () => { 
      document.getElementById("user-log").reset();
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
                                                <Input required='true' type="email" name = "email" Input  onChange={this.handleChange} value={this.state.email === '' ? '' : this.state.email} placeholder="Email" />

                                            </FormGroup>	                                           
                                            <FormGroup className="mb-4">
                                                <Input required='true' type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                onChange={this.password} 
                                                placeholder="password" />
                                            </FormGroup>

                                            <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                             </div>
                                            </div>
                                            <Button color="success" block >Login</Button>
                                            <p className="forgot-password text-center">
                                            <b> <a href="forgotpassword">Forgot password?</a></b><br/><br/>
                                            <b> <a role="button" class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy" href="/signup"
                                            ajaxify="/reg/spotlight/" id="u_0_2" data-testid="open-registration-form-button" rel="async">
                                          Not Registered,Sign Up</a></b>
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
