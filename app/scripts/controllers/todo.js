var angular = require('angular');

angular.module('todoListApp')
.controller('todoCtrl', function ($scope, dataService){

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

});
