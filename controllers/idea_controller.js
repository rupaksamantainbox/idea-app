const ideas = require('../models/ideas_model')

let id = 3

exports.geAllIdeas = (req,res) =>{
    //sending data and status
    res.status(200).send(ideas)
}

exports.getIdeaBasedOnId = (req,res) =>{
    //getting path params from req
    idea_id = req.params.id

    if(ideas[idea_id]){
        //sending data and status
        res.status(200).send(ideas[idea_id])
    }else{
        //sending message and status
        res.status(404).send({
            message : "Idea not found"
        })
    }
}

exports.createIdea = (req,res) =>{
    //Reading request body
    idea_obj = req.body
    id++
    idea_obj['id'] = id
    ideas[id] = idea_obj

    //sending data and status
    res.status(201).send(ideas)

}

exports.updateIdea = (req,res) => {
    //read the idea id
    idea_id = req.params.id

    if(ideas[idea_id]){
        idea_obj = req.body
        ideas[idea_id] = idea_obj
        res.status(200).send(idea_obj)
    }else{
        return res.status(404).send({
            message : "Idea id is not found"
        })
    }
}

exports.deleteIdea = (req,res) => {
 
    idea_id = req.params.id

    if(idea_id){
        delete ideas[idea_id]
        res.status(200).send({
            message : "Updated Successfully"
        })
    }else{
        return res.status(404).send({
            message : "Idea id is not found"
        })
    }
}