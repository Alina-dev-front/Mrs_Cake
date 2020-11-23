import React, { Component } from 'react';
import { Button, Card,  CardBody,  Col, Container, Form, Input, FormGroup, Row, Label } from 'reactstrap';	  
import './Login.css';
import { USERS_API_URL } from '../constants/user_api_url';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = 
  {
    id: "",
    firstName: "", 
    lastName: "",     
    email: '',
    password: '',
    confirmPassword: '', 
    userRole: '',   
    }
    
    mySubmitHandler = (event) => {
      event.preventDefault();
      this.props.history.push('/userdetails')
    } 

    componentDidMount() {
      if (this.props.user) {
          const { id, firstName, lastName, email, password, confirmPassword, userRole } = this.props.user
          this.setState({ id, firstName, lastName, email, password, confirmPassword, userRole});
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
            userRole: this.state.userRole
        })
    })
    
  .then(res => res.json())
  .then(user => {
      this.props.history.push('/login')
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
          userRole: this.state.userRole  
          })
      })
          .then(() => {
              this.props.toggle();
              
              this.props.updateUserIntoState(this.state.id);
              this.props.history.push('/userdetails')
          })
          .catch(err => console.log(err));

        }
        SignUp = () => { 
          document.getElementById("user-reg").reset();
        }
  render() {
    return <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
      <div className="app flex-row align-items-center">
        <Container style={{paddingTop: "100px"}}>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
               
                <div className="links" style={{color: "Black"}}>
                <b>USER SIGN UP</b>
                </div> 

                    <FormGroup className="mb-3">
                      <Input required={true} type="text" name="firstName" onChange={this.handleChange} value={this.state.firstname === '' ? '' : this.state.firstName} placeholder="First Name" />
                      <Input required={true} type="text" name="lastName" onChange={this.handleChange} value={this.state.lastname === '' ? '' : this.state.lastName } placeholder="Last Name" />
                    </FormGroup>

                    <FormGroup className="mb-3">
                      <Input required={true} type="email" name="email" onChange={this.handleChange} 
                      value={this.state.email === '' ? '' : this.state.email} placeholder="Email" />
                    </FormGroup>

                    <FormGroup className="mb-3">
                      <Input required={true} type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"  onChange={this.handleChange} value={this.state.password === '' ? '' : this.state.password}  placeholder="Password"   />
                    </FormGroup>

                    <FormGroup className="mb-3">
                      <Input required={true} type="password" name="confirmPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"   onChange={this.handleChange} value={this.state.confirmPassword === '' ? '' : this.state.confirmPassword} placeholder="Confirm Password" />
                    </FormGroup>

                    <Label>Select your User Role:</Label><br />
                    <div style={{marginLeft: "20px", marginBottom: "10px"}}>
                      <Input required={true} type="radio" id="User" name="userRole" onChange={this.handleChange} value={this.state.userRole === '' ? '' : this.state.userRole} value="Customer" /> Are you Customer?<br/>
                      <Input required={true} type="radio" id="Bakery" name="userRole" onChange={this.handleChange} value={this.state.userRole === '' ? '' : this.state.userRole} value ="BakeryOwner" /> Are you bakery Manager?<br/>
                    </div>

                    <Button onSubmit={this.mySubmitHandler} color="success" block >Create Account</Button>
                    
                    <div className="links">
                      <Link to="/login">Already registered? Sign in</Link>
                    </div>

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
