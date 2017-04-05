var MonService = function MonService($http,$q)
{
	this.getBestFilm = function(){
        var async = $q.defer();
        $http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=27aefb109ee575d908c3e4798b528e2a&language=fr")
            .then(function(body){
                console.log(body.data);
                async.resolve(body.data);
            });
        return async.promise;
    }
    this.getNextFilm = function(){
        var async = $q.defer();
        $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=27aefb109ee575d908c3e4798b528e2a&language=fr")
            .then(function(body){
                console.log(body.data);
                async.resolve(body.data);
            });
        return async.promise;
    }
    this.getCurrentFilm = function(numeroPage){
        var async = $q.defer();
        $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=27aefb109ee575d908c3e4798b528e2a&language=fr&page="+numeroPage)
            .then(function(body){
                console.log(body.data);
                async.resolve(body.data);
            });
        return async.promise;
    }
    this.getActeur = function(){
        var async = $q.defer();
        $http.get("https://api.themoviedb.org/3/person/popular?api_key=27aefb109ee575d908c3e4798b528e2a&language=fr")
            .then(function(body){
                console.log(body.data);
                async.resolve(body.data);
            });
        return async.promise;
    }
    this.getSearch = function(query){
        var async = $q.defer();
        $http.get("https://api.themoviedb.org/3/search/movie?api_key=27aefb109ee575d908c3e4798b528e2a&language=fr&query="+query)
            .then(function(body){
                console.log(body.data);
                async.resolve(body.data);
            });
        return async.promise;
    }
    
}