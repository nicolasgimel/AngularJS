var PageController = function PageController($scope,MonService,$routeParams,$rootScope)
{
	$scope.connect = function(){
		console.log($scope.numeroPage);
		var promesse = MonService.getCurrentFilm($scope.numeroPage);

	    promesse.then(function(resp){
	        console.log(resp,"nouvelle page");
	        $scope.films = resp.results;
	        $rootScope.$broadcast("nouvellePage",resp);
	    })
	}
};