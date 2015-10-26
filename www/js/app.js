// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('videoPlaylist', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('videoPlaylistCtrl', ['$scope', 'videoPlaylistService', function($scope, videoPlaylistService){

}])

.factory('videoPlaylistService', ['$http', function($http){
    return {
        search: function(){
            var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=" +
                        search + "&type=video&key=AIzaSyBcKMfzAx7EHRSnWxU9T_AcwypAep1XS5A";

            $http.get("url")
            .then(function(videos){
                return videos;
            });
        }
    }


}])
