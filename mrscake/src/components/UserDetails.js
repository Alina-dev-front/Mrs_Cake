import React, { Component } from 'react';
import { Button, Form, Input,  Row, FormGroup, CardBody, Card, CardGroup,Col,Container,} from 'reactstrap';	  
import { USERS_API_URL } from '../constants/user_api_url.js';
import './Login.css';
import Cookies from 'js-cookie';

class UserDetails extends Component {
  state = 
  {
    id:'',
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    mobilePhone: '', 
    address: '',
    crediCardNumber: ''   
     
  }
  componentDidMount() {
    if (this.props.user) {
        const {  id, firstName, lastName, email, password, mobilePhone, address, creditCardNumber } = this.props.user
        this.setState({  id, firstName, lastName, email, password, mobilePhone, address, creditCardNumber });
    }

  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
   } 
  
    submitEdit = e => { 
        e.preventDefault();
        fetch(`${USERS_API_URL}/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
               
            },
            body: JSON.stringify({
              id: Cookies.get('user_id'),
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              password: this.state.password,
              mobilePhone: this.state.mobilePhone,
              address: this.state.address,
              creditCardNumber: this.state.creditCardNumber, 
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateUserIntoState(this.state.id);
                
            })
            .catch(err => console.log(err));
    }
        
  render() {
    
    let id = Cookies.get('user_id');
    if(id == null || id === "") {
  
        return  <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
                    <div className="app flex-row align-items-center">
                        <Container style={{paddingTop: "100px"}}>
                            <Row className="justify-content-center">
                                <Col md="9" lg="7" xl="6">
                                    <CardGroup>
                                        <Card className="p-2">
                                            <CardBody style={{paddingBottom: "50px"}}>
                                            <div className="links" style={{color: "Black"}}>
                                            <b>USER PROFILE</b>
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
                                <Input className="mb-3" type="text" name="address" onChange={this.handleChange} value={this.state.address === '' ? '' : this.state.address} placeholder="Address" />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                <Input className="mb-3"  type="int" name="mobilePhone" onChange={this.handleChange} value={this.state.mobilePhone === '' ? '' : this.state.mobilePhone } placeholder="MobilePhone" />
                                </FormGroup>
                                <FormGroup className="mb-3">
                                <Input className="mb-3" type="int"  name="creditCardNumber" onChange={this.handleChange} value={this.state.credtCardNumber=== '' ? '' : this.state.creditCardNumber} placeholder="CreditCardNumber" />
                                </FormGroup>
                                <Button color="success" block >Submit</Button>
                                     </CardBody>
                                        </Card>
                                    </CardGroup>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Form>;
    }  }   
}

export default UserDetails;
