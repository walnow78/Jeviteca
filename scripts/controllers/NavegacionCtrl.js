angular.module("Jeviteca").controller("NavegacionCtrl",
    ["$scope", "$routeSegment", function($scope, $routeSegment){

    $scope.rutaEsAlbum = function(){
        return $routeSegment.startsWith("album");
    }

    $scope.rutaEsBanda = function(){
        return $routeSegment.startsWith("bands");
    }

    $scope.rutaEsGenero = function(){
        return $routeSegment.startsWith("genero")
    }

}]);
