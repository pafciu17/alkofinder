'use strict';

services.service('Map', function() {

    var map = document.querySelector('google-map');

    this.centerOn = function(lat, lng) {
        map.latitude = lat;
        map.longitude = lng;
    };

});