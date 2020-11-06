import React, { Component } from 'react';
import { Col, Container, Form, Row, Label } from 'reactstrap';
import './ProductPage.css';
import DataTable from './DataTable';
import RegistrationModal from './form/RegistrationModal';
import { PRODUCTS_API_URL } from '../constants/api_url_path';
import {connect} from 'react-redux';

class ProductTable extends Component {
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
      this.getItems();
    }
    deleteItemFromState = id => {
      const updated = this.state.items.filter(item => item.id !== id);
      this.setState({ items: updated })
    }
    getUnique(array, comparison) {
      const uniqueProductType = array
        .map(element => element[comparison])
        .map((element, index, final) => final.indexOf(element) === index && index)
        .filter(element => array[element])
        .map(element => array[element]);
  
      return uniqueProductType;
    }
    render() {
      const uniqueItem = this.getUnique(this.state.items, "productType");
      
      const items = this.state.items;
      const item = this.state.item;
      const filteredItems = [];
  
      const filterDropdown = items.filter(function(result) {
        return result.productType === item;
      });

      return <Container className="ProductTableContainer">
        <span>
            <Label className="product-table-title" >PRODUCT LIST</Label>
            <RegistrationModal isNew={true} addProductToState={this.addProductToState} />
        </span>
        <Form>
          <Label>Choose by form:</Label>
            <select value={this.state.item} onChange={this.handleChangeItem}>
                <option value="none">Show all</option>
                {uniqueItem.map(item => (
                  <option key={item.id} value={item.productType}>
                    {item.productType}
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
              <DataTable
                items={items}
                filteredItems={filteredItems}
                updateState={this.updateState}
                deleteItemFromState={this.deleteItemFromState} />
            </Col>
          </Row>
        </Container>;
    }
}

export default connect()(ProductTable) ;