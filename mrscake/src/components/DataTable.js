import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import RegistrationModal from './form/RegistrationModal';
import { PRODUCTS_API_URL } from '../constants/api_url_path';
import {connect} from 'react-redux';
import "./DataTable.css";
import {addProductToCart} from "../actions";
import Cookies from 'js-cookie';

class DataTable extends Component {
  deleteItem = id => {
    let confirmDeletion = window.confirm('Do you really wish to delete it?');
    if (confirmDeletion) {
      fetch(`${PRODUCTS_API_URL}/${id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          this.props.deleteItemFromState(id);
        })
        .catch(err => console.log(err));
    }
  }
 
  render() {
    let items = this.props.items;
    if (this.props.filteredItems.length > 0) {
      items = this.props.filteredItems;
    }

    let display = ""
    let userRole = Cookies.get('role');
    if(userRole === 'Customer') {
      display = 'none'
    }
    let displayVariable = { display: display }
    
    return <Table striped>
      <thead className="thead-dark">
        <tr>
          <th className="image-column">Product Picture</th>
          <th className="name-column">Name</th>
          <th className="description-column">Description</th>
          <th className="bakery-column">Bakery</th>
          <th className="price-column">Price</th>
          <th className="action-column">Actions</th>
        </tr>
      </thead>
      <tbody>
        {!items || items.length <= 0 ?
          <tr>
            <td colSpan="6" align="center"><b>Uploading products...</b></td>
          </tr>
          : items.map(item => (
            <tr key={item.id}>
              <td className="image-column">
                <img src={process.env.PUBLIC_URL + '/ProductImg/' + item.imageUrl} alt={item.name} className="img_product_table"></img>
              </td>
              <td className="name-column">
                {item.name}
              </td>
              <td className="description-column">
                {item.description}
              </td>
              <td className="bakery-column">
                {item.bakery}
              </td>
              <td className="price-column">
                {item.price} $
              </td>
              <td align="center">
                <span className="action-column">
                  <RegistrationModal
                    isNew={false}
                    product={item}
                    updateProductIntoState={this.props.updateState} />
                  <Button color="danger" style={displayVariable} onClick={() => this.deleteItem(item.id)}>Delete</Button>
                  <button
                    onClick={() => {
                        this.props.dispatch(addProductToCart(item)) 
                    }}
                    className="btn btn-info product__add-to-cart">Add to cart
                </button>
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>;
  }
}
export default connect()(DataTable) ;
