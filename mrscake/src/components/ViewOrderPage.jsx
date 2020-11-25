import React, { Component } from 'react';
import { Col, Container, Row, Label, Form } from 'reactstrap';
import UserOrdersTable from './UserOrdersTable';
import {ORDERS_API_URL} from '../constants/orders_api_url';

class ViewOrderPage extends Component {
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
      const uniqueUserId = array
        .map(element => element[comparison])
        .map((element, index, final) => final.indexOf(element) === index && index)
        .filter(element => array[element])
        .map(element => array[element]);
  
      return uniqueUserId;
    }
    render() {
      const uniqueItem = this.getUnique(this.state.items, "userId");
      const items = this.state.items;
      const item = this.state.item;
      const filteredItems = [];
  
      const filterDropdown = items.filter(function(result) {
        return result.userId === item;
      });
      return <Container className="OrderTableContainer">
        <span>
            <Label className="order-table-title">Users's Order list</Label>
        </span>
        <Form>
          <Label>Choose by User Id:</Label>
            <select value={this.state.item} onChange={this.handleChangeItem}>
                <option value="none">Show all</option>
                {uniqueItem.map(item => (
                  <option key={item.id} value={item.userId}>
                    {item.userId}
                  </option>
                ))}
            </select>
            <div style={{display: "none"}}>{filterDropdown.map(item => (
              filteredItems.push(item)
            ))}
            </div>
        </Form>
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

export default ViewOrderPage;
