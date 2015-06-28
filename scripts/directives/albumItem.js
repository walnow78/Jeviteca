angular.module("Jeviteca")
    .directive("albumItem", function(){
    return{
        restrict : "AE",
        replace : true,
        templateUrl :"views/AlbumItem.html",
        scope : {
            album : "="
        },
        link : function(scope){

        }
    };
});

