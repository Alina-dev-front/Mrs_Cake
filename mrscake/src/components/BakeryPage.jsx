import React, { Component } from 'react';
import { Col, Container, Row, Label } from 'reactstrap';
import './BakeryPage.css';
import BakeryModal from './BakeryModal';
import BakTab from './BakTab';
import { BAKERIES_API_URL } from '../constants/bakeries_api_url';
import { USERS_API_URL } from '../constants/user_api_url.js';
import Cookies from 'js-cookie';


class BakeryPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bakeries: [],
        user: {},
        userId: Cookies.get('user_id'),
        userRole: Cookies.get('role')
      }
    }

    componentDidMount() {
      this.getAllBakeries();
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
    
    getAllBakeries = () => {
      fetch(BAKERIES_API_URL)
        .then(res => res.json())
        .then(res => {
          this.setState({ bakeries: res })
        })
        .catch(err => console.log(err));
    }

    GetExactUserBakeries = () => {
      let privateBakeries = [];
      this.state.bakeries.forEach(bakery => {
        if(bakery.email === this.state.user.email) {
          privateBakeries.push(bakery);
        }
      })
      return privateBakeries;   
    }
  
    render() {
      return <Container className="BakeryTableContainer">
        <span>
            <Label className="bakery-table-title" >View Bakery Profile</Label>
          <BakeryModal isNew={true} addBakeryToState={this.addBakeryToState} />
        </span>
          <Row>
            <Col>
              <BakTab
               bakeries={this.GetExactUserBakeries()}  />
            </Col>
          </Row>
        </Container>;
    }
}

export default (BakeryPage) ;