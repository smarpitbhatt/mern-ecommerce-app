const Product = require('../models/product.model');
const router = require('express').Router();

router.get('/', (req, res)=>{

    Product.find()
    .then(response => {
        res.send({
            products: response
        })
    })
    .catch(err =>res.status(400).send({message: err}));

});

router.delete('/:id', (req, res)=>{
    
    Product.findByIdAndDelete(req.params.id)
    .then(()=> res.send({message: 'Product Deleted', success: true}))
    .catch(err=> res.status(400).send({message: err, success: false}));

});


router.post('/add', (req, res)=>{
      
    let product = new Product({
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    });

    product.save()
    .then(response => res.send(response));
});

router.post('/update',(req, res)=> {
    console.log(req.body);
    Product.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(response=> res.send({product: response, success: true}))
    .catch(err => res.send({err: err, success: false}))

})

// router.delete('/:id', (req, res)=>{
    
//     Transaction.findByIdAndDelete(req.params.id)
//     .then(()=> res.send({message: 'Exercise Deleted', success: true}))
//     .catch(err=> res.status(400).send({message: err, success: false}));

// });

module.exports = router;
