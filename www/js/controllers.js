angular.module('AlkoFinder.controllers', [])
    .controller('StoreListCtrl', function($scope, Stores) {
        Stores.getStores().then(function(stores) {
            $scope.stores = stores;
        });
    });