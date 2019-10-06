import React from 'react';
import axios from 'axios';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            quantity: 0,
            price: 0,
            description: '',
            imageUrl: ''
        }
    
    }

    componentDidMount() {
        let product = this.props.product;
        this.setState(product);
    }

    onChangeName = (e)=> {
        this.setState({name: e.target.value});
    }
    onChangeQuantity = (e)=> {
        this.setState({quantity: e.target.value});
    }
    onChangeDescription = (e)=> {
        this.setState({description: e.target.value});
    }
    onChangePrice = (e)=> {
        this.setState({price: e.target.value});
    }
    onSubmit = (e)=> {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:5000/product/update',this.state)
        .then(res => {

            if(res!=null) this.props.update();
            else alert('Some error occured');

        })
        .catch(err => console.log(err));
    }
    handleDelete = ()=> {
        axios.delete('http://localhost:5000/product/'+this.props.product._id)
        .then(res => {
            this.props.update();
        })
    }

    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="modal-title display-4">Edit</h2>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <form onSubmit={this.onSubmit}>

                    <div className="modal-body  bg-light">
                            <div className="form-group w-100 col-md-8">
                                <label>Name:</label> <input type="text" className="form-control w-100" value={this.state.name} onChange={this.onChangeName}  required></input>
                            </div>
        
                            <div className="form-group col-md-8">
                                <label>Quantity:</label>
                                <input type="number" className="form-control" value={this.state.quantity} onChange={this.onChangeQuantity}  required></input>
                            </div>    
            
                            <div className="form-group col-md-8">
                                <label>Description:</label> <textarea type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}  required></textarea>
                            </div>

                            <div className="form-group col-md-8">
                                <label>Price:</label> <input type="number" className="form-control" value={this.state.price} onChange={this.onChangePrice}  required></input>
                            </div>

                    </div>

                    <div className="modal-footer">
                        <button type="button" onClick={this.handleDelete} className="btn btn-danger" data-dismiss="modal">Delete</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" onClick={this.onSubmit} className="btn btn-primary" data-dismiss="modal">Apply Changes</button>
                    </div>

                  </form>


                </div>
              </div>
            </div>        
        );
    }

}