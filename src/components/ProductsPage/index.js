import React from 'react';
import ProductContainer from '../ProductContainer';

export default class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    render() {
        return (
            <div className='container'>
                <h1 className='display-1'>Products</h1>
                <ProductContainer />
            </div>
        );
    }
}