import React from "react";
import { connect } from "react-redux";
import { formatMoney } from "../pipes/priceFormatter";
import CartItem from "../components/cartItem/CartItem";
import { NavLink } from "react-router-dom";


class ShoppingCart extends React.Component {
    state = {
        totalPrice:0,
    }
    render() {
        const handleSelectBox = (e) => {
            const name = e.target.id;
            //const value = e.target.cheched;
        
           if(name === "customCheck1" && e.target.checked && name !== "customCheck3"){
                    document.getElementById("customCheck3").checked = false;
                    document.getElementById("customCheck2").checked = false;
                    this.setState({ totalPrice:7} ) 
                   
           }
           
            else if(name === "customCheck3" && e.target.checked && name !== "customCheck1") {
                document.getElementById("customCheck1").checked = false;
                document.getElementById("customCheck2").checked = false;
                this.setState({ totalPrice:10} )
                  
            } 
            else if(name === "customCheck2" && e.target.checked && name !== "customCheck3" ) {
                document.getElementById("customCheck1").checked = false;
                document.getElementById("customCheck3").checked = false;
                this.setState({ totalPrice:0} )
            }
            else  {
                this.setState({ totalPrice:0} )
                 console.log(name);
            }
        };
        return (
            <>
                <div className="container" style={{ paddingTop: "6rem" }}>
                    <div className="card shopping-cart">
                        <div className="card-header bg-dark text-light">
                            <i className="fa fa-shopping-cart pr-2" aria-hidden="true"></i>
            Shopping cart
            <div className="clearfix"></div>
                        </div>
                        <div className="card-body">
                            {this.props.cartItemCount ? (
                                this.props.cartItems.map((cart) => (
                                    <CartItem {...cart} img={cart.images} />
                                ))
                            ) : (
                                    <h1 className="display-4 mt-5 text-center">
                                        There is no product in your cart
                                    </h1>
                                )}
                        </div>
                        <h1 className="display-4 mt-5 text-center">
                            <NavLink className="nav-link" to={"/productpage"}>
                                <i className="" aria-hidden="true" />
              CONTINUE BUYING
            </NavLink>
                        </h1>

                        <div className="cart-footer">
                            <div className="pull-right" style={{ margin: "10px" }}>
                                <div className="pull-right" style={{ margin: "5px" }}>
                                    Total price Inclusive moms: <b>{formatMoney( this.props.totalPrice + this.state.totalPrice)}$</b>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">

                                        <input type="checkbox" className="custom-control-input" id="customCheck1" onInput={handleSelectBox}  />
                                        <label className="custom-control-label" htmlFor="customCheck1">Home delivery</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">

                                        <input type="checkbox" className="custom-control-input" id="customCheck2" onInput={handleSelectBox}  />
                                        <label className="custom-control-label" htmlFor="customCheck2">Pick up from bakery</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">

                                        <input type="checkbox" className="custom-control-input" id="customCheck3" onInput={handleSelectBox}  />
                                        <label className="custom-control-label" htmlFor="customCheck3">Pick up from the closest store</label>
                                    </div>
                                </div>
                                <NavLink
                                    className="nav-link"
                                    style={{ margin: "5px" }}
                                    to={"/checkoutform"}
                                >
                                    <i className="" aria-hidden="true" />
                PAY
              </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}
 


const mapStateToProps = (state,e) => {
    console.log(state, "state has changed");
    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.price * curItem.quantity;
        }, 0),

    };
};


export default connect(mapStateToProps, null)(ShoppingCart);
