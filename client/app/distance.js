define(function() {

  // Calculate geo distance in kilometers.
  return function(a, b) {
    var radiansInKilometers = 6372.8;
    var degreesToRadians = Math.PI / 180;
    var a_lat = (a.lat || a[1] || 0) * degreesToRadians;
    var b_lat = (b.lat || b[1] || 0) * degreesToRadians;
    var d_lon = Math.abs((b.lon || b[0] || 0) - (a.lon || a[0] || 0)) * degreesToRadians;
    return radiansInKilometers * Math.atan2(Math.sqrt(Math.pow(Math.cos(b_lat) * Math.sin(d_lon), 2.0) + Math.pow(Math.cos(a_lat) * Math.sin(b_lat) - Math.sin(a_lat) * Math.cos(b_lat) * Math.cos(d_lon), 2.0)), Math.sin(a_lat) * Math.sin(b_lat) + Math.cos(a_lat) * Math.cos(b_lat) * Math.cos(d_lon));
  };

});
