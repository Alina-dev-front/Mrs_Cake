import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import RegistrationForm from './RegistrationForm';
import Cookies from 'js-cookie';
import './RegistrationModal.css';

class RegistrationModal extends Component {
    state = {
        modal: false
    }
    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    }

    render() {
        const isNew = this.props.isNew;
        let title = 'Edit Product';
        let button = '';
        let display = ""
        let userRole = Cookies.get('role');
        if(userRole === 'Customer') {
            display = 'none'
        }
        let displayVariable = {
            display: display 
        } 
        if (isNew) {
            title = 'Add Product';
            button = <Button className="add-product-button"
                onClick={this.toggle}
                style={displayVariable}>Add new product</Button>;
        } else {
            button = <Button
                color="warning"
                onClick={this.toggle}
                style={displayVariable}>Edit</Button>;
        }
        return <Fragment>
            {button}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                <ModalBody>
                    <RegistrationForm
                        addProductToState={this.props.addProductToState}
                        updateProductIntoState={this.props.updateProductIntoState}
                        toggle={this.toggle}
                        product={this.props.product} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
}
export default RegistrationModal;
