'use strict';

services.service('Stores', function($q, $http) {

    var stores = [],
        urlToStoreBackend = 'http://pnie.eu:3001',
        fetchStorePromise;

    var sort = function(data) {
        return _.sortBy(data, function(item) {
            return item.Name;
        });
    };

    var fetchStores = function() {
        if (!fetchStorePromise) {
            fetchStorePromise = $http.get(urlToStoreBackend).then(function(response) {
                if (response && response.data) {
                    stores = sort(response.data)
                }
                fetchStorePromise = null;
                return stores;
            });
        }
        return fetchStorePromise;
    };

    this.getStores = function() {
        if (stores.length === 0) {
            return fetchStores();
        }
        return $q.when(stores);
    };

});