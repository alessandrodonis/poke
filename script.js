var pokemon= angular.module("pokemon", [])
 
pokemon.controller("pokedex", function($scope,$rootScope,$http){
	$http({
		method: "GET",
		url: "https:/pokeapi.co/api/v2/pokemon/25"
	}).then(function callbackSucces (y){
		console.log(y);
	})
})
