import React, { Component } from 'react';
import { Table } from 'reactstrap';
import {connect} from 'react-redux';
import "./BakTab.css";
import BakeryModal from './BakeryModal';


class BakTab extends Component {


  render() {
    let items = this.props.items;
    if (this.props.filteredItems.length > 0) {
      items = this.props.filteredItems;
    }    
    return <Table striped>
      <thead className="thead-dark">
        <tr>
          <th className="id-column">Bakery Id</th>
          <th className="name-column">Name</th>
          <th className="address-column">Address</th>
          <th className="email-column">Email</th>
          <th className="Phone-column">Phone</th>
          <th className="action-column">Action</th>
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
               <td className="name-column">
                {item.name}
              </td>
              <td className="address-column">
                {item.address}
              </td>
              <td className="email-column">
                {item.email}
              </td>
              <td className="phone-column">
                {item.phone}
              </td>
              <td align="center">
                <span className="action-column">
                  <BakeryModal
                    isNew={false}
                    bakery={item}
                    updateBakeryIntoState={this.props.updateState} />
                   
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>;
  }
}
export default connect()(BakTab) ;
