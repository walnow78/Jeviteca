angular.module("Jeviteca").controller("BandsCtrl", ["$scope", "Bands", "$filter", function($scope, Bands, $filter){

    $scope.bands = $filter("orderBy")(Bands.data, "name");

    $scope.query = {};
    $scope.queryBy = '$';

}]);