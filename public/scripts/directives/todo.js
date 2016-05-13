'use strict';

angular.module("todoListApp")
.directive('todo', function(){
	return {
		templateUrl: 'templates/todo.html',
		controller: 'todoCtrl',
		replace: true
	}
})
