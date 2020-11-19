import React from "react";
import { Form } from 'react-bootstrap';
import styled from "@emotion/styled";
import { CardElement } from "@stripe/react-stripe-js";
import Row from "./PaymentForm/Row";
import SubmitButton from "./PaymentForm/SubmitButton";
import GlobalStyles from "./PaymentForm/GlobalStyles";
import { ORDERS_API_URL } from '../constants/orders_api_url';
import { removeAllProducts,incrementOrderQuantity } from "../actions";
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
            OrderNumber:0
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
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }
    removeItemS = () => {
        this.props.dispatch(removeAllProducts());
        this.setState({ DeliveryPrice:0});
    };
    handleNameChange(e) {
        this.setState({ name: e.target.value });
        console.log(this.state.name);
    }

    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value });
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    handleAdressChange(e) {
        this.setState({ adress: e.target.value });
    }
    handleCityChange(e) {
        this.setState({ city: e.target.value });
    }
    handleCountryChange(e) {
        this.setState({ country: e.target.value });
    }
    handleZipCodeChange(e) {
        this.setState({ zipcode: e.target.value });
    }
     
    submitNew = async e => {
        e.preventDefault();
        this.props.dispatch(incrementOrderQuantity());
        //let name = document.getElementById("name").value;
        let city = document.getElementById("city").value;
        let Email = document.getElementById("email").value;
        let Adress = document.getElementById("adress").value;
        let Country = document.getElementById("country").value;
        let comments = document.getElementById("comments").value;
        let zipcode = document.getElementById("zipcode").value;


        fetch(`${ORDERS_API_URL}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Number: this.props.ordersNumbers,
                totalPrice: this.props.price + this.state.DeliveryPrice,
                userId:  Email,
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

     cardnumber()
    {
        //document.getElementsByName("cardForm").value = this.state.CreditCardNumber;
        //this.setState({CreditCardNumber : document.getElementById("formCard").value});
      var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
      if(this.state.CreditCardNumber.match(cardno))
            {
          return true;
            }
          else
            {
            alert("Not a valid Visa credit card number!");
            return false;
            }
    }

    handleDeliverySelectBox = (e) => {
        const name = e.target.id;
        if (name === "HomeBox" && e.target.checked) {
            document.getElementById("customCheck3").checked = false;
            document.getElementById("customCheck2").checked = false;
            document.getElementById("Payment").style.visibility = 'visible';

            this.setState({ DeliveryMethod: "Home Delivery" });
            this.setState({ DeliveryPrice: 7 })
        }
        else if (name === "customCheck3" && e.target.checked) {
            document.getElementById("HomeBox").checked = false;
            document.getElementById("customCheck2").checked = false;
            document.getElementById("Payment").style.visibility = 'visible';

            this.setState({ DeliveryMethod: "Pick up from store" });
            this.setState({ DeliveryPrice: 10 });
        }
        else if (name === "customCheck2" && e.target.checked) {
            document.getElementById("HomeBox").checked = false;
            document.getElementById("customCheck3").checked = false;
            document.getElementById("Payment").style.visibility = 'visible';
            this.setState({ DeliveryMethod: "Pick up from Bakery" });
            this.setState({ DeliveryPrice: 0 });
        }
        else {
            this.setState({ DeliveryPrice: 0 });
            document.getElementById("Payment").style.visibility = 'hidden';
            
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


        }
        else {
            document.getElementById("Card").style.visibility = 'hidden';
            document.getElementById("CardForm").style.visibility = 'hidden';
            document.getElementById("PhoneForm").style.visibility = 'hidden';

            console.log(name);
        }

    };
  

    mySubmitHandler(){
        this.props.history.push('/')
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
            
            <Form onSubmit={(e) => {this.submitNew(e); this.removeItemS()}} >
                <Row>
                    <FormFieldContainer >
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="name"  /*onChange={this.handleNameChange}*/ required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="surname">surname</Label>
                        <Input id="surname" name="surname" type="text" placeholder="surname"   required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="text" placeholder="email" required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="adress">adress</Label>
                        <Input id="adress" name="adress" type="text" placeholder="adress"   required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" name="city" type="text" placeholder="City"   required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" name="country" type="text" placeholder="country"  required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="zipCode">zipCode</Label>
                        <Input id="zipcode" name="zipCode" type="text" placeholder="zipcode"  required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="comments">Comments</Label>
                        <Input id="comments" name="comments" type="text" placeholder="comments"   />
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
                    <CardElementContainer>
                    <Input inline style={{ marginLeft: "20%" }} id="cardform" type="text" placeholder="45879966522145456   10/22        cvc" maxLength="23" minLength="23" className="mr-sm-2"></Input>
                    </CardElementContainer>
                </Row>
                <Row id="Card" style={{ visibility: 'hidden' }}>
                    <SubmitButton disabled={this.isProcessing || this.props.price === 0 ||CardElement.value === null } id="CardButton"  >
                        {this.isProcessing ? "SUCCEFULLY PAID" : `Pay $${this.props.price + this.state.DeliveryPrice}`}
                    </SubmitButton>
                </Row>
                <Row id="PhoneForm" style={{ visibility: 'hidden' }}>
                    <FormFieldContainer   >
                            <Input inline style={{ marginLeft: "20%" }} id="phoneform" type="text" placeholder="070 005 4540" maxLength="10" minLength="10" className="mr-sm-2" ></Input>
                    </FormFieldContainer>
                </Row>

            </Form>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.shop.cart,
        ordersNumbers : state.shop.orderNumber,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),

        price: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
};
export default connect(mapStateToProps, null)(CheckoutForm);