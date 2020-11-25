import React, { Component } from 'react';
import { Button, Form, Input,  Row, FormGroup, CardBody, Card, CardGroup, Col, Container} from 'reactstrap';	  
import { USERS_API_URL } from '../constants/user_api_url.js';
import './UserDetails.css';
import Cookies from 'js-cookie';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { }
    }
  }
  
  componentDidMount() {
        this.getUser();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
   } 
  
  getUser = () => {
    let userId = Cookies.get('user_id');
    fetch(`${USERS_API_URL}/${userId}`, {
             method: 'get',
             headers: {'Content-Type': 'application/json'},
           })
           .then(response => {
               var dbResponse = response.json();
               return dbResponse;
           })
           .then(userData => {
             this.setState({user: userData});
           })
  }

  updateState = (id) => {
    this.getUser();
  }

  submitEdit = () => { 
      fetch(`${USERS_API_URL}/${Cookies.get('user_id')}`, {
          method: 'put',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: this.state.user.id,
            firstName: this.state.user.firstName,
            lastName: this.state.user.lastName,
            email: this.state.user.email,
            password: this.state.user.password,
            mobilePhone: this.state.user.mobilePhone,
            address: this.state.user.address,
            creditCardNumber: this.state.user.creditCardNumber, 
            userRole: this.state.user.userRole,
            loginStatus: "Logged in"
          })
      })
          .then(() => {
              this.updateState(this.state.user.id);
          })
          .catch(err => console.log(err));
  }
        
  render() {
        return  <Form onSubmit={() => this.submitEdit()}>
                    <div className="app flex-row align-items-center">
                        <Container style={{paddingTop: "100px"}}>
                            <Row className="justify-content-center">
                                <Col md="9" lg="7" xl="6">
                                    <CardGroup>
                                        <Card className="p-2">
                                            <CardBody style={{paddingBottom: "50px"}}>
                                            <div className="user-profile-title">USER PROFILE</div>
                                            <FormGroup className="mb-3">
                                              <Input className="mb-3" required={true} type="text" name="firstName" onChange={this.handleChange} value={this.state.user.firstName === '' ? '' : this.state.user.firstName} placeholder="First Name" />
                                            </FormGroup>
                                            <FormGroup className="mb-3">  
                                              <Input className="mb-3" required={true} type="text" name="lastName" onChange={this.handleChange} value={this.state.user.lastname === '' ? '' : this.state.user.lastName } placeholder="Last Name" />
                                            </FormGroup>
                                            <FormGroup className="mb-3">
                                              <Input className="mb-3" required={true} type="email" name="email" onChange={this.handleChange} value={this.state.user.email === '' ? '' : this.state.user.email} placeholder="Email" />
                                            </FormGroup>
                                            <FormGroup className="mb-3">
                                              <Input className="mb-3" required={true} type="password" name="password" onChange={this.handleChange} value={this.state.user.password === '' ? '' : this.state.user.password}  placeholder="Password" />
                                            </FormGroup>
                                            <FormGroup className="mb-3">
                                              <Input className="mb-3" type="text" name="address" onChange={this.handleChange} value={this.state.user.address === '' ? '' : this.state.user.address} placeholder="Address" />
                                            </FormGroup>
                                            <FormGroup className="mb-3">
                                              <Input className="mb-3"  type="int" name="mobilePhone" onChange={this.handleChange} value={this.state.user.mobilePhone === '' ? '' : this.state.user.mobilePhone } placeholder="Mobile Phone" />
                                            </FormGroup>
                                            <FormGroup className="mb-3">
                                              <Input className="mb-3" type="int"  name="creditCardNumber" onChange={this.handleChange} value={this.state.user.credtCardNumber=== '' ? '' : this.state.user.creditCardNumber} placeholder="Credit Card Number" />
                                            </FormGroup>
                                            <Button color="success" block >Submit</Button>
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

export default UserDetails;
