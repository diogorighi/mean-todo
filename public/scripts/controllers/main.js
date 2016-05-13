'use strict';

angular.module("todoListApp")
.controller('mainCtrl', function($scope, dataService){

	$scope.addTodo = function(){
		var todo = {
			title: "This is the new todo!"
		};
		$scope.todos.unshift(todo);
	}

	dataService.getTodos(function(response){
		$scope.todos = response.data;
	});

	$scope.deleteTodo = function(todo){
		dataService.deleteTodo(todo);
		$scope.todos.splice($scope.todos.indexOf(todo), 1);
	}

	$scope.saveTodos = function(){
		var filteredTodos = $scope.todos.filter(function(todo){
			if(todo.edited){
				return todo;
			}
		});
		dataService.saveTodos(filteredTodos);
	}

})
