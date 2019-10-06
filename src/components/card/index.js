
import React from 'react';
import Modal from '../Modal';

export default class Card extends React.Component {
    render() {
        let product = this.props.product;
        
        return (
                <div className='card w-50 h-50 my-2 float-left rounded p-2'>
                    <img className='w-50 h-50 rounded d-inline' src={product.imageUrl} alt={product.name}></img>
                    <h3 className='text-center'>{product.name}</h3>
                    <h3 className='float-left'>Quantity: {product.quantity}</h3>
                    <div className='w-100 clearfix'>
                    <h3 className='float-left text-success'>&#8377; {product.price}</h3>
                    <button className='btn w-25 float-right btn-light' data-toggle="modal" data-target={'#product'+product._id}><img src='/pencil.png' width='20px' height='20px' alt=''></img></button>
                    <Modal update={this.props.update} product={product} id={'product'+product._id}/>
                    </div>  
                </div>
        );
    }
}
