webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);
	angular.module("todoListApp", []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);



/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

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
			dataService.saveTodos(filteredTodos)
			.finally($scope.resetTodoState);
		}

		$scope.resetTodoState = function(){
			$scope.todos.forEach(function(todo){
				todo.edited = false;
			})
		}

	});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.directive('todo', function (){
		return {
			templateUrl: 'templates/todo.html',
			controller: 'todoCtrl',
			replace: true
		}
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.service('dataService', function($http, $q){

		this.getTodos = function(callback) {
			$http.get('api/todos')
			.then(callback);	
		};

		this.deleteTodo = function(todo){
			console.log('The ' + todo.name + " todo has been deleted");
		}

		this.saveTodos = function(todos){
			var queue = [];
			todos.forEach(function(todo){
				var request;

				if(!todo._id){
					request = $http.post('/api/todos', todo);
				} else {
					request = $http.put('/api/todos/' + todo._id, todo).then(function(result){
						todo = result.data.todo;
						return todo;
					});
				}

				queue.push(request);
			});
			return $q.all(queue).then(function(results){
				console.log("Saved " + todos.length + " todos to database!");
			})

		}
		
	});


/***/ }
]);