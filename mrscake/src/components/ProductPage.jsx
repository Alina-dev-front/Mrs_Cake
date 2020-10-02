import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './ProductPage.css';
import DataTable from './DataTable';
import RegistrationModal from './form/RegistrationModal';
import { PRODUCTS_API_URL } from '../constants/api_url_path';

class ProductTable extends Component {
    state = {
      items: []
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
    addProductToState = product => {
      this.setState(previous => ({
        items: [...previous.items, product]
      }));
    }
    updateState = (id) => {
      this.getItens();
    }
    deleteItemFromState = id => {
      const updated = this.state.items.filter(item => item.id !== id);
      this.setState({ items: updated })
    }
    render() {
      return <Container style={{ paddingTop: "100px" }}>
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
