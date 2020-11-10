import React, { useState } from "react";
import { Container, Table } from 'reactstrap';
import { PRODUCTS_API_URL } from '../constants/api_url_path';
import {connect} from 'react-redux';

function BakeryPage() {
    const [allProducts, setAllProducts] = useState(null)
    ShowAllProducts();

    function ShowAllProducts() {
            fetch(PRODUCTS_API_URL)
            .then(res => res.json())
            .then(productsData => setAllProducts(productsData))
            .catch(err => console.log(err));
        }

   return<Container style={{paddingTop: "150px"}}>
               {/* <Label>PRODUCT LIST</Label> */}
                 <Table striped>
                    <thead className="thead-light">
                        <tr>
                            <th>Product Id</th>
                            <th>Product Type</th>
                            <th>Name</th>
                            <th>Bakery</th>
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
                            <td>
                                {product.bakery}
                            </td>
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
export default connect()(BakeryPage);
