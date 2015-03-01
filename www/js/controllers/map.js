'use strict';

controllers.controller('MapController', function($scope, Stores) {
    var self = this;
    Stores.getStores().then(function(stores) {
        self.stores = stores;
    });
});