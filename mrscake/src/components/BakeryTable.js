import React, { Component } from 'react';
import { Table } from 'reactstrap';
import "./BakeryTable.css";

class BakeryTable extends Component {

  render() {
    let products = this.props.products;
      
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
        {!products || products.length <= 0 ?
          <tr>
          </tr>
          : products.map(product => (
            <tr key={product.id}>
                <td className="id-column">
                {product.id}
              </td>
               <td className="productType-column">
                {product.productType}
              </td>
              <td className="name-column">
                {product.name}
              </td>
              <td className="bakery-column">
                {product.bakery}
              </td>
              <td className="price-column">
                {product.price}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>;
  }
}
export default BakeryTable;
