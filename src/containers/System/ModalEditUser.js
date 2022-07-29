/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import _ from 'lodash';

class ModalEditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        };
    }

    componentDidMount() {
        let { currentUser } = this.props;
        if (currentUser && !_.isEmpty(currentUser)) {
            this.setState({
                id: currentUser.id,
                email: currentUser.email,
                password: '123456',
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                address: currentUser.address,
            });
        }
    }

    toggle = () => {
        this.props.toggleOpenModal();
    };

    handleValidateData = () => {
        let isValid = true;
        const inputValue = ['email', 'password', 'firstName', 'lastName', 'address'];
        for (let i = 0; i < inputValue.length; i++) {
            if (!this.state[inputValue[i]]) {
                isValid = true;
                alert('Missing parameter: ' + inputValue[i]);
                break;
            }
        }
        return isValid;
    };

    handleSubmit = () => {
        let isValid = this.handleValidateData();
        if (isValid) {
            //call api
            this.props.editUser(this.state);
        }
    };

    handleOnChangeInput = (e, name) => {
        let copyState = { ...this.state };
        copyState[name] = e.target.value;
        this.setState({
            ...copyState,
        });
    };

    render() {
        return (
            <div>
                <Modal
                    className={'modal-user-container'}
                    isOpen={this.props.isOpen}
                    toggle={() => this.toggle()}
                    centered
                    size="lg"
                >
                    <ModalHeader toggle={() => this.toggle()}>Edit User</ModalHeader>
                    <ModalBody>
                        <div className="modal-input-container">
                            <div className="modal-input-body">
                                <div className="input-container">
                                    <label>Email</label>
                                    <input
                                        disabled
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={(e) => this.handleOnChangeInput(e, e.target.name)}
                                    ></input>
                                </div>
                                <div className="input-container">
                                    <label>Password</label>
                                    <input
                                        disabled
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={(e) => this.handleOnChangeInput(e, e.target.name)}
                                    ></input>
                                </div>
                                <div className="input-container">
                                    <label>FirstName</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={(e) => this.handleOnChangeInput(e, e.target.name)}
                                    ></input>
                                </div>
                                <div className="input-container">
                                    <label>LastName</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={(e) => this.handleOnChangeInput(e, e.target.name)}
                                    ></input>
                                </div>
                                <div className="input-container max-width-input">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={this.state.address}
                                        onChange={(e) => this.handleOnChangeInput(e, e.target.name)}
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary px-2" onClick={() => this.handleSubmit()}>
                            Save Changes
                        </Button>{' '}
                        <Button color="secondary px-2" onClick={() => this.toggle()}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
