import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import BakeryForm from './BakeryForm';
import Cookies from 'js-cookie';
import './BakeryModal.css';

class BakeryModal extends Component {
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
        let title = 'Edit Bakery';
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
            title = 'Add Bakery';
            button = <Button className="add-bakery-button"
                onClick={this.toggle}
                style={displayVariable}>Add new bakery</Button>;
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
                    <BakeryForm
                        addBakeryToState={this.props.addBakeryToState}
                        updateBakeryIntoState={this.props.updateBakeryIntoState}
                        toggle={this.toggle}
                        bakery={this.props.bakery} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
}
export default BakeryModal;
