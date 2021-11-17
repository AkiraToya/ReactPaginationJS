import './Todos.css'
import React from 'react';
import Todos from './Todos';
import { API } from '../../API';
import GenericComponentClass from '../GenericComponentClass';

export default class TodosComponentClass extends GenericComponentClass{
    url = API.todos
    
    mainComponent = () => <Todos todos={this.state.datas} />
}