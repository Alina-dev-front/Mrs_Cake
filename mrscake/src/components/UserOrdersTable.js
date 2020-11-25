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
          <th className="number-column">Order Number</th>
          <th className="userId-column">User Id</th>
          <th className="deliveryMethod-column"> Delivery Method</th>
          <th  className="orderedProducts-column">Ordered Products </th>
         
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
               <td className="number-column">
                {item.number}
              </td>
              <td className="userId-column">
                {item.userId}
              </td>
              <td className="deliveryMethod-column">
                {item.deliveryMethod}
              </td>
              {/* <td className="orderedProducts-column">
                {item.orderedProducts}
              </td> */}

              
              {/* <td >
              <ul>
  <li className = "productType">{item.productType}</li>
  <li className = "name">{item.name}</li>
 
 
</ul>
                </td> */}
             
            
              
             
            </tr>
          ))}
      </tbody>
    </Table>;
  }}

export default UserOrdersTable;
