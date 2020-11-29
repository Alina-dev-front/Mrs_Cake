import React from "react";
import { Form } from 'react-bootstrap';
import styled from "@emotion/styled";
import Row from "./PaymentForm/Row";
import SubmitButton from "./PaymentForm/SubmitButton";
import GlobalStyles from "./PaymentForm/GlobalStyles";
import { ORDERS_API_URL } from '../constants/orders_api_url';
import { removeAllProducts, incrementOrderQuantity } from "../actions";
import { connect } from 'react-redux';
import BillingDetailsFields from "./PaymentForm/BillingDetailsFields";
import "./checkoutForm.css";

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
    constructor(props) {
        super(props);
        this.state = ({
            isProcessing: false,
            DeliveryPrice: 0,
            name: "",
            lastName: "",
            email: "",
            adress: "",
            city: "",
            country: "",
            zipcode: "",
            DeliveryMethod: "",
            OrderNumber: 0,
            Users: [{}]
        });
        this.submitNew = this.submitNewOrder.bind(this);
    }
    removeItemS = () => {
        this.props.dispatch(removeAllProducts());
        this.setState({ DeliveryPrice: 0 });
    };

    submitNewOrder = async event => {
        event.preventDefault();
        this.props.dispatch(incrementOrderQuantity());
        let city = document.getElementById("city").value;
        let Email = document.getElementById("email").value;
        let Adress = document.getElementById("adress").value;
        let Country = document.getElementById("country").value;
        let comments = document.getElementById("comments").value;
        let zipcode = document.getElementById("zipcode").value;
        var min = 1;
        var max = 1000;
        var rand = min + (Math.random() * (max - min));

        //Save A Order
        fetch(`${ORDERS_API_URL}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Number: parseInt(rand),
                totalPrice: this.props.price + this.state.DeliveryPrice,
                userId: Email,
                address: Adress + "/" + city + "/" + Country + "/" + zipcode,
                comments: comments,
                paid: true,
                DeliveryMethod: this.state.DeliveryMethod,
                OrderedProducts: this.props.cartItems
            })
        })
            .then(res => res.json())
            .then(order => {
                this.props.history.push('/greetings')
            })
            .catch(err => console.log(err));
    }


    cardnumber() {
      
        var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        if (this.state.CreditCardNumber.match(cardno)) {
            return true;
        }
        else {
            alert("Not a valid Visa credit card number!");
            return false;
        }
    }

    handleDeliverySelectBox = (e) => {
        e.preventDefault();
        const name = e.target.id;
        if (name === "HomeBox" && e.target.checked) {
            e.preventDefault();
            document.getElementById("customCheck3").checked = false;
            document.getElementById("customCheck2").checked = false;
            document.getElementById("Payment").style.visibility = 'visible';
            this.setState({ DeliveryMethod: "Home Delivery" });
            this.setState({ DeliveryPrice: 7 })
        }
        else if (name === "customCheck3" && e.target.checked) {
            e.preventDefault();
            document.getElementById("HomeBox").checked = false;
            document.getElementById("customCheck2").checked = false;
            document.getElementById("Payment").style.visibility = 'visible';
            this.setState({ DeliveryMethod: "Pick up from store" });
            this.setState({ DeliveryPrice: 10 });
        }
        else if (name === "customCheck2" && e.target.checked) {
            e.preventDefault();
            document.getElementById("HomeBox").checked = false;
            document.getElementById("customCheck3").checked = false;
            document.getElementById("Payment").style.visibility = 'visible';
            this.setState({ DeliveryMethod: "Pick up from Bakery" });
            this.setState({ DeliveryPrice: 0 });
        }
        else {
            e.preventDefault();
            this.setState({ DeliveryPrice: 0 });
            document.getElementById("Payment").style.visibility = 'hidden';
        }
    };

    handlePaymentSelectBox = (e) => {
        e.preventDefault();
        const name = e.target.id;
        if (name === "CreditCard" && e.target.checked && name !== "customCheck3") {
            document.getElementById("Swish").checked = false;
            document.getElementById("PhoneForm").style.visibility = 'hidden';
            document.getElementById("CardForm").style.visibility = 'visible';
            document.getElementById("Card").style.visibility = 'visible';
            document.getElementById("phoneform").required = false;
            document.getElementById("cardform").required = true;
        }
        else if (name === "Swish" && e.target.checked && name !== "customCheck3") {
            document.getElementById("CreditCard").checked = false;
            document.getElementById("Card").style.visibility = 'visible';
            document.getElementById("CardForm").style.visibility = 'hidden';
            document.getElementById("PhoneForm").style.visibility = 'visible';
            document.getElementById("phoneform").required = true;
            document.getElementById("cardform").required = false;
            document.getElementById("cardformDate").required = false;
            document.getElementById("cardformCvc").required = false;
        }
        else {
            document.getElementById("Card").style.visibility = 'hidden';
            document.getElementById("CardForm").style.visibility = 'hidden';
            document.getElementById("PhoneForm").style.visibility = 'hidden';
            console.log(name);
        }
    };

    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    render() {

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


        const Input = styled.input`
    font-size: 15px;
    width: 100%;
    padding: 15px 15px 11px 8px;
    color: #fff;
    background-color: transparent;
    animation: 1ms void-animation-out;
  
    &::placeholder {
      color: black;
    }
  `;
        return (
            <div className="Mainform">
                <Form style={{ margin: "auto" }} onSubmit={(e) => { this.submitNewOrder(e); this.removeItemS() }} >
                    <BillingDetailsFields></BillingDetailsFields>
                    <GlobalStyles />
                    <Row >
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="HomeBox" onInput={this.handleDeliverySelectBox} />
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
                    <Row id="Payment" style={{ visibility: 'hidden' }} >
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
                        <h1 inline className="CardHeader">Enter your card Information</h1>
                        <CardElementContainer>
                            <Input required inline style={{ marginLeft: "20%" }} id="cardform" type="number" placeholder="Card Number" minLength="16" maxLength="23" className="mr-sm-2" onInput={this.maxLengthCheck} />
                        </CardElementContainer>
                        <CardElementContainer>
                            <Input required inline style={{ marginLeft: "20%" }} id="cardformDate" type='month' max="2026-01" min="2020-10" className="mr-sm-2" />
                        </CardElementContainer>
                        <CardElementContainer>
                            <Input required inline style={{ marginLeft: "20%" }} id="cardformCvc" type='number' placeholder="CVC" maxLength="3" minLength="3" className="mr-sm-2" onInput={this.maxLengthCheck} />
                        </CardElementContainer>
                    </Row>
                    <Row id="PhoneForm" style={{ visibility: 'hidden' }}>
                        <FormFieldContainer   >
                            <Input required inline style={{ marginLeft: "20%" }} id="phoneform" type="number" placeholder="070 005 4540" maxLength="10" minLength="10" className="mr-sm-2" onInput={this.maxLengthCheck} ></Input>
                        </FormFieldContainer>
                    </Row>
                    <Row id="Card" style={{ visibility: 'hidden' }}>
                        <SubmitButton disabled={this.isProcessing || this.props.price === 0} id="CardButton"  >
                            {this.isProcessing ? "SUCCEFULLY PAID" : `Pay $${this.props.price + this.state.DeliveryPrice}`}
                        </SubmitButton>
                    </Row>
                </Form>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.shop.cart,
        ordersNumbers: state.shop.orderNumber,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),

        price: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
};
export default connect(mapStateToProps, null)(CheckoutForm);