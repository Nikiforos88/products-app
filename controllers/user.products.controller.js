const User = require('../models/user.model');

exports.findAll = async(req, res) => {
    console.log('Find all users products');

    try {
        const result = await User.find({},{username: 1, products: 1, _id:0})
        res.status(200).json({data: result})
        console.log('Reading all users products');
    } catch(err) {
        res.status(400).json({data: err})
        console.log('Error:' + err);
    }
}

exports.findOne = async (req, res) => {
    const username = req.params.username;
    console.log('Find products from user: ', username);

    try {
        const result = await User.findOne({ username: username }, { username: 1, products: 1, _id: 0 });
        res.status(200).json({ data: result });
        console.log('Reading all products from user: ' + username);
    } catch (err) {
        res.status(400).json({ data: err });
        console.log('Error: ' + err);
    }
}

exports.create = async (req, res) => {
    const username = req.body.username;
    const products = req.body.products; 

    console.log('Insert products for user: ', username);

    try {
        const result = await User.updateOne(
            { username: username },
            {
                $push: {
                    products: products
                }
            }
        );
        res.status(200).json({ data: result });
        console.log('Update all products from user: ' + username);
    } catch (err) {
        res.status(400).json({ data: err });
        console.log('Error:' + err);
    }
};

exports.update = async (req,res) => {
    const username = req.params.username;
    const _id = req.body.product._id;
    const quantity = req.body.product.quantity;

    console.log('Update products for username', username);

    try {
        const result = await User.updateOne(
            {username: username, "products._id": _id},
            {
                $set: {
                    "products.$.quantity": quantity
                }
            }
        )
        res.status(200).json({data: result});
        console.log('Success in updating product', username);
    } catch(err) {
        res.status(400).json({data: err});
        console.log('Failed in updating product', username);
    }
}

exports.delete = async (req,res) => {
    const username = req.params.username;
    const _id = req.params._id;
    console.log('Delete product')

    try {
        const result = await User.updateOne({
            username: username},{
                $pull: {
                    products: {_id: _id}
                }
        })
        res.status(200).json({data: result});
        console.log('Success in updating product', username);
    } catch(err) {
        res.status(400).json({data: err});
        console.log('Failed in updating product', username);
    }
}