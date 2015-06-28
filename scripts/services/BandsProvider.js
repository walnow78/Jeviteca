angular.module("Jeviteca").service("BandsProvider", ["$http", "$q", "$filter",
    function ($http, $q, $filter) {

    this.getBands = function(){
        return $http.get("resources/data/bands.json")
    };

    this.getBandById = function(idBand){

        var defer = $q.defer();

        $http.get("resources/data/bands.json").then(function(data){

            var element = $filter("filter")(data.data, {"id" : idBand })[0];

            defer.resolve(element);

        });

        return defer.promise;

    };

}]);
