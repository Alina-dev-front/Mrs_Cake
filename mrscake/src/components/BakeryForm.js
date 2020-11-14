import React, { Component } from 'react';
import { Button, Form, Input, Row,  FormGroup } from 'reactstrap';	  
import { BAKERIES_API_URL } from '../constants/bakeries_api_url.js';

class BakeryForm extends Component {
  state = 
  {
    id: '',
    name: '',
    email:'',
    phone: '', 
    address: '',     
  }
    componentDidMount() {
      if (this.props.bakery) {
          const { id, name, email, phone, address } = this.props.bakery
          this.setState({ id, name, email, phone, address });
      }
    }

     handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
     }  

     submitNew = e => {
      e.preventDefault();
      fetch(`${BAKERIES_API_URL}`, {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
              address: this.state.address,
              phone: this.state.phone,
          })
      })
      
    .then(res => res.json())
    .then(bakery => {
      this.props.addBakeryToState(bakery);
      this.props.toggle();

    })
    .catch(err => console.log(err));
  }

  submitEdit = e => { 
    e.preventDefault();
    fetch(`${BAKERIES_API_URL}/${this.state.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
            address: this.state.address,
            phone: this.state.phone,
        })
    })
        .then(() => {
            this.props.toggle();
            
            this.props.updateBakeryIntoState(this.state.id);
           
        })
        .catch(err => console.log(err));

      }
          
  render() {
        return  <Form onSubmit={this.props.bakery ? this.submitEdit : this.submitNew}>
                  <div className="app flex-row align-items-center">
                    
                                <Row className="mb-2 pageheading" style={{marginLeft: "0px"}}> 
                                  <div >
                                    <b>Bakery Details</b>
                                  </div>
                                </Row>
                                
                      <FormGroup >
                      <Input  type="text" name="name" onChange={this.handleChange} 
                      value={this.state.name === '' ? '' : this.state.name} placeholder="Name" />
                      </FormGroup>
                      <FormGroup >
                      <Input  type="email" name="email" onChange={this.handleChange} 
                      value={this.state.email === '' ? '' : this.state.email} placeholder="Email" />
                     </FormGroup>
                     <FormGroup>
                  <Input className="mb-3" type="text" name="address" onChange={this.handleChange} value={this.state.address === '' ? '' : this.state.address} placeholder="Address" />
                  </FormGroup>
                  <FormGroup>
                      <Input className="mb-3"  type="int" name="phone" onChange={this.handleChange} value={this.state.phone === '' ? '' : this.state.phone } placeholder="Phone" />
                      </FormGroup>
                                <Button color="success" block >Submit</Button>
                            
                  </div>
                </Form>
    }   
}

export default BakeryForm;
