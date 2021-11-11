import React from 'react';
import PaginationComponent from '../PaginationComponent';
import Users from './Users';
import { fetchDatas } from '../Helper';
import { API } from '../API';

export default class UsersComponentClass extends React.Component{
    url = API.users
    
    constructor(props){
        super(props)
        this.state = {
            users: [],
            pageCount: 0
        }
    }

    componentDidMount = () => {
        this.onPageChange()
    }

    onPageChange = async (page = 0) => {
        let { totalPages, datas } = await
            fetchDatas(this.url, page + 1)

        this.setState({
            pageCount: totalPages,
            users: datas
        })
    }

    render = () => (
        <div className="App">
            <Users users={this.state.users} />

            <PaginationComponent
                pageCount={this.state.pageCount}
                onPageChange={this.onPageChange}
            />
        </div>
    );
}