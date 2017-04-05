var MainController = function MainController($scope,MonService,$routeParams)
{
   
    $scope.id = $routeParams.id
    var promesse = MonService.getCurrentFilm(1);

    promesse.then(function(resp){
        console.log(resp,"actuellement");
        $scope.films = resp.results;
        $scope.page = resp.page;
        $scope.total_pages = resp.total_pages;
        //console.log(resp.page)
    })

    $scope.$on("nouveauFilm",function(evt,listeFilm){
        $scope.films=listeFilm.results;
        $scope.page = listeFilm.page;
        $scope.total_pages = listeFilm.total_pages;
    });
    $scope.$on("nouvellePage",function(evt,listeFilm){
        $scope.films=listeFilm.results;
        $scope.page = listeFilm.page;
        $scope.total_pages = listeFilm.total_pages; 
    });
};