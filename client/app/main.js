define([
  'lodash',
  'jquery',
  'backbone',
  'bacon',
  'esri/map',
  'app/distance'
], function(_, $, Backbone, Bacon, Map, distance) {

  $('#result').hide();

  var map = new Map('map', {
    basemap: 'streets',
    center: [ 11, 55 ],
    zoom: 3
  });

  var $mapClicks = Bacon.fromBinder(function(sink) {
    map.on('mouse-down', sink);
  }).map(function(event) {
    return map.toMap(event);
  }).map(function(point) {
    return {
      lat: point.getLatitude(),
      lng: point.getLongitude(),
    };
  });

  $mapClicks.bufferWithCount(2).map(function(points) {
    return distance.apply(null, points);
  }).onValue(function(distance) {
    $('#result').text('distance: ' + distance.toFixed(1) + ' km').fadeIn();
  });

});
