import React, { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Row from "./PaymentForm/Row";
import SubmitButton from "./PaymentForm/SubmitButton";
import CheckoutError from "./PaymentForm/CheckoutError";
import {CardElement, useElements,useStripe} from '@stripe/react-stripe-js';
import BillingDetailsFields from "./PaymentForm/BillingDetailsFields";
import GlobalStyles from "./PaymentForm/GlobalStyles";
import Head from "next/head";
import {connect} from 'react-redux';


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
        const cardElement = elements.getElement(CardElement);

        try {
            const {data: clientSecret} = await axios.post('constants/payment_intents', {
                amount: price * 100
            });

            const paymentMethodReq = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: billingDetails
            });

            if (paymentMethodReq.error) {
                setCheckoutError(paymentMethodReq.error.message);
                setProcessingTo(false);
                return;
            }
            const {error} = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethodReq.paymentMethod.id
            });

            if (error) {
                setCheckoutError(error.message);
                setProcessingTo(false);
                return;
            }

            onSuccessfulCheckout();
        }catch (err) {
            setCheckoutError(err.message);
        }
    };




    //stripe.com/docs.js
    const cardElementOption ={
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
                invalid:{
                    color: "#ffc7cf",
                    iconColor: "#87bbfd",
                },
            },
        },
        hidePostalCode: true,
    };



    return (

        <form onSubmit={handleFormSubmit}>
            <Row>
                <BillingDetailsFields />
            </Row>
            <GlobalStyles />
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Row>
                <CardElementContainer>
                    <CardElement
                        options={cardElementOption}
                        onChange={handleCardDetailsChange}
                    />
                </CardElementContainer>
            </Row>
            {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
            <Row>
                <SubmitButton disabled={isProcessing || !stripe} >
                    {isProcessing ? "Processing..." : `Pay $${price}`}
                </SubmitButton>
            </Row>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        price : state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
  };
export default connect(mapStateToProps,null)(CheckoutForm) ;