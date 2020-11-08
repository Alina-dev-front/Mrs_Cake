import React from "react";
import { Form, FormControl } from 'react-bootstrap';
import styled from "@emotion/styled";
import Row from "./PaymentForm/Row";
import SubmitButton from "./PaymentForm/SubmitButton";
//import CheckoutError from "./PaymentForm/CheckoutError";
//import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import GlobalStyles from "./PaymentForm/GlobalStyles";
import { ORDERS_API_URL } from '../constants/orders_api_url';
import {removeAllProducts} from "../actions";
import { connect } from 'react-redux';


const CardElementContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
 & .StripeElement {
    width: 100%;
    padding: 30px;
  }
`;

class CheckoutForm extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            isProcessing : false,
            DeliveryPrice: 0,
            name : "",
            lastName : "",
            email : "",
            adress : "",
            city: "",
            country : "",
            zipcode : "",
            DeliveryMethod : ""
        });
    
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleAdressChange = this.handleAdressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
        this.submitNew = this.submitNew.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
     removeItemS = () => {
        this.props.dispatch(removeAllProducts());
    };
     handleNameChange(e){
        this.setState({name: e.target.value});
        console.log(this.state.name);
      }

      handleLastNameChange(e){
       this.setState({lastName: e.target.value});
     }

     handleEmailChange(e){
       this.setState({email: e.target.value});
     }
     handleAdressChange(e){
       this.setState({adress: e.target.value});
     }
     handleCityChange(e){
       this.setState({city: e.target.value});
     }
     handleCountryChange(e){
       this.setState({country: e.target.value});
     }
     handleZipCodeChange(e){
       this.setState({zipcode: e.target.value});
     }
     submitNew = async e => {
        e.preventDefault();
        fetch(`${ORDERS_API_URL}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                totalPrice: this.props.price + this.state.DeliveryPrice,
                userId: this.state.name + this.state.email + this.state.lastName,
                address: this.state.adress + "" + this.state.city + "" + this.state.country,
                comments: "",
                paid: true,
                DeliveryMethod: this.state.DeliveryMethod,
                OrderedProducts: this.props.cartItems

            })
        })

            .then(res => res.json())
            .then(order => {
                this.props.history.push('/checkout')
            })
            .catch(err => console.log(err));
    }

url(){
    document.location.href=
    'http://localhost:3000';
}

     handleDeliverySelectBox = (e) => {
        const name = e.target.id;
        if (name === "HomeBox" && e.target.checked) {
            document.getElementById("customCheck3").checked = false;
            document.getElementById("customCheck2").checked = false;
            document.getElementById("CardButton").disabled = false;
            this.setState({DeliveryMethod:"Home Delivery"});
            this.setState({DeliveryPrice:7})
        }
        else if (name === "customCheck3" && e.target.checked ) {
            document.getElementById("HomeBox").checked = false;
            document.getElementById("customCheck2").checked = false;
            document.getElementById("CardButton").disabled = false;
            this.setState({DeliveryMethod:"Pick up from store"});
           this.setState({DeliveryPrice:10});
        }
        else if (name === "customCheck2" && e.target.checked) {
            document.getElementById("HomeBox").checked = false;
            document.getElementById("customCheck3").checked = false;
            document.getElementById("CardButton").disabled = false;
            this.setState({DeliveryMethod:"Pick up from Bakery"});
            this.setState({DeliveryPrice:0});
        }
        else {
            this.setState({DeliveryPrice:0});
            document.getElementById("CardButton").disabled = true;


            

        }
    };

     handlePaymentSelectBox = (e) => {
        const name = e.target.id;
        //const value = e.target.cheched;
        if (name === "CreditCard" && e.target.checked && name !== "customCheck3") {
            document.getElementById("Swish").checked = false;
            document.getElementById("PhoneForm").style.visibility = 'hidden';
            document.getElementById("CardForm").style.visibility = 'visible';
            document.getElementById("Card").style.visibility = 'visible';
            document.getElementById("Card").disabled = false;
            
        }
        else if (name === "Swish" && e.target.checked && name !== "customCheck3") {
            document.getElementById("CreditCard").checked = false;
            document.getElementById("Card").style.visibility = 'visible';
             document.getElementById("CardForm").style.visibility = 'hidden';
            document.getElementById("PhoneForm").style.visibility = 'visible';
        }
        else {
            document.getElementById("CardButton").disabled = true;
            console.log(name);
        }
        
    };

    handleSubmit(event) {
       // alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
      }
 

   
    
   render(){
    const FormFieldContainer = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 15px;
    border-top: 1px solid #FFC0CB	;
  
    &:first-of-type {
      border-top: none;
    }
  `;
  
      const Label = styled.label`
    width: 20%;
    min-width: 70px;
    padding: 11px 0;
    color: #c4f0ff;
    overflow: hidden;
    font-size: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-right: 1px solid #819efc;
  `;
  
      const Input = styled.input`
    font-size: 15px;
    width: 100%;
    padding: 15px 15px 11px 8px;
    color: #fff;
    background-color: transparent;
    animation: 1ms void-animation-out;
  
    &::placeholder {
      color: #87bbfd;
    }
  `;
return (

    <form onSubmit={this.handleSubmit} >
        <Row>
        <FormFieldContainer >
                <Label htmlFor="name">Name</Label>
                <Input type="text" placeholder="name" value={this.state.name === '' ? '' : this.state.name } onChange={this.handleNameChange} required />
                </FormFieldContainer>
            <FormFieldContainer>
                <Label htmlFor="surname">surname</Label>
                <Input name="surname" type="text" placeholder="surname" value={this.state.lastName  === '' ? '' : this.state.lastName} onChange={this.handleLastNameChange}  required />
            </FormFieldContainer>
            <FormFieldContainer>
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="text" placeholder="email" value={this.state.email} onChange={this.handleEmailChange} required />
            </FormFieldContainer>
            <FormFieldContainer>
                <Label htmlFor="adress">adress</Label>
                <Input name="adress" type="text" placeholder="adress" value={this.state.adress} onChange={this.handleAdressChange} required />
            </FormFieldContainer>
            <FormFieldContainer>
                <Label htmlFor="country">Country</Label>
                <Input name="country" type="text" placeholder="country" value={this.state.country} onChange={this.handleCountryChange} required />
            </FormFieldContainer>
            <FormFieldContainer>
                <Label htmlFor="zipCode">zipCode</Label>
                <Input name="zipCode" type="text" placeholder="zipcode" value={this.state.zipcode} onChange={this.handleZipCodeChange} required />
            </FormFieldContainer> 
        </Row>
        <GlobalStyles />
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </head>
        <Row>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="HomeBox"  onInput={this.handleDeliverySelectBox} />
                    <label className="custom-control-label" htmlFor="HomeBox">Home delivery</label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" onInput={this.handleDeliverySelectBox} />
                    <label className="custom-control-label" htmlFor="customCheck2">Pick up from bakery</label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck3" onInput={this.handleDeliverySelectBox} />
                    <label className="custom-control-label" htmlFor="customCheck3">Pick up from the closest store</label>
                </div>
            </div>
        </Row>
        <Row id="Payment" >
            <div className="form-group">
                <div className="custom-control custom-checkbox">

                    <input type="checkbox" className="custom-control-input" id="CreditCard" onInput={this.handlePaymentSelectBox} />
                    <label className="custom-control-label" htmlFor="CreditCard">Credit card</label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">

                    <input type="checkbox" className="custom-control-input" id="Swish" onInput={this.handlePaymentSelectBox} />
                    <label className="custom-control-label" htmlFor="Swish">Swish</label>
                </div>
            </div>
        </Row>
        <Row id="CardForm" style={{ visibility: 'hidden' }} >
            <CardElementContainer>
            <Form inline style={{ marginLeft: "30%" }} >
                    <FormControl type="text" placeholder="xxxxxxxxxxxxx xx/xx" className="mr-sm-2"></FormControl></Form>
                
            </CardElementContainer>
        </Row>
        <Row id="Card" style={{ visibility: 'hidden' }}>
            <SubmitButton disabled={this.isProcessing ||  this.props.price === 0 } id="CardButton"  onClick={(e) => {this.submitNew(e); this.removeItemS()}}  >
                {this.isProcessing ? "SUCCEFULLY PAID" : `Pay $${this.props.price + this.state.DeliveryPrice}`}
            </SubmitButton>
        </Row>
        <Row id="PhoneForm" style={{ visibility: 'hidden' }}>
            <CardElementContainer  >
                <Form inline style={{ marginLeft: "30%" }} >
                    <FormControl type="text" placeholder="0700054540" className="mr-sm-2"></FormControl></Form>
            </CardElementContainer>
        </Row>
       
    </form>
);
};
   }
   

  

const mapStateToProps = (state) => {
    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),

        price: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
};
export default connect(mapStateToProps, null)(CheckoutForm);