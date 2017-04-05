var BestController = function BestController($scope,MonService,$routeParams)
{

	$scope.id = $routeParams.id
    var promesse = MonService.getBestFilm();

    promesse.then(function(resp){
        console.log(resp,"meilleur film");
        $scope.films = resp.results;
    });
    $scope.$on("nouveauFilm",function(evt,listeFilm){
        $scope.films=listeFilm.results;  
    });
};