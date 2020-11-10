import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { PRODUCTS_API_URL } from '../constants/api_url_path';
import {connect} from 'react-redux';
import "./DataTable.css";


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

   
    
    
    return <Table striped>
      <thead className="thead-dark">
        <tr>
         
          <th className="id-column">Product Id</th>
          <th className="productType-column">Product Type</th>
          <th className="name-column">Name</th>
          <th className="bakery-column">Bakery</th>
          <th className="price-column">Price</th>
         
        </tr>
      </thead>
      <tbody>
        {!items || items.length <= 0 ?
          <tr>
            <td colSpan="3" align="center"><b>Uploading products...</b></td>
          </tr>
          : items.map(item => (
            <tr key={item.id}>
                <td className="id-column">
                {item.id}
              </td>
               <td className="productType-column">
                {item.productType}
              </td>
              <td className="name-column">
                {item.name}
              </td>
              <td className="bakery-column">
                {item.bakery}
              </td>
              <td className="price-column">
                {item.price}
              </td>
              
            </tr>
          ))}
      </tbody>
    </Table>;
  }
}
export default connect()(DataTable) ;
