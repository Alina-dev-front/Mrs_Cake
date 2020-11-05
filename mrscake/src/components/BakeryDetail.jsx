import React, { Component } from 'react';
import { Button, Form, Input, CardBody, Card, Container, Row, Col, CardGroup } from 'reactstrap';	  
import { USERS_API_URL } from '../constants/user_api_url.js';
import './Login.css';

class BakeryDetail extends Component {
  state = 
  {
    
    mobilePhone: '', 
    address: '',
      
     
  }
    
    mySubmitHandler = (event) => {
      event.preventDefault();
      this.props.history.push('/')
    } 

    componentDidMount() {
      if (this.props.user) {
          const { mobilePhone, address } = this.props.user
          this.setState({ mobilePhone, address });
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
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateUserIntoState(this.state.id);
            })
            .catch(err => console.log(err));
    
    
        
    }
        
  render() {
        return  <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
                  <div className="app flex-row align-items-center">
                    <Container style={{paddingTop: "120px"}}>
                      <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                          <CardGroup>
                            <Card className="p-2">
                              <CardBody style={{paddingBottom: "100px"}}>
                                <Row className="mb-2 pageheading" style={{marginLeft: "0px"}}> 
                                  <div className="col-sm-12 btn btn-primary">
                                    Bakery Details
                                  </div>
                                </Row>
                                <Input className="mb-3" type="text" name="address" onChange={this.handleChange} value={this.state.address === '' ? '' : this.state.address} placeholder="Address" />
                                <Input className="mb-3"  type="int" name="mobilePhone" onChange={this.handleChange} value={this.state.mobilePhone === '' ? '' : this.state.mobilePhone } placeholder="MobilePhone" />
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

export default BakeryDetail;
