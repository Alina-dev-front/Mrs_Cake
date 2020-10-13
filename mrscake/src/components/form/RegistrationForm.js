import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { PRODUCTS_API_URL } from '../../constants/api_url_path';

class RegistrationForm extends React.Component {
    state = {
        id: '',
        product_type: '',
        name: '',
        description: '',
        bakery: '',
        price: null,
        imageUrl: ''
    }
    componentDidMount() {
        if (this.props.product) {
            const { id, product_type, name, description, bakery, imageUrl, price } = this.props.product
            this.setState({ id, product_type, name, description, bakery, imageUrl, price });
        }
    }
    onChange = e => {
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
                product_type: this.state.product_type,
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
                product_type: this.state.product_type,
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
                <Input type="text" name="name" onChange={this.onChange} value={this.state.name === '' ? '' : this.state.name} />
            </FormGroup>
            <FormGroup>
                <Label for="product_type">Product type:</Label>
                <Input required='true' type="text" name="product_type" onChange={this.onChange} value={this.state.product_type === '' ? '' : this.state.product_type} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description:</Label>
                <Input type="text" name="description" onChange={this.onChange} value={this.state.description === '' ? '' : this.state.description} />
            </FormGroup>
            <FormGroup>
                <Label for="bakery">Bakery:</Label>
                <Input required='true' type="text" name="bakery" onChange={this.onChange} value={this.state.bakery === '' ? '' : this.state.bakery} />
            </FormGroup>
            <FormGroup>
                <Label for="price">Price:</Label>
                <Input required='true' type="int" name="price" onChange={this.onChange} value={this.state.price === null ? null : this.state.price}
                    placeholder="356" />
            </FormGroup>
            <FormGroup>
                <Label for="imageUrl">Product image URL:</Label>
                <Input type="text" name="imageUrl" onChange={this.onChange} value={this.state.imageUrl === '' ? '' : this.state.imageUrl} />
            </FormGroup>
            <Button>Send</Button>
        </Form>;
    }
}
export default RegistrationForm;
