import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { PRODUCTS_API_URL } from '../../constants/api_url_path';

class RegistrationForm extends React.Component {
    state = {
        id: '',
        productType: '',
        name: '',
        description: '',
        bakery: '',
        price: null,
        imageUrl: '',
    }
    componentDidMount() {
        if (this.props.product) {
            const { id, productType, name, description, bakery, price, imageUrl } = this.props.product
            this.setState({ id, productType, name, description, bakery, price, imageUrl });
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = e => {
        e.preventDefault();
        fetch(`${PRODUCTS_API_URL}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                productType: this.state.productType,
                description: this.state.description,
                bakery: this.state.bakery,
                price: parseInt(this.state.price),
                imageUrl: this.state.imageUrl,
            })
        })
            .then(res => res.json())
            .then(product => {
                this.props.addProductToState(product);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }
    submitEdit = e => {
        e.preventDefault();
        fetch(`${PRODUCTS_API_URL}/${this.state.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                productType: this.state.productType,
                description: this.state.description,
                bakery: this.state.bakery,
                price: parseInt(this.state.price),
                imageUrl: this.state.imageUrl,
            })
        })
            .then(() => {
                this.props.toggle();
                this.props.updateProductIntoState(this.state.id);
            })
            .catch(err => console.log(err));
    }
    render() {
        return <Form onSubmit={this.props.product ? this.submitEdit : this.submitNew}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input type="text" name="name" onChange={this.handleChange} value={this.state.name === '' ? '' : this.state.name} />
            </FormGroup>
            <FormGroup >
                <Label for="productType">Choose product type:</Label>
                    <select name="productType" onChange={this.handleChange} value={this.state.productType === '' ? '' : this.state.productType}>
                        <option value="none"></option>
                        <option value="Cake">Cake</option>
                        <option value="Cupcake">Cupcake</option>
                        <option value="Cookie">Cookie</option>
                        <option value="Donut">Donut</option>
                        <option value="Pie">Pie</option>
                        <option value="Macaron">Macaron</option>
                    </select>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description:</Label>
                <Input type="text" name="description" onChange={this.handleChange} value={this.state.description === '' ? '' : this.state.description} />
            </FormGroup>
            <FormGroup>
                <Label for="bakery">Bakery:</Label>
                <Input required='true' type="text" name="bakery" onChange={this.handleChange} value={this.state.bakery === '' ? '' : this.state.bakery} />
            </FormGroup>
            <FormGroup>
                <Label for="price">Price:</Label>
                <Input required='true' type="number" name="price" onChange={this.handleChange} value={this.state.price === null ? null : this.state.price}
                    placeholder="356" />
            </FormGroup>
            <FormGroup>
                <Label for="imageUrl">Product image URL:</Label>
                <Input type="text" name="imageUrl" onChange={this.handleChange} value={this.state.imageUrl === '' ? '' : this.state.imageUrl} />
            </FormGroup>
            <Button>Send</Button>
        </Form>;
    }
}
export default RegistrationForm;
