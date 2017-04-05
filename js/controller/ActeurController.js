var ActeurController = function ActeurController($scope,MonService,$routeParams)
{

	$scope.id = $routeParams.id
    var promesse = MonService.getActeur();

    promesse.then(function(resp){
        console.log(resp,"acteur");
        $scope.acteurs = resp.results;
        console.log(resp.results.know_for);
    })
};