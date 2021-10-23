const express = require('express');
const router = express.Router();
const MyLink = require('../models/MyLink');

// GET BACK ALL THE MyLinks
router.get('/', async (req, res) => {
    try {
        const myLinks = await MyLink.find();
        res.json(myLinks);
    } catch(err) {
        res.json({ message: err });
    }
});

// GET SPECIFIC MyLink
router.get('/:linkId', async (req, res) => {
    try {
        const myLink = await MyLink.findById(req.params.linkId);
        res.json(myLink);
    } catch(err) {
        res.json({ message: err });
    } 
});

// SUBMIT A MyLink
router.post('/', async (req, res) => {
    const myLink = new MyLink({
        title: req.body.title,
        url: req.body.url,
        description: req.body.description,
        category: req.body.category
    });

    try {
        const savedMyLink = await myLink.save();
        res.json(savedMyLink);
        console.log(`MyLink with title '${myLink.title}' added`)
    } catch(err) {
        res.json({ message: err });
    } 

});

// UPDATE A POST
router.patch('/:linkId', async (req, res) => {
    try {
        const updatedMyLink = await MyLink.updateOne({ _id: req.params.linkId }, 
            {$set: {
                title: req.body.title,
                url: req.body.url,
                description: req.body.description,
                category: req.body.category,
                date: Date.now()
            }});
        res.json(updatedMyLink);
        console.log(`MyLink with title '${updatedMyLink.title}' updated`);
    } catch(err) {
        res.json({ message: err });
    }
});

// DELETE A POST
router.delete('/:linkId', async (req, res) => {
    try {
        const removedMyLink = await MyLink.deleteOne({ _id: req.params.linkId });
        res.json(removedMyLink);
        console.log(`MyLink with title '${removedMyLink.title}' updated`);
    } catch(err) {
        res.json({ message: err });
    } 
});

module.exports = router;