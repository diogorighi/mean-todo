'use strict';

var Todo = require('./models/todo');

var todosArr = [
	"Estudar Javascript",
	"Estudar AngularJS",
	"Estudar NodeJS",
	"Estudar Express"
];

todosArr.forEach(function(todo, index){
	Todo.find({ name: todo }, function(err, todos){
		if(!err && !todos.length){
			Todo.create({ name: todo, completed: false })
		}
	});
});
