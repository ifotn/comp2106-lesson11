angular.module('TodoApp', [])
    .controller('TodoController', function($scope) {

        // initialize an empty todo list
        $scope.todos = [];

        // add a new item to the list using the variable name "taskInput"
        $scope.add = function() {
            // add the new todo to the list
          $scope.todos.push($scope.taskInput);
            console.log($scope.taskInput);

            // clear textbox
            $scope.taskInput = "";
        };

        // remove function
        $scope.delete = function() {
            if (window.confirm("Are you sure you want to delete this To Do item?")) {
                $scope.todos.splice(this.$index, 1);
            }
        };
    });