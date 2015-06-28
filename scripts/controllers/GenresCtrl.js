angular.module("Jeviteca").controller("GenresCtrl", ["$scope", "Genres", "$filter", function($scope, Genres, $filter){

    $scope.genres = $filter("orderBy")(Genres.data, "name");

}]);