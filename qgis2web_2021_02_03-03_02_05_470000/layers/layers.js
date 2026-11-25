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
var format_TheftCases_0 = new ol.format.GeoJSON();
var features_TheftCases_0 = format_TheftCases_0.readFeatures(json_TheftCases_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TheftCases_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TheftCases_0.addFeatures(features_TheftCases_0);var lyr_TheftCases_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TheftCases_0, 
                style: style_TheftCases_0,
    title: 'Theft Cases<br />\
    <img src="styles/legend/TheftCases_0_0.png" />  444 - 2378 <br />\
    <img src="styles/legend/TheftCases_0_1.png" />  2378 - 4815 <br />\
    <img src="styles/legend/TheftCases_0_2.png" />  4815 - 10058 <br />\
    <img src="styles/legend/TheftCases_0_3.png" />  10058 - 18132 <br />'
        });var format_BurglaryCases_1 = new ol.format.GeoJSON();
var features_BurglaryCases_1 = format_BurglaryCases_1.readFeatures(json_BurglaryCases_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BurglaryCases_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BurglaryCases_1.addFeatures(features_BurglaryCases_1);var lyr_BurglaryCases_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BurglaryCases_1, 
                style: style_BurglaryCases_1,
    title: 'Burglary Cases<br />\
    <img src="styles/legend/BurglaryCases_1_0.png" />  85 - 544 <br />\
    <img src="styles/legend/BurglaryCases_1_1.png" />  544 - 1023 <br />\
    <img src="styles/legend/BurglaryCases_1_2.png" />  1023 - 1867 <br />\
    <img src="styles/legend/BurglaryCases_1_3.png" />  1867 - 5497 <br />'
        });var format_SnatchCases_2 = new ol.format.GeoJSON();
var features_SnatchCases_2 = format_SnatchCases_2.readFeatures(json_SnatchCases_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SnatchCases_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SnatchCases_2.addFeatures(features_SnatchCases_2);var lyr_SnatchCases_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SnatchCases_2, 
                style: style_SnatchCases_2,
    title: 'Snatch Cases<br />\
    <img src="styles/legend/SnatchCases_2_0.png" />  6 - 29 <br />\
    <img src="styles/legend/SnatchCases_2_1.png" />  29 - 99 <br />\
    <img src="styles/legend/SnatchCases_2_2.png" />  99 - 983 <br />\
    <img src="styles/legend/SnatchCases_2_3.png" />  983 - 1288 <br />'
        });var format_AssaultCases_3 = new ol.format.GeoJSON();
var features_AssaultCases_3 = format_AssaultCases_3.readFeatures(json_AssaultCases_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssaultCases_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AssaultCases_3.addFeatures(features_AssaultCases_3);var lyr_AssaultCases_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AssaultCases_3, 
                style: style_AssaultCases_3,
    title: 'Assault Cases<br />\
    <img src="styles/legend/AssaultCases_3_0.png" />  52 - 259 <br />\
    <img src="styles/legend/AssaultCases_3_1.png" />  259 - 414 <br />\
    <img src="styles/legend/AssaultCases_3_2.png" />  414 - 708 <br />\
    <img src="styles/legend/AssaultCases_3_3.png" />  708 - 1260 <br />'
        });var format_RapeCases_4 = new ol.format.GeoJSON();
var features_RapeCases_4 = format_RapeCases_4.readFeatures(json_RapeCases_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RapeCases_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RapeCases_4.addFeatures(features_RapeCases_4);var lyr_RapeCases_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RapeCases_4, 
                style: style_RapeCases_4,
    title: 'Rape Cases<br />\
    <img src="styles/legend/RapeCases_4_0.png" />  31 - 65 <br />\
    <img src="styles/legend/RapeCases_4_1.png" />  65 - 107 <br />\
    <img src="styles/legend/RapeCases_4_2.png" />  107 - 193 <br />\
    <img src="styles/legend/RapeCases_4_3.png" />  193 - 305 <br />'
        });var format_MurderCrimes_5 = new ol.format.GeoJSON();
var features_MurderCrimes_5 = format_MurderCrimes_5.readFeatures(json_MurderCrimes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurderCrimes_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MurderCrimes_5.addFeatures(features_MurderCrimes_5);var lyr_MurderCrimes_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MurderCrimes_5, 
                style: style_MurderCrimes_5,
    title: 'Murder Crimes<br />\
    <img src="styles/legend/MurderCrimes_5_0.png" />  0 - 17 <br />\
    <img src="styles/legend/MurderCrimes_5_1.png" />  17 - 42 <br />\
    <img src="styles/legend/MurderCrimes_5_2.png" />  42 - 70 <br />\
    <img src="styles/legend/MurderCrimes_5_3.png" />  70 - 105 <br />'
        });var format_TotalCrimes_6 = new ol.format.GeoJSON();
var features_TotalCrimes_6 = format_TotalCrimes_6.readFeatures(json_TotalCrimes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TotalCrimes_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TotalCrimes_6.addFeatures(features_TotalCrimes_6);var lyr_TotalCrimes_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TotalCrimes_6, 
                style: style_TotalCrimes_6,
    title: 'Total Crimes<br />\
    <img src="styles/legend/TotalCrimes_6_0.png" />  655 - 3777 <br />\
    <img src="styles/legend/TotalCrimes_6_1.png" />  3777 - 7440 <br />\
    <img src="styles/legend/TotalCrimes_6_2.png" />  7440 - 16989 <br />\
    <img src="styles/legend/TotalCrimes_6_3.png" />  16989 - 31222 <br />'
        });var format_PoliceStations_7 = new ol.format.GeoJSON();
var features_PoliceStations_7 = format_PoliceStations_7.readFeatures(json_PoliceStations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoliceStations_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PoliceStations_7.addFeatures(features_PoliceStations_7);var lyr_PoliceStations_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoliceStations_7, 
                style: style_PoliceStations_7,
                title: '<img src="styles/legend/PoliceStations_7.png" /> Police Stations'
            });

lyr_TheftCases_0.setVisible(true);lyr_BurglaryCases_1.setVisible(true);lyr_SnatchCases_2.setVisible(true);lyr_AssaultCases_3.setVisible(true);lyr_RapeCases_4.setVisible(true);lyr_MurderCrimes_5.setVisible(true);lyr_TotalCrimes_6.setVisible(true);lyr_PoliceStations_7.setVisible(true);
var layersList = [baseLayer,lyr_TheftCases_0,lyr_BurglaryCases_1,lyr_SnatchCases_2,lyr_AssaultCases_3,lyr_RapeCases_4,lyr_MurderCrimes_5,lyr_TotalCrimes_6,lyr_PoliceStations_7];
lyr_TheftCases_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'State': 'State', 'bunuh': 'bunuh', 'rogol': 'rogol', 's_kwn_sjt': 's_kwn_sjt', 's_kwn_xsjt': 's_kwn_xsjt', 's_sjt': 's_sjt', 's_xsjt': 's_xsjt', 'cedera': 'cedera', 'curi': 'curi', 'curi_keta': 'curi_keta', 'curi_moto': 'curi_moto', 'curi_berat': 'curi_berat', 'curi_ragut': 'curi_ragut', 'curi_pchrm': 'curi_pchrm', 'total': 'total', 'curi_1': 'Total Cases', 'samun': 'samun', 'pop_my': 'pop_my', 'pop_den': 'pop_den', 'area_sq': 'area_sq', });
lyr_BurglaryCases_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'State': 'State', 'bunuh': 'bunuh', 'rogol': 'rogol', 's_kwn_sjt': 's_kwn_sjt', 's_kwn_xsjt': 's_kwn_xsjt', 's_sjt': 's_sjt', 's_xsjt': 's_xsjt', 'cedera': 'cedera', 'curi': 'curi', 'curi_keta': 'curi_keta', 'curi_moto': 'curi_moto', 'curi_berat': 'curi_berat', 'curi_ragut': 'curi_ragut', 'curi_pchrm': 'Total Cases', 'total': 'total', 'curi_1': 'curi_1', 'samun': 'samun', 'pop_my': 'pop_my', 'pop_den': 'pop_den', 'area_sq': 'area_sq', });
lyr_SnatchCases_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'State': 'State', 'bunuh': 'bunuh', 'rogol': 'rogol', 's_kwn_sjt': 's_kwn_sjt', 's_kwn_xsjt': 's_kwn_xsjt', 's_sjt': 's_sjt', 's_xsjt': 's_xsjt', 'cedera': 'cedera', 'curi': 'curi', 'curi_keta': 'curi_keta', 'curi_moto': 'curi_moto', 'curi_berat': 'curi_berat', 'curi_ragut': 'Total Cases', 'curi_pchrm': 'curi_pchrm', 'total': 'total', 'curi_1': 'curi_1', 'samun': 'samun', 'pop_my': 'pop_my', 'pop_den': 'pop_den', 'area_sq': 'area_sq', });
lyr_AssaultCases_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'State': 'State', 'bunuh': 'bunuh', 'rogol': 'rogol', 's_kwn_sjt': 's_kwn_sjt', 's_kwn_xsjt': 's_kwn_xsjt', 's_sjt': 's_sjt', 's_xsjt': 's_xsjt', 'cedera': 'Total Cases', 'curi': 'curi', 'curi_keta': 'curi_keta', 'curi_moto': 'curi_moto', 'curi_berat': 'curi_berat', 'curi_ragut': 'curi_ragut', 'curi_pchrm': 'curi_pchrm', 'total': 'total', 'curi_1': 'curi_1', 'samun': 'samun', 'pop_my': 'pop_my', 'pop_den': 'pop_den', 'area_sq': 'area_sq', });
lyr_RapeCases_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'State': 'State', 'bunuh': 'bunuh', 'rogol': 'Total Cases', 's_kwn_sjt': 's_kwn_sjt', 's_kwn_xsjt': 's_kwn_xsjt', 's_sjt': 's_sjt', 's_xsjt': 's_xsjt', 'cedera': 'cedera', 'curi': 'curi', 'curi_keta': 'curi_keta', 'curi_moto': 'curi_moto', 'curi_berat': 'curi_berat', 'curi_ragut': 'curi_ragut', 'curi_pchrm': 'curi_pchrm', 'total': 'total', 'curi_1': 'curi_1', 'samun': 'samun', 'pop_my': 'pop_my', 'pop_den': 'pop_den', 'area_sq': 'area_sq', });
lyr_MurderCrimes_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'State': 'State', 'bunuh': 'Total Cases', 'rogol': 'rogol', 's_kwn_sjt': 's_kwn_sjt', 's_kwn_xsjt': 's_kwn_xsjt', 's_sjt': 's_sjt', 's_xsjt': 's_xsjt', 'cedera': 'cedera', 'curi': 'curi', 'curi_keta': 'curi_keta', 'curi_moto': 'curi_moto', 'curi_berat': 'curi_berat', 'curi_ragut': 'curi_ragut', 'curi_pchrm': 'curi_pchrm', 'total': 'total', 'curi_1': 'curi_1', 'samun': 'samun', 'pop_my': 'pop_my', 'pop_den': 'pop_den', 'area_sq': 'area_sq', });
lyr_TotalCrimes_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'ADM1_EN': 'State', 'ADM1_PCODE': 'ADM1_PCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'State': 'State', 'bunuh': 'bunuh', 'rogol': 'rogol', 's_kwn_sjt': 's_kwn_sjt', 's_kwn_xsjt': 's_kwn_xsjt', 's_sjt': 's_sjt', 's_xsjt': 's_xsjt', 'cedera': 'cedera', 'curi': 'curi', 'curi_keta': 'curi_keta', 'curi_moto': 'curi_moto', 'curi_berat': 'curi_berat', 'curi_ragut': 'curi_ragut', 'curi_pchrm': 'curi_pchrm', 'total': 'Total Cases', 'curi_1': 'curi_1', 'samun': 'samun', 'pop_my': 'pop_my', 'pop_den': 'pop_den', 'area_sq': 'area_sq', });
lyr_PoliceStations_7.set('fieldAliases', {'Name': 'Name', 'District': 'District', 'State': 'State', 'No_phone': 'No_phone', 'No_fax': 'No_fax', 'emel': 'emel', 'X': 'X', 'Y': 'Y', });
lyr_TheftCases_0.set('fieldImages', {'OBJECTID': 'Hidden', 'ADM0_EN': 'Hidden', 'ADM0_PCODE': 'Hidden', 'ADM1_EN': 'Hidden', 'ADM1_PCODE': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'State': 'Hidden', 'bunuh': 'Hidden', 'rogol': 'Hidden', 's_kwn_sjt': 'Hidden', 's_kwn_xsjt': 'Hidden', 's_sjt': 'Hidden', 's_xsjt': 'Hidden', 'cedera': 'Hidden', 'curi': 'Hidden', 'curi_keta': 'Hidden', 'curi_moto': 'Hidden', 'curi_berat': 'Hidden', 'curi_ragut': 'Hidden', 'curi_pchrm': 'Hidden', 'total': 'Hidden', 'curi_1': 'TextEdit', 'samun': 'Hidden', 'pop_my': 'Hidden', 'pop_den': 'Hidden', 'area_sq': 'Hidden', });
lyr_BurglaryCases_1.set('fieldImages', {'OBJECTID': 'Hidden', 'ADM0_EN': 'Hidden', 'ADM0_PCODE': 'Hidden', 'ADM1_EN': 'Hidden', 'ADM1_PCODE': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'State': 'Hidden', 'bunuh': 'Hidden', 'rogol': 'Hidden', 's_kwn_sjt': 'Hidden', 's_kwn_xsjt': 'Hidden', 's_sjt': 'Hidden', 's_xsjt': 'Hidden', 'cedera': 'Hidden', 'curi': 'Hidden', 'curi_keta': 'Hidden', 'curi_moto': 'Hidden', 'curi_berat': 'Hidden', 'curi_ragut': 'Hidden', 'curi_pchrm': 'TextEdit', 'total': 'Hidden', 'curi_1': 'Hidden', 'samun': 'Hidden', 'pop_my': 'Hidden', 'pop_den': 'Hidden', 'area_sq': 'Hidden', });
lyr_SnatchCases_2.set('fieldImages', {'OBJECTID': 'Hidden', 'ADM0_EN': 'Hidden', 'ADM0_PCODE': 'Hidden', 'ADM1_EN': 'Hidden', 'ADM1_PCODE': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'State': 'Hidden', 'bunuh': 'Hidden', 'rogol': 'Hidden', 's_kwn_sjt': 'Hidden', 's_kwn_xsjt': 'Hidden', 's_sjt': 'Hidden', 's_xsjt': 'Hidden', 'cedera': 'Hidden', 'curi': 'Hidden', 'curi_keta': 'Hidden', 'curi_moto': 'Hidden', 'curi_berat': 'Hidden', 'curi_ragut': 'TextEdit', 'curi_pchrm': 'Hidden', 'total': 'Hidden', 'curi_1': 'Hidden', 'samun': 'Hidden', 'pop_my': 'Hidden', 'pop_den': 'Hidden', 'area_sq': 'Hidden', });
lyr_AssaultCases_3.set('fieldImages', {'OBJECTID': 'Hidden', 'ADM0_EN': 'Hidden', 'ADM0_PCODE': 'Hidden', 'ADM1_EN': 'Hidden', 'ADM1_PCODE': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'State': 'Hidden', 'bunuh': 'Hidden', 'rogol': 'Hidden', 's_kwn_sjt': 'Hidden', 's_kwn_xsjt': 'Hidden', 's_sjt': 'Hidden', 's_xsjt': 'Hidden', 'cedera': 'TextEdit', 'curi': 'Hidden', 'curi_keta': 'Hidden', 'curi_moto': 'Hidden', 'curi_berat': 'Hidden', 'curi_ragut': 'Hidden', 'curi_pchrm': 'Hidden', 'total': 'Hidden', 'curi_1': 'Hidden', 'samun': 'Hidden', 'pop_my': 'Hidden', 'pop_den': 'Hidden', 'area_sq': 'Hidden', });
lyr_RapeCases_4.set('fieldImages', {'OBJECTID': 'Hidden', 'ADM0_EN': 'Hidden', 'ADM0_PCODE': 'Hidden', 'ADM1_EN': 'Hidden', 'ADM1_PCODE': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'State': 'Hidden', 'bunuh': 'Hidden', 'rogol': 'TextEdit', 's_kwn_sjt': 'Hidden', 's_kwn_xsjt': 'Hidden', 's_sjt': 'Hidden', 's_xsjt': 'Hidden', 'cedera': 'Hidden', 'curi': 'Hidden', 'curi_keta': 'Hidden', 'curi_moto': 'Hidden', 'curi_berat': 'Hidden', 'curi_ragut': 'Hidden', 'curi_pchrm': 'Hidden', 'total': 'Hidden', 'curi_1': 'Hidden', 'samun': 'Hidden', 'pop_my': 'Hidden', 'pop_den': 'Hidden', 'area_sq': 'Hidden', });
lyr_MurderCrimes_5.set('fieldImages', {'OBJECTID': 'Hidden', 'ADM0_EN': 'Hidden', 'ADM0_PCODE': 'Hidden', 'ADM1_EN': 'Hidden', 'ADM1_PCODE': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'State': 'Hidden', 'bunuh': 'TextEdit', 'rogol': 'Hidden', 's_kwn_sjt': 'Hidden', 's_kwn_xsjt': 'Hidden', 's_sjt': 'Hidden', 's_xsjt': 'Hidden', 'cedera': 'Hidden', 'curi': 'Hidden', 'curi_keta': 'Hidden', 'curi_moto': 'Hidden', 'curi_berat': 'Hidden', 'curi_ragut': 'Hidden', 'curi_pchrm': 'Hidden', 'total': 'Hidden', 'curi_1': 'Hidden', 'samun': 'Hidden', 'pop_my': 'Hidden', 'pop_den': 'Hidden', 'area_sq': 'Hidden', });
lyr_TotalCrimes_6.set('fieldImages', {'OBJECTID': 'Hidden', 'ADM0_EN': 'Hidden', 'ADM0_PCODE': 'Photo', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'State': 'Hidden', 'bunuh': 'Hidden', 'rogol': 'Hidden', 's_kwn_sjt': 'Hidden', 's_kwn_xsjt': 'Hidden', 's_sjt': 'Hidden', 's_xsjt': 'Hidden', 'cedera': 'Hidden', 'curi': 'Hidden', 'curi_keta': 'Hidden', 'curi_moto': 'Hidden', 'curi_berat': 'Hidden', 'curi_ragut': 'Hidden', 'curi_pchrm': 'Hidden', 'total': 'TextEdit', 'curi_1': 'Hidden', 'samun': 'Hidden', 'pop_my': 'Hidden', 'pop_den': 'Hidden', 'area_sq': 'Hidden', });
lyr_PoliceStations_7.set('fieldImages', {'Name': 'TextEdit', 'District': 'TextEdit', 'State': 'TextEdit', 'No_phone': 'TextEdit', 'No_fax': 'TextEdit', 'emel': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_TheftCases_0.set('fieldLabels', {'curi_1': 'header label', });
lyr_BurglaryCases_1.set('fieldLabels', {'curi_pchrm': 'header label', });
lyr_SnatchCases_2.set('fieldLabels', {'curi_ragut': 'header label', });
lyr_AssaultCases_3.set('fieldLabels', {'cedera': 'header label', });
lyr_RapeCases_4.set('fieldLabels', {'rogol': 'header label', });
lyr_MurderCrimes_5.set('fieldLabels', {'bunuh': 'header label', });
lyr_TotalCrimes_6.set('fieldLabels', {'ADM0_PCODE': 'no label', 'ADM1_EN': 'no label', 'total': 'header label', });
lyr_PoliceStations_7.set('fieldLabels', {'Name': 'header label', 'District': 'header label', 'State': 'header label', 'No_phone': 'header label', 'No_fax': 'header label', 'emel': 'header label', });
lyr_PoliceStations_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});