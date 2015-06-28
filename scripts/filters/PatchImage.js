angular.module("Jeviteca").filter("PatchImage", function(){

    return function(image){

        return "resources/img/" + image;
    }

});