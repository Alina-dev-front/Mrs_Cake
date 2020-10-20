import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './ProductPage.css';
import DataTable from './DataTable';
import RegistrationModal from './form/RegistrationModal';
import { PRODUCTS_API_URL } from '../constants/api_url_path';

class ProductTable extends Component {
    state = {
      items: [],
      cartItems:[]
    }
    componentDidMount() {
      this.getItens();
    }
    getItens = () => {
      fetch(PRODUCTS_API_URL)
        .then(res => res.json())
        .then(res => this.setState({ items: res }))
        .catch(err => console.log(err));
    }
    addToCart = product => {
      const cartItems = this.state.cartItems.slice();
      let alreadyInCart = false;
      cartItems.forEach((item) => {
        if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
      })
      if(!alreadyInCart) {
        cartItems.push({...product, count : 1});
      }
      this.setState({cartItems});
    };

    
    render() {
      return <Container className="ProductTableContainer">
        <Row>
          <Col>
            <h3>PRODUCT LIST</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
              items={this.state.items}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <RegistrationModal isNew={true} addProductToState={this.addProductToState} />
          </Col>
        </Row>
      </Container>;
    }
  }
export default ProductTable;
