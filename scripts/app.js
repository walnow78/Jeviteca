angular.module("Jeviteca", ["ngRoute", "route-segment", "view-segment"]);
angular.module("Jeviteca").config(["$routeSegmentProvider", "$routeProvider",
    function($routeSegmentProvider, $routeProvider){

    // Definición de los segmentos

    $routeSegmentProvider.when("/album", "album");
    $routeSegmentProvider.when("/bands", "bands");
    $routeSegmentProvider.when("/genres", "genres");
    $routeSegmentProvider.when("/album/:id/detail", "albumDetail");
    $routeSegmentProvider.when("/band/:id/detail", "bandDetail");

    // Ruta inexistente

    $routeProvider.otherwise({
       redirectTo : "/album"
    });


    // Defnición de la vista y el controlador.

    $routeSegmentProvider.segment("album", {
        controller: "AlbumCtrl",
        templateUrl: "views/Album.html",
        resolve : {
            Albums : ["AlbumsProvider", function(AlbumsProvider){
                return AlbumsProvider.getAlbums();
            }]
        }
    });

    $routeSegmentProvider.segment("bands", {
        controller: "BandsCtrl",
        templateUrl: "views/Bands.html",
        resolve : {
            Bands : ["BandsProvider", function(BandsProvider){
                return BandsProvider.getBands();

            }]
        }
    });

    $routeSegmentProvider.segment("genres", {
        controller: "GenresCtrl",
        templateUrl: "views/Genres.html",
        resolve : {
            Genres: ["GenresProvider", function (GenresProvider) {
                return GenresProvider.getGenres();
            }]
        }
    });

    $routeSegmentProvider.segment("albumDetail", {
        controller : "AlbumDetail",
        templateUrl : "views/AlbumDetail.html",
        resolve : {
            AlbumDetail : ["AlbumsProvider", "$routeParams", function (AlbumsProvider, $routeParams) {
                return AlbumsProvider.getAlbumById($routeParams.id);
            }]
        }
    });

    $routeSegmentProvider.segment("bandDetail", {
        controller : "BandDetail",
        templateUrl : "views/BandDetail.html",
        resolve : {
            BandDetail : ["BandsProvider", "$routeParams", function (BandsProvider, $routeParams) {
                return BandsProvider.getBandById($routeParams.id);
            }]
        }
    });

}]);
