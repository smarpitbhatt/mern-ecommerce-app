import React from 'react';
import axios from 'axios';

import Spinner from '../Spinner';
import Card from '../card';

export default class ProductContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            loading: true
        }
    }

    componentDidMount() {
        this.setState({loading: true})

        axiosGet()
        .then(res => {
            this.setState({products: res.data.products, loading:false})
        })
    }

    productList = ()=> {
        return this.state.products.map((current) => {
            return <div className='container'  key={current._id}><Card update={this.updateProducts} product={current} key={current._id}/></div>;
        })
    }

    updateProducts = ()=> {
        console.log('updating..');
        this.setState({loading: true})
        axiosGet()
        .then(res => {
            this.setState({products: res.data.products, loading:false})
        })
    }

    render() {
        return (
            <div className="bg-light border">
                {this.state.loading && <Spinner />}
                {!this.state.loading && this.productList()}
            </div>
        );
    }
}

let axiosGet = ()=> {
    return axios.get('http://localhost:5000/product/');
}