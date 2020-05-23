const express = require('express');
const knex = require('knex');
const db = require('./data/models/cars.js');


const router = express.Router();


//base route
// router.get('/', (req, res) => {
//     db.find()
//     .then(post => {
//         res.json(post)
//     })
//     .catch(err => {
//         res.json(err)
//     })
// })
router
    .route('/')
    .get((req, res) => {
        db.find()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}`})
        })
    })
    .post((req, res) => {
        db.insert(req.body)
        .then(post => {
            res.status(201).json({message: "Successfully posted", post})
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}`})
        })
    });

router
    .route('/:id')
    .get(({ params: {id}}, res) => {
       db.findById(id)
       .then(post => {
        res.status(200).json(post)
    })
    .catch(err => {
        res.status(500).json({message: `Something went wrong... ${err}`})
    })
    })
    .put((req, res) => {
        const { id } = req.params;
        db.update(id, req.body)
        .then(post => {
            res.status(201).json({message: "Successfully updated", post})
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}`})
        })
    })
    .delete(({ params: {id}}, res) => {
        db.remove(id).del()
        .then(post => {
            res.status(201).json({message: "Successfully deleted", post})
        })
        .catch(err => {
            res.status(500).json({message: `Something went wrong... ${err}`})
        })
    });

module.exports = router;
