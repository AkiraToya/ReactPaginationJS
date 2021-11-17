import React from 'react';
import Users from './Users';
import { API } from '../API';
import GenericComponentClass from '../GenericComponentClass';

export default class UsersComponentClass extends GenericComponentClass{
    url = API.users
    
    mainComponent = () => <Users users={this.state.datas} />
}