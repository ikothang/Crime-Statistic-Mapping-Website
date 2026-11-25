var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM DE',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'https://tile.openstreetmap.de/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors,<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_PoliceStations_0 = new ol.format.GeoJSON();
var features_PoliceStations_0 = format_PoliceStations_0.readFeatures(json_PoliceStations_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoliceStations_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PoliceStations_0.addFeatures(features_PoliceStations_0);var lyr_PoliceStations_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoliceStations_0, 
                style: style_PoliceStations_0,
                title: '<img src="styles/legend/PoliceStations_0.png" /> Police Stations'
            });

lyr_PoliceStations_0.setVisible(true);
var layersList = [baseLayer,lyr_PoliceStations_0];
lyr_PoliceStations_0.set('fieldAliases', {'Name': 'Name', 'District': 'District', 'State': 'State', 'No_phone': 'Phone Number', 'No_fax': 'Fax Number', 'emel': 'Emel', 'X': 'X', 'Y': 'Y', });
lyr_PoliceStations_0.set('fieldImages', {'Name': 'TextEdit', 'District': 'TextEdit', 'State': 'TextEdit', 'No_phone': 'TextEdit', 'No_fax': 'TextEdit', 'emel': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_PoliceStations_0.set('fieldLabels', {'Name': 'header label', 'District': 'header label', 'State': 'header label', 'No_phone': 'header label', 'No_fax': 'header label', 'emel': 'header label', });
lyr_PoliceStations_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});