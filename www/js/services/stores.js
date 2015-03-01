'use strict';

services.service('Stores', function($q, $http) {
    var stores = [
        { title: 'Reggae', id: 1, lat: 37.779, lon: -122.3892},
        { title: 'Reggae', id: 1, lat: 37.759, lon: -122.3842},
        { title: 'Reggae', id: 1, lat: 37.739, lon: -122.2422},
        { title: 'Reggae', id: 1, lat: 37.839, lon: -122.2022},
        { title: 'Reggae', id: 1, lat: 37.939, lon: -122.1822},
    ];

    this.getStores = function() {
        var deferred = $q.defer();
        $http.get('http://pnie.eu:3001').then(function(response) {
            console.log(response.data[0]);
            deferred.resolve(response.data);
        });
        return deferred.promise;
    };
});