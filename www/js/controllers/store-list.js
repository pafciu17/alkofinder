'use strict';

controllers.controller('StoreListController', function($scope, Stores, Map) {
    var self = this;
    Stores.getStores().then(function(stores) {
        self.stores = stores;
    });

    this.centerOn = function(store) {
        if (store && store.lat && store.lng) {
            Map.centerOn(store.lat, store.lng);
        }
    }

});