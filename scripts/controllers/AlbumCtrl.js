angular.module("Jeviteca").controller("AlbumCtrl", ["$scope", "Albums", "$filter", "$location", function($scope, Albums, $filter, $location){

    $scope.albums = $filter("orderBy")(Albums.data, "title");

    $scope.query = {};
    $scope.queryBy = '$';

}]);