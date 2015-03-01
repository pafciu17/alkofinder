'use strict';

controllers.controller('StoreListController', function($scope, Stores) {
    var self = this;
    Stores.getStores().then(function(stores) {
        self.stores = stores;
    });
});