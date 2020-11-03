import React, { useState } from "react";
import { Form, FormControl } from 'react-bootstrap';
import styled from "@emotion/styled";
//import axios from "axios";
import Row from "./PaymentForm/Row";
import SubmitButton from "./PaymentForm/SubmitButton";
import CheckoutError from "./PaymentForm/CheckoutError";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import BillingDetailsFields from "./PaymentForm/BillingDetailsFields";
import GlobalStyles from "./PaymentForm/GlobalStyles";
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
const CheckoutForm = ({ price, onSuccessfulCheckout }) => {
    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();
    const [DeliveryPrice, setDeliveryPrice] = useState(0);
    const stripe = useStripe();
    const elements = useElements();

    const handleCardDetailsChange = ev => {
        ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
    };

    const handleFormSubmit = async ev => {
        ev.preventDefault();

        const billingDetails = {
            name: ev.target.name.value,
            email: ev.target.email.value,
            address: {
                city: ev.target.city.value,
                line1: ev.target.address.value,
                country: ev.target.country.value,
                postal_code: ev.target.zip.value
            }
        };
        setProcessingTo(true);
        // const cardElement = elements.getElement(CardElement);


    };


    //stripe.com/docs.js
    const cardElementOption = {
        iconStyle: 'solid',
        style: {
            base: {
                iconColor: '#c4f0ff',
                color: '#fff',
                fontWeight: 300,
                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                ':-webkit-autofill': {
                    color: '#fce883',
                },
                '::placeholder': {
                    color: '#87bbfd',
                },
                invalid: {
                    color: "#ffc7cf",
                    iconColor: "#87bbfd",
                },
            },
        },
        hidePostalCode: true,
    };

    const handleDeliverySelectBox = (e) => {
        const name = e.target.id;
        //const value = e.target.cheched;

        if (name === "customCheck1" && e.target.checked && name !== "customCheck3") {
            document.getElementById("customCheck3").checked = false;
            document.getElementById("customCheck2").checked = false;
            setDeliveryPrice(7);

        }

        else if (name === "customCheck3" && e.target.checked && name !== "customCheck1") {
            document.getElementById("customCheck1").checked = false;
            document.getElementById("customCheck2").checked = false;
            setDeliveryPrice(10);

        }
        else if (name === "customCheck2" && e.target.checked && name !== "customCheck3") {
            document.getElementById("customCheck1").checked = false;
            document.getElementById("customCheck3").checked = false;
            setDeliveryPrice(0);
        }
        else {
            setDeliveryPrice(0);
            console.log(name);
        }
    };

    const handlePaymentSelectBox = (e) => {
        const name = e.target.id;
        //const value = e.target.cheched;
        if (name === "CreditCard" && e.target.checked && name !== "customCheck3") {
            document.getElementById("Klarna").checked = false;
            document.getElementById("Swish").checked = false;
            document.getElementById("PayWhitKlarna").style.visibility = 'hidden';
            document.getElementById("PayWhitSwish").style.visibility = 'hidden';
            document.getElementById("PhoneForm").style.visibility = 'hidden'; 
            document.getElementById("CardForm").style.visibility = 'visible'; 
            document.getElementById("Card").style.visibility = 'visible';
            document.getElementById("Card").disabled = false;
        }

        else if (name === "Klarna" && e.target.checked && name !== "customCheck1") {
            document.getElementById("CreditCard").checked = false;
            document.getElementById("Swish").checked = false;
            document.getElementById("Card").style.visibility = 'hidden';
            document.getElementById("PayWhitSwish").style.visibility = 'hidden';
            document.getElementById("CardForm").style.visibility = 'hidden'; 
            document.getElementById("PhoneForm").style.visibility = 'hidden'; 
            document.getElementById("PayWhitKlarna").style.visibility = 'visible';
            
        }
        else if (name === "Swish" && e.target.checked && name !== "customCheck3") {
            document.getElementById("CreditCard").checked = false;
            document.getElementById("Klarna").checked = false;
            document.getElementById("Card").style.visibility = 'hidden';
            document.getElementById("PayWhitKlarna").style.visibility = 'hidden';
            document.getElementById("CardForm").style.visibility = 'hidden'; 
            document.getElementById("PayWhitSwish").style.visibility = 'visible';
            document.getElementById("PhoneForm").style.visibility = 'visible'; 


        }
        else {
            document.getElementById("CardButton").disabled = true;
            document.getElementById("KlarnaButton").disabled = true;
            document.getElementById("SwishButton").disabled = true;
           
            console.log(name);
        }
    };

    return (
        
        <form onSubmit={handleFormSubmit}>
            <Row>
                <BillingDetailsFields />
            </Row>
            <GlobalStyles />
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </head>
            <Row>
            <div className="form-group">
                <div className="custom-control custom-checkbox">

                    <input type="checkbox" className="custom-control-input" id="customCheck1" onInput={handleDeliverySelectBox} />
                    <label className="custom-control-label" htmlFor="customCheck1">Home delivery</label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">

                    <input type="checkbox" className="custom-control-input" id="customCheck2" onInput={handleDeliverySelectBox} />
                    <label className="custom-control-label" htmlFor="customCheck2">Pick up from bakery</label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">

                    <input type="checkbox" className="custom-control-input" id="customCheck3" onInput={handleDeliverySelectBox} />
                    <label className="custom-control-label" htmlFor="customCheck3">Pick up from the closest store</label>
                </div>
            </div>
            </Row>
            <Row>
            <div className="form-group">
                <div className="custom-control custom-checkbox">

                    <input type="checkbox" className="custom-control-input" id="CreditCard" onInput={handlePaymentSelectBox} />
                    <label className="custom-control-label" htmlFor="CreditCard">Credit card</label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">

                    <input type="checkbox" className="custom-control-input" id="Klarna" onInput={handlePaymentSelectBox} />
                    <label className="custom-control-label" htmlFor="Klarna">Klarna</label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">

                    <input type="checkbox" className="custom-control-input" id="Swish" onInput={handlePaymentSelectBox} />
                    <label className="custom-control-label" htmlFor="Swish">Swish</label>
                </div>
            </div>
            </Row>
            <Row id="CardForm">
                <CardElementContainer>
                    <CardElement
                        options={cardElementOption}
                        onChange={handleCardDetailsChange}
                    />
                </CardElementContainer>
            </Row>
            <Row id="Card" >
                <SubmitButton disabled={isProcessing || !stripe ||price === 0  } id="CardButton" >
                    {isProcessing ? "SUCCEFULLY PAID" : `Pay $${price + DeliveryPrice}`}
                </SubmitButton>
            </Row>
            <Row id="PayWhitSwish">
                <SubmitButton disabled={isProcessing || !stripe || price === 0 } id="SwishButton"  >
                    {isProcessing ? "SUCCEFULLY PAID" : `Pay whit Swish $${price + + DeliveryPrice}`}
                </SubmitButton>
            </Row>
            <Row id="PhoneForm">
                <CardElementContainer  >
                    <Form inline style={{ marginLeft: "30%" }} >
                        <FormControl type="text" placeholder="Enter a phone number" className="mr-sm-2"></FormControl></Form>
                </CardElementContainer>
            </Row>
            {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
            <Row id="PayWhitKlarna">
                <SubmitButton disabled={isProcessing || !stripe || price === 0  } id="KlarnaButton" >
                    {isProcessing ? "SUCCEFULLY PAID" : `Pay whit Klarna $${price + DeliveryPrice}`}
                </SubmitButton>
            </Row>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        price: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
};
export default connect(mapStateToProps, null)(CheckoutForm);