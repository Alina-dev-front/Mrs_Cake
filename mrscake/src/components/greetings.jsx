import React from "react";
import './greetings.css'
import { Button } from 'reactstrap';
import { ORDERS_API_URL } from '../constants/orders_api_url';
import { connect } from "react-redux";
import CartItem from "../components/orderDetails/CartItem";




class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            order: {}
        }
    }


    componentDidMount() {
        this.getOrders();
    }
    getOrders = () => {
        fetch(ORDERS_API_URL)
            .then(res => res.json())
            .then(res => this.setState({ orders: res }))
            .catch(err => console.log(err));
        this.setState({ order: this.state.orders.slice(-1).pop() });
        console.log(this.props.cartItems);
    }

    render() {


        return <div className="parent">

            <div class="containerGreetings" >
                <div className="containerChild">
                    <h1 className="Greetings"> Ordered Confirmed! </h1>
                    <h1 className="Greetings"> Thanks For Your Purchase.</h1>
                    <tbody>
                        {!this.state.order ?
                            <tr>
                                <td colSpan="6" align="center"><b></b></td>
                            </tr> :
                            <div className="orderBox" >
                                <h1 className="orderText">ORDER NUMBER : {this.state.order.number}</h1>
                                <h1 className="orderText">ORDER ID: {this.state.order.id}</h1>
                                <h1 className="orderText">DELIVERY ADDRESS : {this.state.order.address}</h1>
                                <h1 className="orderText">DELIVERY METHOD : {this.state.order.deliveryMethod}</h1>
                                <h1 className="orderText">TOTAL AMOUNT INCLISUVE MOMS : {this.state.order.totalPrice} $</h1>
                                <h1 className="orderText">PRODUCTS:</h1>
                                <div className="card-body">
                                    {this.state.order.orderedProducts && this.state.order.orderedProducts.length > 0 ? (
                                        this.state.order.orderedProducts.map((order) => (
                                            <CartItem {...order} img={order.images} />
                                        ))
                                    ) : (
                                            <h1 className="display-4 mt-5 text-center">
                                                You haven't placed any order.
                                            </h1>
                                        )}
                                </div>
                            </div>
                        }
                    </tbody>
                    <p className="orderButton">
                        <Button size="lg" onClick={(e) => {
                            e.preventDefault();
                            this.getOrders();
                        }}>Show order details</Button>
                    </p>
                    <p className="productsButton">
                        <Button size="lg" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/productpage';
                        }}>Continue Exploring Products</Button>
                    </p>

                </div>
            </div>

        </div>
    }
}

const mapStateToProps = (state, e) => {
    console.log(state, "state has changed");
    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        itemQuantity: state.shop.cart.reduce((count, curItem) => {
            return curItem.quantity;
        }, 0),

        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.price * curItem.quantity;
        }, 0),
    };
};

export default connect(mapStateToProps, null)(Greetings);
