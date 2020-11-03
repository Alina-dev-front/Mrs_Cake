import React from "react";
import { connect } from 'react-redux';
import SubmitButton from "./PaymentForm/SubmitButton";
import Row from "./PaymentForm/Row";
import BillingDetailsFields from "./PaymentForm/BillingDetailsFields";
import GlobalStyles from "./PaymentForm/GlobalStyles";

class Payment extends React.Component {
    state = {
        DeliveryPrice: 0,
    }

    render() {
        const handleSelectBox = (e) => {
            const name = e.target.id;
            //const value = e.target.cheched;

            if (name === "customCheck1" && e.target.checked && name !== "customCheck3") {
                document.getElementById("customCheck3").checked = false;
                document.getElementById("customCheck2").checked = false;
                this.setState({ DeliveryPrice: 7 })

            }

            else if (name === "customCheck3" && e.target.checked && name !== "customCheck1") {
                document.getElementById("customCheck1").checked = false;
                document.getElementById("customCheck2").checked = false;
                this.setState({ DeliveryPrice: 10 })

            }
            else if (name === "customCheck2" && e.target.checked && name !== "customCheck3") {
                document.getElementById("customCheck1").checked = false;
                document.getElementById("customCheck3").checked = false;
                this.setState({ DeliveryPrice: 0 })
            }
            else {
                this.setState({ DeliveryPrice: 0 })
                console.log(name);
            }
        };
        return (
            <>
                <div className="container" style={{ paddingTop: "6rem" }}>
                    <div className="card shopping-cart">
                        <div className="cart-footer">
                            <div className="pull-right" style={{ margin: "10px" }}>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">

                                        <input type="checkbox" className="custom-control-input" id="customCheck1" onInput={handleSelectBox} />
                                        <label className="custom-control-label" htmlFor="customCheck1">Home delivery</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">

                                        <input type="checkbox" className="custom-control-input" id="customCheck2" onInput={handleSelectBox} />
                                        <label className="custom-control-label" htmlFor="customCheck2">Pick up from bakery</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">

                                        <input type="checkbox" className="custom-control-input" id="customCheck3" onInput={handleSelectBox} />
                                        <label className="custom-control-label" htmlFor="customCheck3">Pick up from the closest store</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Row>
                                <BillingDetailsFields />
                            </Row>
                            <Row>
                                <GlobalStyles />
                                <SubmitButton  >
                                    Pay ${this.props.price + this.state.DeliveryPrice}
                                </SubmitButton>
                            </Row>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        price: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
};

export default connect(mapStateToProps, null)(Payment);