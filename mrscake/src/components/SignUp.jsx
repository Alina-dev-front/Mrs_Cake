import React, { Component } from 'react';
import { Button, Card,  CardBody,  Col, Container, Form, 
    Input, FormGroup, Row } from 'reactstrap';
import { USERS_API_URL } from '../constants/user_api_url.js';
import './Login.css';
class SignUp extends Component {
  state = 
  {
    id: "",
    firstName: "", 
    lastName: "",     
    email: '',
    password: '',
    confirmPassword: '', 
    userRolls: '',   
    }
    
    mySubmitHandler = (event) => {
      event.preventDefault();
      alert("You are successfully signed up ");
    } 

   
    
    componentDidMount() {
      if (this.props.user) 
      {
          const { id, firstName, lastName, email, password, confirmPassword, userRolls } = this.props.user
          this.setState({ id, firstName, lastName, email, password, confirmPassword, userRolls});
     }
     }

     handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
  }  
  
  submitNew = e => {
    e.preventDefault();
    fetch(`${USERS_API_URL}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            userRolls: this.state.userRolls
        })
    })
    
  .then(res => res.json())
  .then(user => {
      this.props.addUserToState(user);
      this.props.toggle();
  })
  .catch(err => console.log(err));
}

    
  submitEdit = e => { 
      e.preventDefault();
      fetch(`${USERS_API_URL}/${this.state.id}`, {
          method: 'put',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword, 
          userRolls: this.state.userRolls  
          })
      })
          .then(() => {
              this.props.toggle();
              this.props.updateUserIntoState(this.state.id);
          })
          .catch(err => console.log(err));

        }
        SignUp = () => { 
          document.getElementById("user-reg").reset();
        }
  render() {
      
    return <Form id ="user-reg" onSubmit={this.props.user ? this.submitEdit : this.submitNew}>

      <div className="app flex-row align-items-center"><br/><br/>
        <Container><br/>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
               
                    <div class="row" className="mb-2 pageheading">
                      <div class="col-sm-12 btn btn-primary">
                        Sign Up
                        </div>
                    </div>
                    <div>

                    <FormGroup className="mb-3">
                    <Input required='true' type="text" name="firstName" onChange={this.handleChange} value={this.state.firstname === '' ? '' : this.state.firstName} placeholder="First Name" />
                    <Input required='true' type="text" name="lastName" onChange={this.handleChange} value={this.state.lastname === '' ? '' : this.state.lastName } placeholder="Last Name" />
                   
                    </FormGroup>
                    </div>
                    <FormGroup className="mb-3">
                    <Input required='true' type="email" name="email" onChange={this.handleChange} value={this.state.email === '' ? '' : this.state.email} placeholder="Email" />
                    
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Input required='true' type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required onChange={this.handleChange} value={this.state.password === '' ? '' : this.state.password}  placeholder="Password"   />

                    </FormGroup>
                    <FormGroup className="mb-3">
                    <Input required='true' type="password" name="confirmPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required  onChange={this.handleChange} value={this.state.confirmPassword === '' ? '' : this.state.confirmPassword} placeholder="Confirm Password" />

                    </FormGroup>
                    <p><b>Select one User Role : </b></p>
                    <input required='true'type="radio" id="User" name="userRolls" onChange={this.handleChange} value={this.state.userRolls === '' ? '' : this.state.userRolls}value="Customer" /> Are you Customer?<br/>
                    <input required='true' type="radio" id="Bakery" name="userRolls" onChange={this.handleChange} value={this.state.userRolls === '' ? '' : this.state.userRolls} value ="BakeryOwner" /> Are you bakery Manager? <br/>
                    <div>
                   <Button  color="success" block >Create Account</Button>
                  
                   <p className="link text-center">
                   <b> <a role="button" class="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy" href="/login"
                                            ajaxify="/reg/spotlight/" id="u_0_2" data-testid="open-registration-form-button" rel="async">
                                            Already Registered,Sign in</a></b>
                                            </p></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      
      </Form>;
      
  
  }
}


export default SignUp;

