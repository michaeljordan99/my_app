function UserCtrl($scope) {
    
    $scope.user = {firstName: 'Miguel', lastName: 'Jordan'};

}

function UserRestCtrl($scope, $http) {
    
    $scope.user = {firstName: 'Miguel', lastName: 'Jordan'};

	delete $http.defaults.headers.common['X-Requested-With'];

    $http({ method: 'GET', url: 'http://localhost:8080/hello/mark' }).
	  success(function (data, status, headers, config) {
	  	$scope.user = data;
	  }).
	  error(function (data, status, headers, config) {
	  	alert('error');
	  });
}