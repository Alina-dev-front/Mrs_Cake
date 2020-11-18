import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART,
    REMOVE_ALL,
    INCREMENT_ORDER
} from '../actions';
import { PRODUCTS_API_URL } from '../constants/api_url_path';


const initialState = {
    products:[],
    cart: [],
    orderNumber:0
};

fetch(PRODUCTS_API_URL)
        .then(res => res.json())
        .then(res => this.setState({ products: res }))
        .catch(err => console.log(err));

const shopReducer = (state = initialState, action ) => {
    let updatedCart;
    let updatedItemIndex;
    let updatedOrdrNumber;

    switch (action.type) {
        case INCREMENT_ORDER:
            updatedOrdrNumber = state.orderNumber;
            updatedOrdrNumber++;
            return {...state, orderNumber: updatedOrdrNumber}
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            incrementedItem.quantity++;

            updatedCart[updatedItemIndex] = incrementedItem;


            return {...state, cart: updatedCart};

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedItemIndex] = decrementedItem;

            return {...state, cart: updatedCart};

        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(item => item.id === action.payload.id);

            if(updatedItemIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1});
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }

            return {...state, cart: updatedCart};
        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            );

            updatedCart.splice(updatedItemIndex, 1);

            return {...state, cart: updatedCart};
        default:
            return state;

            case REMOVE_ALL:
                updatedCart = [...state.cart];
                updatedCart = [];
                return {...state, cart: updatedCart};
             
    }
};

export default shopReducer;
