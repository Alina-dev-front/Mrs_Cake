import React, { Component } from 'react';
import { Table } from 'reactstrap';
import "./UserOrderTable.css";

class UserOrdersTable extends Component {
  render() {
    let items = this.props.items
    return <Table striped>
      <thead className="thead-dark">
        <tr>
          <th className="id-column">Order Id</th>
          <th className="userId-column">User Id</th>
          <th className="address-column">Address</th>
          <th className="deliveryMethod-column">Delivery Method</th>
          <th className="totalPrice-column"> Total Price</th>
          <th className="comments-column">Comments</th>
        </tr>
      </thead>
      <tbody>
        {!items || items.length <= 0 ?
          <tr>
          </tr>
          : items.map(item => (
            <tr key={item.id}>
                <td className="id-column">
                {item.id}
              </td>
               <td className="userId-column">
                {item.userId}
              </td>
              <td className="address-column">
                {item.address}
              </td>
              <td className="deliveryMethod-column">
                {item.deliveryMethod}
              </td>
              <td className="totalPrice-column">
                {item.totalPrice}
              </td>
              <td className="comments-column">
                {item.comments}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>;
  }}

export default UserOrdersTable;
