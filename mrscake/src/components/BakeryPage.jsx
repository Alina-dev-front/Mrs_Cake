import React, { Component } from 'react';
import { Col, Container, Form, Row, Label } from 'reactstrap';
import './BakeryPage.css';
import BakeryModal from './BakeryModal';
import BakTab from './BakTab';
import { BAKERIES_API_URL } from '../constants/bakeries_api_url';
import {connect} from 'react-redux';

class BakeryPage extends Component {
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
      fetch(BAKERIES_API_URL)
        .then(res => res.json())
        .then(res => this.setState({ items: res }))
        .catch(err => console.log(err));
    }
    addBakeryToState = bakery => {
      this.setState(previous => ({
        items: [...previous.items, bakery]
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
      const uniqueItem = this.getUnique(this.state.items, "name");
      
      const items = this.state.items;
      const item = this.state.item;
      const filteredItems = [];
  
      const filterDropdown = items.filter(function(result) {
        return result.name === item;
      });

      return <Container className="ProductTableContainer">
        <span>
            <Label className="bakery-table-title" >Bakery List</Label>
            <BakeryModal isNew={true} addBakeryToState={this.addBakeryToState} />
        </span>
        <Form>
          <Label>Choose by bakery name:</Label>
            <select value={this.state.item} onChange={this.handleChangeItem}>
                <option value="none">Show all</option>
                {uniqueItem.map(item => (
                  <option key={item.id} value={item.name}>
                    {item.name}
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
              <BakTab
                items={items}
                filteredItems={filteredItems}
                updateState={this.updateState}
                deleteItemFromState={this.deleteItemFromState} />
            </Col>
          </Row>
        </Container>;
    }
}

export default connect()(BakeryPage) ;