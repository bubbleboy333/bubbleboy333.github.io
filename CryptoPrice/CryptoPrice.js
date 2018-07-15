var app = angular.module('CryptoPrice', []);

app.controller('headerInfo',[ '$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.title = "CryptoPrice";
    $scope.results = [];

    // $scope.settings.decimals = 4;

    $http.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
    .then(function(response) {
        console.log(response.data);
        $scope.results = response.data;
    });
    $scope.results.name = "loading...";
}]);
