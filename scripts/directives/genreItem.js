
angular.module("Jeviteca")
    .directive("genreItem", function(){
        return{
            restrict : "AE",
            replace : true,
            templateUrl :"views/GenreItem.html",
            scope : {
                genre : "="
            },
            link : function(scope){

            }
        };
    });