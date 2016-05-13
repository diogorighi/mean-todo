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

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to delete entries

module.exports = router;
