import React, { Component } from 'react';
import { Table } from 'reactstrap';
import {connect} from 'react-redux';
import "./BakTab.css";
import BakeryModal from './BakeryModal';

class BakTab extends Component {
  render() {
    
    let bakeries = this.props.bakeries  

      
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
        
      {!bakeries || bakeries.length <= 0 ?

          <tr>
          </tr>
          : bakeries.map(bakery => (
            <tr key={bakery.id}>
                <td className="id-column">
                {bakery.id}
              </td>
               <td className="name-column">
                {bakery.name}
              </td>
              <td className="address-column">
                {bakery.address}
              </td>
              <td className="email-column">
                {bakery.email}
              </td>
              <td className="phone-column">
                {bakery.phone}
              </td>
              <td >
                <span className="action-column">
                  <BakeryModal
                    isNew={false}
                    bakery={bakery}
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
