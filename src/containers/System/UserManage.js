/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { handleGetAllUser, createNewUserService, deleteUserService, editUserService } from '../../services/userService';

import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';

import './UserManage.scss';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userArray: [],
            isOpenModal: false,
            isOpenModalEditUser: false,
            currentUser: {},
        };
    }

    async UNSAFE_componentWillMount() {
        this.handleGetAllUserFromReact();
    }

    //Handle event
    handleGetAllUserFromReact = async () => {
        const response = await handleGetAllUser('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                userArray: response.user,
            });
        }
    };

    handleAddNewUser = () => {
        this.setState({
            isOpenModal: true,
        });
    };

    toggleOpenModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        });
    };

    toggleOpenModalEditUser = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        });
    };

    handleDeleteUser = async (user) => {
        try {
            let response = await deleteUserService(user.id);
            if (response && response.errCode === 0) {
                this.handleGetAllUserFromReact();
            } else {
                alert(response.errMessage);
            }
        } catch (e) {
            console.log(e);
        }
    };

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            currentUser: user,
        });
    };

    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage);
            } else {
                this.setState({
                    isOpenModal: false,
                });
                this.handleGetAllUserFromReact();
            }
        } catch (e) {
            console.log(e);
        }
    };

    doEditUser = async (data) => {
        try {
            let response = await editUserService(data);
            if (response && response.errCode === 0) {
                this.handleGetAllUserFromReact();
                this.setState({
                    isOpenModalEditUser: false,
                });
            } else {
                alert(response.errMessage);
            }
        } catch (e) {
            console.log(e);
        }
    };
    render() {
        let allUsers = this.state.userArray;
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toggleOpenModal={this.toggleOpenModal}
                    createNewUser={this.createNewUser}
                />

                {this.state.isOpenModalEditUser && (
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleOpenModal={this.toggleOpenModalEditUser}
                        currentUser={this.state.currentUser}
                        editUser={this.doEditUser}
                    />
                )}

                <div className="title text-center">Manage User</div>
                <button
                    type="button"
                    className="btn btn-secondary add-user-btn"
                    onClick={() => this.handleAddNewUser()}
                >
                    <i className="fas fa-plus"></i>
                    Add New User
                </button>
                <div className="table mt-4">
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Email</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {allUsers &&
                                allUsers.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{user.email}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.address}</td>
                                            <td className="action-btn">
                                                <button
                                                    type="button"
                                                    onClick={() => this.handleEditUser(user)}
                                                    className="btn btn-secondary edit-btn"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => this.handleDeleteUser(user)}
                                                    className="btn btn-secondary delete-btn"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
