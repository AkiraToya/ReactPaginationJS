import React from 'react';
import PaginationComponent from './PaginationComponent';
import { fetchDatas } from './Helper';

export default class GenericComponentClass extends React.Component{
    url = ""
    
    constructor(props){
        super(props)
        this.state = {
            datas: [],
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
            datas: datas
        })
    }

    mainComponent = () => {
        return <></>
    }

    render = () => (
        <div className="App">
            { this.mainComponent() }

            <PaginationComponent
                pageCount={this.state.pageCount}
                onPageChange={this.onPageChange}
            />
        </div>
    );
}