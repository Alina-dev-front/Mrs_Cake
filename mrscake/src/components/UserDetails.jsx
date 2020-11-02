import React, { Component } from 'react';
import { Button, Form, Input, CardBody, Card, Container, Row, Col, CardGroup } from 'reactstrap';	  
import { USERS_API_URL } from '../constants/user_api_url.js';
import './Login.css';

class UserDetails extends Component {
  state = 
  {
    
    mobilePhone: '', 
    address: '',
    crediCardNumber: ''   
     
  }
  componentDidMount() {
    if (this.props.user) {
        const {  mobilePhone, address, creditCardNumber } = this.props.user
        this.setState({  mobilePhone, address, creditCardNumber });
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
              mobilePhone: this.state.mobilePhone,
              address: this.state.address,
              creditCardNumber: this.state.creditCardNumber, 
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateUserIntoState(this.state.id);
                this.props.history.push('/')
            })
            .catch(err => console.log(err));
    }
        
  render() {
        return  <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
                  <div className="app flex-row align-items-center">
                    <Container style={{paddingTop: "100px"}}>
                      <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                          <CardGroup>
                            <Card className="p-2">
                              <CardBody style={{paddingBottom: "50px"}}>
                                <Row className="mb-2 pageheading" style={{marginLeft: "0px"}}> 
                                  <div className="col-sm-12 btn btn-primary">
                                    User Details
                                  </div>
                                </Row>
                                <Input className="mb-3" type="text" name="address" onChange={this.handleChange} value={this.state.address === '' ? '' : this.state.address} placeholder="Address" />
                                <Input className="mb-3"  type="int" name="mobilePhone" onChange={this.handleChange} value={this.state.mobilePhone === '' ? '' : this.state.mobilePhone } placeholder="MobilePhone" />
                                <Input className="mb-3" type="int"  name="creditCardNumber" onChange={this.handleChange} value={this.state.credtCardNumber=== '' ? '' : this.state.creditCardNumber} placeholder="CreditCardNumber" />
                                <Button className="mb-3" onSubmit={this.mySubmitHandler} color="success" block >Submit</Button>
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
