import React, { Component } from 'react';
import { Col, Container,  Row } from 'reactstrap';
import './BakeryPage.css';
import UserModal from './UserModal';
import UserDetails from './UserDetails';
import { USERS_API_URL } from '../constants/user_api_url';
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
      fetch(USERS_API_URL)
        .then(res => res.json())
        .then(res => this.setState({ items: res }))
        .catch(err => console.log(err));
    }
    addUserToState = user => {
      this.setState(previous => ({
        items: [...previous.items, user]
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
      

      return <Container className="ProductTableContainer">
        <span>
            
            <UserModal isNew={false}updateUserToState={this.updateUserToState} />
        </span>
        
          <Row>
            <Col>
              <UserDetails
                
                updateState={this.updateState}
                 />
            </Col>
          </Row>
        </Container>;
    }
}

export default connect()(UserProfilePage) ;