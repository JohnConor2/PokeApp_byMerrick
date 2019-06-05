// Write your code here
var Pokemon = angular.module("Pokemon",[])

Pokemon.controller("ListadoPokemon",function($scope, $rootScope, $http){
	$scope.Pokedex=[];
	
	for (var x=1;x<=800;x++){
		$http({
		method : "GET",
		url : "https://pokeapi.co/api/v2/pokemon/"+x
	}).then(function Datos(P){
		$scope.Pokedex.push(P)
		console.log(P);
	})
	}
	


})


