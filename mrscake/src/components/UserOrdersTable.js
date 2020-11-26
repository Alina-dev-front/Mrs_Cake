import React, { Component } from 'react';
import { Table } from 'reactstrap';
import "./UserOrderTable.css";

class UserOrdersTable extends Component {
  render() {
    let orders = this.props.orders  
        return <Table striped>
      <thead className="thead-dark">
        <tr>
          <th className="id-column">Order Id</th>
          <th className="number-column">Order Number</th>
          <th className="userId-column">User Id</th>
          <th className="deliveryMethod-column"> Delivery Method</th>
        </tr>
      </thead>
      <tbody>
        {!orders || orders.length <= 0 ?
          <tr>
            <td colSpan="6" align="center"><b>You don't have any orders so far...</b></td>
          </tr>
          : orders.map(order => (
            <tr key={order.id}>
                <td className="id-column">
                {order.id}
              </td>
               <td className="number-column">
                {order.number}
              </td>
              <td className="userId-column">
                {order.userId}
              </td>
              <td className="deliveryMethod-column">
                {order.deliveryMethod}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>;
  }}

export default UserOrdersTable;
