import React, { Component } from 'react';
import { Col, Container, Form, Row, Label } from 'reactstrap';
import './BakeryPage.css';

import UserOrdersTable from './UserOrdersTable';
import {  ORDERS_API_URL } from '../constants/orders_api_url';
import Cookies from 'js-cookie';
import {connect} from 'react-redux';

class UserProfilePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        item: ""
      }
    }

    handleChangeItem = event => {
      this.setState({ item: event.target.value });
    };
  
    componentDidMount() {
      this.getItems();
    }
    getItems = () => {
      fetch(ORDERS_API_URL)
        .then(res => res.json())
        .then(res => this.setState({ items: res }))
        .catch(err => console.log(err));
    }
    addOrderToState = order => {
      this.setState(previous => ({
        items: [...previous.items, order]
      }));
    }
    updateState = (id) => {
      this.getItems();
    }
    deleteItemFromState = id => {
      const updated = this.state.items.filter(item => item.id !== id);
      this.setState({ items: updated })
    }
    getUnique(array, comparison) {
      const uniqueName = array
        .map(element => element[comparison])
        .map((element, index, final) => final.indexOf(element) === index && index)
        .filter(element => array[element])
        .map(element => array[element]);
  
      return uniqueName;
    }
    render() {
      
      
      const items = this.state.items;
      const item = this.state.item;
      const filteredItems = [];
      let userId = Cookies.get('userId');
      

      return <Container className="ProductTableContainer">
        <span>
            <Label className="bakery-table-title" >Users's Order list</Label>
            
        </span>
        
          <Row>
            <Col>
              <UserOrdersTable
                items={items}
                filteredItems={filteredItems}
                updateState={this.updateState}
                deleteItemFromState={this.deleteItemFromState} />
            </Col>
          </Row>
        </Container>;
    }
}

export default connect()(UserProfilePage) ;