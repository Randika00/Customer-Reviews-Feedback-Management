const router = require('express').Router();
let Feedback = require('../models/feedbackModel');



router.route('/').get((req, res) => {
Feedback.find()
.then(feedback => res.json(feedback))
.catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
const name = req.body.name;
const title = req.body.title;
const description = req.body.description;




const newFeedback = new Feedback({
    name,
    title,
    description,


});



newFeedback.save()
.then(() => res.json('Feedback added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Feedback.findById(req.params.id)
    .then(feedback => res.json(feedback))
    .catch(err => res.status(400).json('Error: ' + err));
    });
    
    
    
    router.route('/:id').delete((req, res) => {
        Feedback.findByIdAndDelete(req.params.id)
    .then(() => res.json('Feedback deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
    });
    
    
    
    
    router.route('/update/:id').post((req, res) => {
        Feedback.findById(req.params.id)
    .then(feedback => {
        feedback.name = req.body.name;
        feedback.title = req.body.title;
        feedback.description = req.body.description;
       
    
    feedback.save()
    .then(() => res.json('Feedback updated!'))
    .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
    });
    
    
    
    module.exports = router;