angular.module('videoPlaylist', ['ionic'])


.controller('videoPlaylistCtrl', ['$scope', 'videoPlaylistService', '$ionicLoading',
            function($scope, videoPlaylistService, $ionicLoading){
    $scope.getVideos = function(){
        if ($scope.searchVideos.length > 2) {
            $ionicLoading.show();
            videoPlaylistService.search($scope.searchVideos)
            .then(function(videos){
                $scope.videos = videos.data.items;
                $ionicLoading.hide();
            });
        }
    }
}])

.factory('videoPlaylistService', ['$http', function($http){
    return {
        search: function(search){
            var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=relevance&q=" +
                        search + "&type=video&key=AIzaSyBcKMfzAx7EHRSnWxU9T_AcwypAep1XS5A";
            return $http.get(url);
        }
    }
}])
