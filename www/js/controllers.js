angular.module('AlkoFinder.controllers', [])

.controller('StoreListCtrl', function($scope) {

})
.controller('PlaylistsCtrl', function($scope, Stores) {
  $scope.stores = Stores.getStores();
});
