angular
    .module("MonApplication",["ngRoute"])
    .controller("NextController",NextController)
    .controller("BestController",BestController)
    .controller("MainController",MainController)
    .controller("ActeurController",ActeurController)
    .controller("SearchController",SearchController)
    .controller("PageController",PageController)
    .service("MonService",MonService)
    .config(function($routeProvider,$locationProvider){
    	$locationProvider.hashPrefix('');
        $routeProvider
            .when("/",{
                templateUrl:"./main.html",
                controller : "MainController"
            })
            .when("/next",{
                templateUrl:"./next.html",
                controller : "NextController"
            })
            .when("/best",{
                templateUrl:"./best.html",
                controller : "BestController"
            })
            .when("/acteur",{
                templateUrl:"./acteur.html",
                controller : "ActeurController"
            })
            .otherwise({
                redirectTo:"/"
            })
    });