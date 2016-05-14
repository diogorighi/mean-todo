var angular = require('angular');

angular.module('todoListApp')
.controller('mainCtrl', function( $scope, dataService) {

	$scope.addTodo = function(){
		var todo = {
			name: "This is the new todo!",
			completed: false
		};
		$scope.todos.unshift(todo);
	}

	dataService.getTodos(function(response){
		$scope.todos = response.data.todos;
	});

});
