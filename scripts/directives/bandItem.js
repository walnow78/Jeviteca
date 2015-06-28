
angular.module("Jeviteca")
    .directive("bandItem", function(){
        return{
            restrict : "AE",
            replace : true,
            templateUrl :"views/BandItem.html",
            scope : {
                band : "="
            },
            link : function(scope){

            }
        };
    });
