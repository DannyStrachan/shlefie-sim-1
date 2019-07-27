module.exports ={
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then((products) => {
            res.status(200).send(products)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    addProduct: (req, res) => {
        const {name, price, image} = req.body;
        const db = req.app.get('db')
        db.add_product([name, price, image]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    deleteProduct: (req, res) => {
        let {id} = req.params;
        const db = req.app.get('db')
        id = +id
        db.delete_product(id).then(() => res.sendStatus(200))
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    },
    updateProduct: (req, res) => {
        const {name, price, image} = req.body;
        const {id} = req.params;
        const db = req.app.get('db')
        db.update_product([id, name, price, image]).then(() => res.sendStatus(200))
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
    }
    
}