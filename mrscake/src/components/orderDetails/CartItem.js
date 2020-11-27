import React, {useState} from 'react';
import {connect} from 'react-redux';
//import {shortenTitle} from "../../pipes/shortenTitle";
//import {formatMoney} from "../../pipes/priceFormatter";
import './CartItem.scss';
import { decrementCartQuantity, incrementCartQuantity, removeProductToCart} from "../../actions";

const CartItem = (
    {
        name,
        price,
        description,
        quantity,
        id,
        imageUrl,
        bakery,
        dispatch
    }
) => {

    console.log(id);
    const [itemQuantity, setItemQuantity] = useState(quantity);
    const removeItem = () => {
        dispatch(removeProductToCart(id));
    };

    const handleQuantityChange = (e) => {
      /*  const value = e.target.value;
        console.log(value)

        if(value > 0 && value <= 10) {
            setItemQuantity(value);
            dispatch(addProductToCart(id));
        } */
    };

    const incrementOrDecrement = (e, type) => {
        const value = itemQuantity;
       // console.log(type, value);

        if(type === 'inc' && value < 100) {
            setItemQuantity(itemQuantity + 1);
            dispatch(incrementCartQuantity(id));
        }

        if(type === 'desc' && value > 1) {
            setItemQuantity(itemQuantity - 1);
            dispatch(decrementCartQuantity(id));
        }
    };


    return (
        <div className="row align-items-center mb-3">
            <div className="col-12 col-sm-12 col-md-2 text-center">
                <img className="img-responsive" src={process.env.PUBLIC_URL + '/ProductImg/' + imageUrl} style={{height: '60%', width: '60%'}} alt={imageUrl} />
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                <h4 className="product-name"><strong>{(name)}</strong></h4>
                <h4>
                    <small className="product-description">{description}</small>
                </h4>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center">
                <div className="col-6 col-sm-6 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
                    <h6><strong>{(price)}$ <span className="text-muted">x</span></strong></h6>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    <div className="quantity">
                            <input type="text" step="1" max="10" min="1" value={itemQuantity} title="Qty" className="qty" size="4" /> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect()(CartItem);
