'use strict';

var express = require('express');
var Todo = require('../models/todo')

var router = express.Router();

router.get('/todos', function(req,res){
	Todo.find({}, function(err, todos){
		if(err){
			return console.log(err)
		}
		res.json({ todos: todos });
	})
	
})

// TODO: Add POST route to create new entries

router.post('/todos', function(req, res){
	var todo = req.body;
	Todo.create(todo, function(err, todo){
		if(err){
			return res.status(500).json({ error: err.message })
		}
		res.json({todo: todo, message: "Todo created!"});
	});
})

// TODO: Add PUT route to update existing entries
router.put('/todos/:id', function(req, res){
	var id = req.params.id;
	var todo = req.body;
	if(todo && todo._id !== id){
		return res.status(500).json({ error: err.message })
	}
	Todo.findOneAndUpdate(id, todo, {new: true}, function(err, todo){
		if(err){
			return res.status(500).json({ error: err.message })
		}
		res.json({todo: todo, message: "Todo updated!"});
	});
})

// TODO: Add DELETE route to delete entries

module.exports = router;
