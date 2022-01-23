var mymap = L.map('mapid').setView([38.646787614421264, -90.28334512503605], 12.75);
//https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
//'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
//https://wiki.openstreetmap.org/wiki/Tile_servers
L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([38.656634379608526, -90.30849288878507]).addTo(mymap);

marker.bindPopup("<b>U-City Grill</b>").openPopup();

var marker = L.marker([38.62726595439025, -90.25658782510452]).addTo(mymap);

marker.bindPopup("<b>Sauce on the Side</b>").openPopup();

var marker = L.marker([38.62854067996889, -90.24982494694196]).addTo(mymap);

marker.bindPopup("<b>Seoul Taco</b>").openPopup();


var marker = L.marker([38.64896674053386, -90.33263195994947]).addTo(mymap);

marker.bindPopup("<b>801 Chophouse</b>").openPopup();

var marker = L.marker([38.617954011954346, -90.27347729738423]).addTo(mymap);

marker.bindPopup("<b>Charlie Gitto's on the Hill</b>").openPopup();
