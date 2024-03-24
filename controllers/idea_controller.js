const ideas = require('../models/ideas_model')

exports.geAllIdeas = (req,res) =>{
    res.status(200).send(ideas)
}