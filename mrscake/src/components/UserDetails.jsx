import React, { Component } from 'react';
import { Button,  Form, 
  Input,  } from 'reactstrap';	  
import { USERS_API_URL } from '../constants/user_api_url.js';
import './Login.css';

class UserDetails extends Component {
  state = 
  {
    
    mobilePhone: "", 
    address: "",
    crediCardNumber: "",     
     
    }
    
    mySubmitHandler = (event) => {
      event.preventDefault();
      this.props.history.push('/login')
    } 

    testRoute = () => {
      // this.props.history.push('/login')
    } 
    
    componentDidMount() {
      if (this.props.user) {
          const { mobilePhone, address, creditCardNumber } = this.props.user
          this.setState({ mobilePhone, address, creditCardNumber });
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
              this.props.history.push('/login')
          })
          .catch(err => console.log(err));

        }
        
  render() {
      
    return <Form onSubmit={this.props.user ? this.submitEdit : this.submitNew}>
        
        <div>
            
           
                <br/><br/><br/><br/> <br/><br/>  <div className="col-md-3 center">
               <h2>   <p><b>Enter more user details</b></p> </h2>   </div> 
               <Input className="col-md-3 center"  type="text" name="address" onChange={this.handleChange} value={this.state.address === '' ? '' : this.state.address} placeholder="Address" />
                   
                
                     <Input className="col-md-3 center"  type="int" name="mobilePhone" onChange={this.handleChange} value={this.state.mobilePhone === '' ? '' : this.state.mobilePhone } placeholder="MobilePhone" />
                   
               
                   
                    <Input className="col-md-3 center" type="int"  name="creditCardNumber" onChange={this.handleChange} 
                    value={this.state.credtCardNumber=== '' ? '' : this.state.creditCardNumber} placeholder="CreditCardNumber" />
                   
          
                   
                
                 <br/>   <Button className="col-md-3 center" onSubmit={this.mySubmitHandler} color="success" block >Submit</Button>
                    </div>
                    
                    </Form>
               
                }   
  }


export default UserDetails;
