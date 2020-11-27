import React, { Component } from 'react';
import { Col, Container, Row, Label } from 'reactstrap';
import UserOrdersTable from './UserOrdersTable';
import { ORDERS_API_URL } from '../constants/orders_api_url';
import { USERS_API_URL } from '../constants/user_api_url.js';
import Cookies from 'js-cookie';

class ViewOrderPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        orders: [],
        user: {},
        userId: Cookies.get('user_id'),
        userRole: Cookies.get('role')
      }
    }
  
    componentDidMount() {
      this.getAllOrders();
      this.getUser();
    }

    getUser = () => {
      fetch(`${USERS_API_URL}/${this.state.userId}`, {
               method: 'get',
               headers: {'Content-Type': 'application/json'},
             })
              .then(response => {
              var dbResponse = response.json();
              return dbResponse;
          })
          .then(userData => {
            this.setState({user: userData});
          })
          .catch(err => console.log(err));
    }

    getAllOrders = () => {
      fetch(ORDERS_API_URL)
        .then(res => res.json())
        .then(res => {
          this.setState({ orders: res })
        })
        .catch(err => console.log(err));
    }

    GetExactUserOrders = () => {
      let privateOrders = [];
      if(this.state.userRole === "Customer") {
        this.state.orders.forEach(order => {
          if(order.userId === this.state.user.email) {
            privateOrders.push(order);
          }
        })
         return privateOrders;
      } else if (this.state.userRole === "BakeryOwner") {
          return this.state.orders;
      }
    }
    
    render() {
      return <Container className="OrderTableContainer">
          <span>
            <Label className="order-table-title">ORDER LIST</Label>
          </span>
          <Row>
            <Col>
              <UserOrdersTable orders={this.GetExactUserOrders()} />
            </Col>
          </Row>
        </Container>;
    }
}

export default ViewOrderPage;
