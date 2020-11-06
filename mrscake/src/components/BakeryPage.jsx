import React, { useState } from "react";
import { Container, Label, Table } from 'reactstrap';
import { PRODUCTS_API_URL } from '../constants/api_url_path';


function BakeryPage() {
    const [allProducts, setAllProducts] = useState(null)
    ShowAllProducts();

    function ShowAllProducts() {
            fetch(PRODUCTS_API_URL)
            .then(res => res.json())
            .then(usersData => setAllProducts(usersData))
            .catch(err => console.log(err));
    
}
   

  
    

   return<Container style={{paddingTop: "150px"}}>
               <Label>PRODUCT LIST</Label>
               {/* <Form>
          <Label>Choose by form:</Label>
            <select value={this.state.item} onChange={this.handleChangeItem}>
                <option value="none">Show all</option>
                {uniqueItem.map(item => (
                  <option key={item.id} value={item.Bakery}>
                    {item.Bakery}
                  </option>
                ))}
            </select>
            <div style={{display: "none"}}>{filterDropdown.map(item => (
              filteredItems.push(item)
            ))}
            </div>
        </Form> */}
                <Table striped>
                    <thead className="thead-light">
                        <tr>
                            <th>Product Id</th>
                            <th>Product Type</th>
                            <th>Name</th>
                            <th>Bakery</th>
                            {/* <th>Description</th> */}
                            <th>Price</th>
                            <th>Image url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!allProducts || allProducts.length <= 0 ?
                        <tr>
                            <td colSpan="6" align="center"><b>Uploading products...</b></td>
                        </tr>
                        : allProducts.map(product => (
                        <tr key={product.id}>
                            <td>
                                {product.id}
                            </td>
                            <td>
                                {product.productType}
                            </td>
                            <td>
                                {product.name}
                            </td>
                            <td >
                                {product.bakery}
                            </td>
                            {/* <td>
                                {product.description}
                            </td> */}
                            <td>
                                {product.price}
                            </td>
                            <td>
                                {product.imageUrl}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
      
    
    }

export default BakeryPage;
