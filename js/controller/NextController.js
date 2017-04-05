var NextController = function NextController($scope,MonService,$routeParams)
{

	$scope.id = $routeParams.id
    var promesse = MonService.getNextFilm();

    promesse.then(function(resp){
        console.log(resp,"prochainement");
        $scope.films = resp.results;
    });

    $scope.$on("nouveauFilm",function(evt,listeFilm){
        $scope.films=listeFilm.results;  
    });
};