import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import UserDetails from './UserDetails';
import Cookies from 'js-cookie';


class UserModal extends Component {
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
        let title = 'Edit User';
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
            title = 'Add User';
            button = <Button className="add-User-button"
                onClick={this.toggle}
                style={displayVariable}>Add new user</Button>;
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
                    <UserDetails
                        
                        updateUserIntoState={this.props.updateUserIntoState}
                        toggle={this.toggle}
                        User={this.props.User} />
                </ModalBody>
            </Modal>
        </Fragment>;
    }
}
export default UserModal;