import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './ProductPage.css';

function createProductList() {
    const productList = ["cake1", "cake2", "cake3"];
    return (
        <ul>
            {productList.map((value, index) => {
                return <li key={index}>{value}</li>
            })}
        </ul>
    );
}

function ShowProductList() {
    return (
        <React.Fragment>
            <Jumbotron class="jumbotron">
                <h2>Here you can find all products provided by MRS CAKE</h2>
                <p>
                    Just press "Add to cart" to make a step forward unbelivable taste!
                </p>
            </Jumbotron>
            <div>{createProductList()}</div>
        </React.Fragment>
    );
}


export default ShowProductList;
