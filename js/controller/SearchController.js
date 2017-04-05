var SearchController = function SearchController($scope,MonService,$routeParams,$rootScope)
{
	$scope.connect = function(){
		console.log($scope.query);
		var promesse = MonService.getSearch($scope.query);

	    promesse.then(function(resp){
	        console.log(resp,"recherche");
	        $scope.films = resp.results;
	        $rootScope.$broadcast("nouveauFilm",resp);
	    })
	}
    
};