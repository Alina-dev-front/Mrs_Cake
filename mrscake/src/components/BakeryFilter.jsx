import React, { Component } from 'react';
import {  Container, Form,  Label } from 'reactstrap';
import { PRODUCTS_API_URL } from '../constants/api_url_path';
import BakeryTable from './BakeryTable';
import { BAKERIES_API_URL } from '../constants/bakeries_api_url';
import { USERS_API_URL } from '../constants/user_api_url.js';
import Cookies from 'js-cookie';
import './BakeryTable.css';

class BakeryFilter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [],
        bakeries: [],
        user: {}
      }
    }
      
    componentDidMount() {
      this.GetProducts();
      this.GetAllBakeries();
      this.GetUser();
    }

    GetUser = () => {
      fetch(`${USERS_API_URL}/${Cookies.get('user_id')}`, {
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

    GetProducts = () => {
      fetch(PRODUCTS_API_URL)
        .then(res => res.json())
        .then(res => this.setState({ products: res }))
        .catch(err => console.log(err));
    }

    GetAllBakeries = () => {
      fetch(BAKERIES_API_URL)
        .then(res => res.json())
        .then(res => {
          this.setState({ bakeries: res })
        })
        .catch(err => console.log(err));
    }

    ShowOwnBakery = () => {
      let ownBakery = {};
      this.state.bakeries.forEach(bakery => {
        if(bakery.email === this.state.user.email) {
          ownBakery = bakery;
        }
      })
      return ownBakery;
    }

    ChooseOwnProducts = () => {
      let ownProducts = [];
      let ownBakery = this.ShowOwnBakery();
      this.state.products.forEach(product => {
        if(product.bakery === ownBakery.name) {
          ownProducts.push(product);
        }
      })
      return ownProducts;
    }
    
    render() {
      return <Container className="ProductTableContainer">
        <span>
            <Label className="product-table-title" >PRODUCT LIST</Label>
        </span>
        <Form>
        </Form>
              <BakeryTable
                products = {this.ChooseOwnProducts()} />
        </Container>;
    }
}

export default BakeryFilter;
