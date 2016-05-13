'use strict';

angular.module("todoListApp")
.service('dataService', function($http){

	this.getTodos = function(callback) {
		$http.get('mocks/todos.json')
		.then(callback);	
	};

	this.deleteTodo = function(todo){
		console.log('The ' + todo.title + " todo has been deleted");
	}

	this.saveTodos = function(todos){
		console.log(todos.length + " todos have been saved!");	
	}
	
});
