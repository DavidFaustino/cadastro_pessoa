myApp.controller('pessoaController', function($scope,$route,$routeParams,$http){
	$scope.getPessoas = function(){
		$http.get('/api/pessoas/').then(function(response){
			$scope.pessoas = response.data;
		});
	};
	$scope.showPessoa = function(){
		var id = $routeParams.id;
		$http.get('/api/pessoas/'+ id).then(function(response){
			$scope.pessoa = response.data;
		});
	};
	$scope.addPessoa = function(){
		//var id = $routeParams.id;
		$http.post('/api/pessoas/', $scope.pessoa).then(function(response){
			//$scope.Pessoa = response.data;
			window.location.href = '/';
		});
	};
	$scope.updatePessoa = function(){
		var id = $routeParams.id;
		$http.put('/api/pessoas/'+ id , $scope.pessoa).then(function(response){
			//$scope.Pessoa = response.data;
			window.location.href = '/';
		});
	};
	$scope.deletePessoa = function(id){
		var id = id;
		$http.delete('/api/pessoas/'+ id).then(function(response){
			$route.reload();
		});
	};
	
});