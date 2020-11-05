var wms_layers = [];


        var lyr_googlesatellite_0 = new ol.layer.Tile({
            'title': 'google satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_beheerbestek_vlakken_1 = new ol.format.GeoJSON();
var features_beheerbestek_vlakken_1 = format_beheerbestek_vlakken_1.readFeatures(json_beheerbestek_vlakken_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beheerbestek_vlakken_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beheerbestek_vlakken_1.addFeatures(features_beheerbestek_vlakken_1);
var lyr_beheerbestek_vlakken_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_beheerbestek_vlakken_1, 
                style: style_beheerbestek_vlakken_1,
                interactive: true,
                title: '<img src="styles/legend/beheerbestek_vlakken_1.png" /> beheerbestek_vlakken'
            });
var format_transportlijnen_2 = new ol.format.GeoJSON();
var features_transportlijnen_2 = format_transportlijnen_2.readFeatures(json_transportlijnen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transportlijnen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_transportlijnen_2.addFeatures(features_transportlijnen_2);
var lyr_transportlijnen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_transportlijnen_2, 
                style: style_transportlijnen_2,
                interactive: true,
                title: '<img src="styles/legend/transportlijnen_2.png" /> transportlijnen'
            });
var format_afvoer_hopen_depots_3 = new ol.format.GeoJSON();
var features_afvoer_hopen_depots_3 = format_afvoer_hopen_depots_3.readFeatures(json_afvoer_hopen_depots_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_afvoer_hopen_depots_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_afvoer_hopen_depots_3.addFeatures(features_afvoer_hopen_depots_3);
var lyr_afvoer_hopen_depots_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_afvoer_hopen_depots_3, 
                style: style_afvoer_hopen_depots_3,
                interactive: true,
                title: '<img src="styles/legend/afvoer_hopen_depots_3.png" /> afvoer_hopen_depots'
            });
var format_pachtpercelen_4 = new ol.format.GeoJSON();
var features_pachtpercelen_4 = format_pachtpercelen_4.readFeatures(json_pachtpercelen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pachtpercelen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pachtpercelen_4.addFeatures(features_pachtpercelen_4);
var lyr_pachtpercelen_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pachtpercelen_4, 
                style: style_pachtpercelen_4,
                interactive: true,
    title: 'pachtpercelen<br />\
    <img src="styles/legend/pachtpercelen_4_0.png" /> Jansen, W.J.N.<br />\
    <img src="styles/legend/pachtpercelen_4_1.png" /> Kemp, W.J.B.<br />\
    <img src="styles/legend/pachtpercelen_4_2.png" /> Kreuger, H.<br />\
    <img src="styles/legend/pachtpercelen_4_3.png" /> Lotgering, M.<br />\
    <img src="styles/legend/pachtpercelen_4_4.png" /> Rijn, T.J.A. van<br />\
    <img src="styles/legend/pachtpercelen_4_5.png" /> Vaart, W.C. van der<br />\
    <img src="styles/legend/pachtpercelen_4_6.png" /> Zeldenrijk, J.<br />'
        });
var format_VPNPboeren_5 = new ol.format.GeoJSON();
var features_VPNPboeren_5 = format_VPNPboeren_5.readFeatures(json_VPNPboeren_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VPNPboeren_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VPNPboeren_5.addFeatures(features_VPNPboeren_5);
var lyr_VPNPboeren_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VPNPboeren_5, 
                style: style_VPNPboeren_5,
                interactive: true,
                title: '<img src="styles/legend/VPNPboeren_5.png" /> VPNP boeren'
            });
var format_Bokashihopen_Wijland_6 = new ol.format.GeoJSON();
var features_Bokashihopen_Wijland_6 = format_Bokashihopen_Wijland_6.readFeatures(json_Bokashihopen_Wijland_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bokashihopen_Wijland_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bokashihopen_Wijland_6.addFeatures(features_Bokashihopen_Wijland_6);
var lyr_Bokashihopen_Wijland_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bokashihopen_Wijland_6, 
                style: style_Bokashihopen_Wijland_6,
                interactive: true,
                title: '<img src="styles/legend/Bokashihopen_Wijland_6.png" /> Bokashihopen_Wij.land'
            });
var format_Bodemtraject_analysepercelen_NM_7 = new ol.format.GeoJSON();
var features_Bodemtraject_analysepercelen_NM_7 = format_Bodemtraject_analysepercelen_NM_7.readFeatures(json_Bodemtraject_analysepercelen_NM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bodemtraject_analysepercelen_NM_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bodemtraject_analysepercelen_NM_7.addFeatures(features_Bodemtraject_analysepercelen_NM_7);
var lyr_Bodemtraject_analysepercelen_NM_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bodemtraject_analysepercelen_NM_7, 
                style: style_Bodemtraject_analysepercelen_NM_7,
                interactive: true,
                title: '<img src="styles/legend/Bodemtraject_analysepercelen_NM_7.png" /> Bodemtraject_analysepercelen_NM'
            });
var group_Bemonstering = new ol.layer.Group({
                                layers: [lyr_Bodemtraject_analysepercelen_NM_7,],
                                title: "Bemonstering"});
var group_Bokashihopen = new ol.layer.Group({
                                layers: [lyr_Bokashihopen_Wijland_6,],
                                title: "Bokashihopen"});
var group_NMboeren = new ol.layer.Group({
                                layers: [lyr_pachtpercelen_4,lyr_VPNPboeren_5,],
                                title: "NM boeren"});
var group_Maaibestek_overig = new ol.layer.Group({
                                layers: [lyr_transportlijnen_2,lyr_afvoer_hopen_depots_3,],
                                title: "Maaibestek_overig"});
var group_Maaibestek = new ol.layer.Group({
                                layers: [lyr_beheerbestek_vlakken_1,],
                                title: "Maaibestek"});
var group_luchtfoto = new ol.layer.Group({
                                layers: [lyr_googlesatellite_0,],
                                title: "luchtfoto"});

lyr_googlesatellite_0.setVisible(true);lyr_beheerbestek_vlakken_1.setVisible(true);lyr_transportlijnen_2.setVisible(true);lyr_afvoer_hopen_depots_3.setVisible(true);lyr_pachtpercelen_4.setVisible(true);lyr_VPNPboeren_5.setVisible(true);lyr_Bokashihopen_Wijland_6.setVisible(true);lyr_Bodemtraject_analysepercelen_NM_7.setVisible(true);
var layersList = [group_luchtfoto,group_Maaibestek,group_Maaibestek_overig,group_NMboeren,group_Bokashihopen,group_Bemonstering];
lyr_beheerbestek_vlakken_1.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'bth_leg': 'bth_leg', 'opp_ha': 'opp_ha', 'nm': 'nm', 'aannemer': 'aannemer', 'gebied': 'gebied', 'uitvoerder': 'uitvoerder', 'maaien': 'maaien', 'maaisel': 'maaisel', });
lyr_transportlijnen_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'id': 'id', 'betreft': 'betreft', 'naam': 'naam', 'lengte': 'lengte', 'uitvoerder': 'uitvoerder', });
lyr_afvoer_hopen_depots_3.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'id': 'id', 'betreft': 'betreft', 'tonnage': 'tonnage', 'hoek': 'hoek', 'doorgang': 'doorgang', });
lyr_pachtpercelen_4.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'omssrtovk': 'omssrtovk', 'wederparti': 'wederparti', });
lyr_VPNPboeren_5.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'naam': 'naam', '__owner': '__owner', 'jaargang': 'jaargang', });
lyr_Bokashihopen_Wijland_6.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'boer': 'boer', 'jaar': 'jaar', });
lyr_Bodemtraject_analysepercelen_NM_7.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'code': 'code', 'boer': 'boer', 'mons_jaa': 'mons_jaa', 'ref': 'ref', 'area': 'area', });
lyr_beheerbestek_vlakken_1.set('fieldImages', {'qc_id': '', 'fid': 'Hidden', 'bth_leg': '', 'opp_ha': 'Hidden', 'nm': '', 'aannemer': '', 'gebied': '', 'uitvoerder': '', 'maaien': '', 'maaisel': '', });
lyr_transportlijnen_2.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'id': '', 'betreft': '', 'naam': '', 'lengte': 'TextEdit', 'uitvoerder': '', });
lyr_afvoer_hopen_depots_3.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'id': '', 'betreft': '', 'tonnage': '', 'hoek': 'Range', 'doorgang': 'TextEdit', });
lyr_pachtpercelen_4.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'omssrtovk': '', 'wederparti': '', });
lyr_VPNPboeren_5.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'naam': 'TextEdit', '__owner': 'Range', 'jaargang': 'Range', });
lyr_Bokashihopen_Wijland_6.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'boer': 'TextEdit', 'jaar': 'TextEdit', });
lyr_Bodemtraject_analysepercelen_NM_7.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'code': 'TextEdit', 'boer': 'TextEdit', 'mons_jaa': 'TextEdit', 'ref': 'TextEdit', 'area': 'TextEdit', });
lyr_beheerbestek_vlakken_1.set('fieldLabels', {});
lyr_transportlijnen_2.set('fieldLabels', {});
lyr_afvoer_hopen_depots_3.set('fieldLabels', {});
lyr_pachtpercelen_4.set('fieldLabels', {});
lyr_VPNPboeren_5.set('fieldLabels', {});
lyr_Bokashihopen_Wijland_6.set('fieldLabels', {});
lyr_Bodemtraject_analysepercelen_NM_7.set('fieldLabels', {});
lyr_Bodemtraject_analysepercelen_NM_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});