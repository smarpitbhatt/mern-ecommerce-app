import React from 'react';
import axios from 'axios';

import ProductContainer from '../ProductContainer';

let image, formVisible;
export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            quantity: 0,
            price: 0,
            description: '',
            image: '',
            imageUrl: '',
            formVisible: false
        }
    }

    componentDidMount() {
        // if(localStorage.token!==undefined) window.location = '/home';
     }
 
     createForm = ()=> {
         return (
            <div className="mt-5 bg-light py-2 border rounded text-center">
            <button className='btn btn-lg float-left text-white btn-warning py-2' onClick={this.toggleForm}>X Close</button>
            <h3>Add Product Details:</h3>
            <br />
            <form className="form-group" onSubmit={this.onSubmit}>

                
                <label>Name:</label>&nbsp;&nbsp;&nbsp;
                <input type="text" className="form-control w-25 d-inline" value={this.state.name} onChange={this.onChangeName}  required></input> &nbsp;&nbsp;&nbsp;&nbsp;
                
                <label>Quantity:</label>&nbsp;&nbsp;&nbsp;
                <input type="number" className="form-control w-25 d-inline" value={this.state.quantity} onChange={this.onChangeQuantity}  required></input> &nbsp;&nbsp;&nbsp;&nbsp;

                <label>Price:</label>&nbsp;&nbsp;&nbsp;
                <input type="number" className="form-control w-25 d-inline" value={this.state.price} onChange={this.onChangePrice}  required></input> &nbsp;&nbsp;&nbsp;&nbsp;

                <br />
                <br />
                
                <label>Description:</label>
                <textarea type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription}  required></textarea>

                <br />

                <label className="mx-auto d-block">Upload Image:</label>
                
                {!image && <p className="w-50 mx-auto d-block"><input type="file" className="form-control w-75 d-inline " onChange={this.onChangeFile}  required></input></p>}
                
                {image && <img src={image} className='mx-auto d-block w-25 border' alt='img' height='200px'></img>}
                
                <br />
                <br />
                
                <input type="submit" className="btn btn-primary mx-auto d-block" value="Submit"></input>
            </form>
        </div>
         );
     }

     onChangeName = (e) => {
         this.setState({
             name: e.target.value
         })
     }
 
     onChangeQuantity = (e)=> {
         this.setState({
             quantity: e.target.value
         })
     }            
 
     onChangePrice = (e)=> {
        this.setState({
            price: e.target.value
        })
    }            

    onChangeDescription = (e)=> {
        this.setState({
            description: e.target.value
        })
    }            

    onChangeFile = (e)=> {
    let file = e.target.files[0];

    let reader = new FileReader();
    
    reader.onloadend = () => {
      this.setState({
        image: file,
        imageUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
    }        

    toggleForm = ()=> {
        this.setState({formVisible: formVisible?false:true})
    }

     onSubmit = (e)=> {
         e.preventDefault();
 
         var { image, formVisible, ...product } = this.state;

         console.log(product);
        axiosPostRequest(product)
        .then( res=> {
            console.log(res);
            window.location.reload();
        })
        .catch(err => {
            
        });
     }
 
    render() {
        image = this.state.imageUrl===''?undefined:this.state.imageUrl;
        formVisible = this.state.formVisible;

        return (
            <div className='container w-100'>
                <h1 className='display-1'>Admin</h1>

                {/* **Form Starts */}
                    {!formVisible && <button className='btn btn-light btn-lg' onClick={this.toggleForm} >Add Products</button>}
                    {formVisible && this.createForm()}
                {/* **Form End** */}

                <h1 className='display-2 mx-auto'>Products:</h1>
                <ProductContainer product={this.state} />

            </div>
        );
    }
}

var axiosPostRequest = (product)=> {
    return axios.post('http://localhost:5000/product/add', product)
}
