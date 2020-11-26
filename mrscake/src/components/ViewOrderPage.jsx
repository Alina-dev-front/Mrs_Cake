import React, { Component } from 'react';
import { Col, Container, Row, Label } from 'reactstrap';
import UserOrdersTable from './UserOrdersTable';
import {ORDERS_API_URL} from '../constants/orders_api_url';
import { USERS_API_URL } from '../constants/user_api_url.js';
import Cookies from 'js-cookie';

class ViewOrderPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        item: "",
        user: { }
      }
    }
    
  
    handleChangeItem = event => {
      this.setState({ item: event.target.value });
    };
  
    componentDidMount() {
      this.getItems();
      this.getUser();
    }

    getUser = () => {
      let userEmail = Cookies.get('userEmail');
      fetch(`${USERS_API_URL}/${userEmail}`, {
               method: 'get',
               headers: {'Content-Type': 'application/json'},
             })
          //    .then(response => {
          //     var dbResponse = response.json();
          //     return dbResponse;
          // })
          .then(userData => {
            this.setState({user: userData});
          })
            
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
    // getUnique(array, comparison) {
    //   const uniqueUserId = array
    //     .map(element => element[comparison])
    //     .map((element, index, final) => final.indexOf(element) === index && index)
    //     .filter(element => array[element])
    //     .map(element => array[element]);
  
    //   return uniqueUserId;
    // }
    render() {
      // const uniqueItem = this.getUnique(this.state.items, "userId");
  
      const items = this.state.items;
      const item = this.state.item;
      const filteredItems = [];
    
      return <Container className="OrderTableContainer">
        <span>
            <Label className="order-table-title">Users's Order list</Label>
        </span>
         
{/*           
            {items.map(item => {

              if(item.userId === user.email){
              items.push(item)
              
            }
          }) */}
          {/* } */}
       
      
          <Row>
            <Col>
           
              <UserOrdersTable
                items={items}
                filteredItems
                updateState={this.updateState}
                deleteItemFromState={this.deleteItemFromState} />
                
            </Col>
          </Row>
        </Container>;
    }
}

export default ViewOrderPage;
