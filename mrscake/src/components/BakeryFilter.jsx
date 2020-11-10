import React, { Component } from 'react';
import {  Container, Form,  Label } from 'reactstrap';
import { PRODUCTS_API_URL } from '../constants/api_url_path';
import BakeryPage from './BakeryPage';
import {connect} from 'react-redux';
class BakeryFilter extends Component {
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
      const uniqueBakery = array
        .map(element => element[comparison])
        .map((element, index, final) => final.indexOf(element) === index && index)
        .filter(element => array[element])
        .map(element => array[element]);
  
      return uniqueBakery;
    }
    render() {

     
      const uniqueItem = this.getUnique(this.state.items, "bakery");
      
      const items = this.state.items;
      const item = this.state.item;
      const filteredItems = [];
  
      const filterDropdown = items.filter(function(result) {
        return result.bakery === item;
      });

      return <Container className="ProductTableContainer">


        <span>
            <Label className="product-table-title" >PRODUCT LIST</Label>
        </span>
        <Form>
          <Label>Select products as per Bakery:</Label>
          
            <select value={this.state.item} onChange={this.handleChangeItem}>
                <option value="none">Show all</option>
                {uniqueItem.map(item => (
                  <option key={item.id} value={item.bakery}>
                    {item.bakery}
                  </option>
                ))}
            </select>
            <div style={{display: "none"}}>{filterDropdown.map(item => (
              filteredItems.push(item)
            ))}
            </div>
        </Form>
          
           
            
              <BakeryPage
                items={items}
                filteredItems={filteredItems}
                updateState={this.updateState}
                deleteItemFromState={this.deleteItemFromState} />
        
        
            
        </Container>;
    }
}

export default connect()(BakeryFilter) ;