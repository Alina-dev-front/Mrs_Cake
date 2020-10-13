import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import RegistrationModal from './form/RegistrationModal';
import { PRODUCTS_API_URL } from '../constants/api_url_path';
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
    const items = this.props.items;
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
            <td colSpan="6" align="center"><b>No Products yet</b></td>
          </tr>
          : items.map(item => (
            <tr key={item.id}>
              <td className="image-column">
                {item.imageUrl}
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
                {item.price}
              </td>
              <td align="center">
                <span className="action-column">
                  <RegistrationModal
                    isNew={false}
                    product={item}
                    updateProductIntoState={this.props.updateState} />
                  <Button color="danger" onClick={() => this.deleteItem(item.id)}>Delete</Button>
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>;
  }
}
export default DataTable;
