import React, { Component } from 'react';

// istSOS components
import {
    setting
} from '../setting'

// OpenLayers 3
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZSource from 'ol/source/xyz';

import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
import GeoJSON from 'ol/format/geojson';

import Draw from 'ol/interaction/draw';
import Modify from 'ol/interaction/modify';

import Feature from 'ol/feature';
import Point from 'ol/geom/point';
import Style from 'ol/style/style';
import Icon from 'ol/style/icon';
import Text from 'ol/style/text';
import Fill from 'ol/style/fill';

//import Control from 'ol/control/control';

// Semantic UI components
import { Menu } from 'semantic-ui-react';

class FoisMapComponent extends Component {

    componentDidMount() {
        const {
            edit
        } = this.props;

        this.map = new Map({
            target: 'map-container',
            layers: [
                new TileLayer({
                    source: new XYZSource({
                        url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg'
                    })
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        });

        // Editing layer
        this.position = new VectorSource();
        const vector = new VectorLayer({
            source: this.position,
            style: new Style({
                image: new Icon({
                    anchor: [0.5, 1],
                    src: '/img/place.png'
                })
            })
        });
        this.map.addLayer(vector);

        /*
        this.map.on("pointerdrag", function(e) {
            console.log(e);
            this.centerFeature.getGeometry().setCoordinates(
                this.map.getView().getCenter()
            );
            this.position.changed();
        }, this);

        this.map.getView().on('change:center', function(e){
            this.centerFeature.getGeometry().setCoordinates(
                this.map.getView().getCenter()
            )
        }, this);

        var element = document.createElement('div');
        element.className = 'centerCtr ol-unselectable ol-control';
        this.centerCtr = new Control({
            element: element
        });
        this.map.addControl(this.centerCtr);
        */


        // Feature of interest layer
        this.fois = new VectorSource();
        this.map.addLayer(new VectorLayer({
            source: this.fois,
            style: function(feature, resolution) {
                return [new Style({
                    image: new Icon({
                        anchor: [0.5, 1],
                        src: '/img/place.png'
                    }),
                    text: new Text({
                        textAlign: "center",
                        textBaseline: 'middle',
                        fill: new Fill({color: 'black'}),
                        font: '12px sans-serif',
                        text: feature.get('name'),
                        offsetY: 8
                    })
                })]
            }
        }));

        //position.addFeature(new Feature(new Point([0, 0])));
        this.drawPointInteraction = new Draw({
            type: 'Point',
            source: this.position
        });

        this.modify = new Modify({
            source: this.position
        });

        this.position.on('addfeature', this.geomAdded, this);
        this.position.on('changefeature', this.geomChanged, this);

        if(edit){
            if(edit.type==='Point'){
                this.centerFeature = new Feature({
                    name: "Center",
                    geometry: new Point(
                        this.map.getView().getCenter()
                    )
                });
                this.position.addFeature(
                    this.centerFeature
                );
            }
            this.map.addInteraction(this.modify);
        }
    }

    componentWillUpdate(nextProps, nextState){
        const {
            fois,
            edit
        } = nextProps;

        if(edit){

            this.position.un('changefeature', this.geomChanged, this);
            this.centerFeature.getGeometry().setCoordinates(
                edit.coordinates
            );
            /*let fois = this.position.getFeatures();
            if(fois.length>0){
                // Already on map, just change coordinates
                fois[0].getGeometry().setCoordinates([
                    edit.coordinates
                ]);
            }*/
            this.position.on('changefeature', this.geomChanged, this);
        }

        if (fois.data !== null && fois.data.length>0){
            // Update Feature of Interest geometries
            let features = [];
            for (let i = 0, l = fois.data.length; i < l; i++) {
                if(fois.data[i].shape !== null){
                    features.push({
                        type: 'Feature',
                        properties: {
                            name: fois.data[i].name
                        },
                        geometry: fois.data[i].shape
                    });
                }
            }
            this.fois.clear(true);
            this.fois.addFeatures((new GeoJSON()).readFeatures({
                type: 'FeatureCollection',
                crs: {
                    type: 'name',
                    properties: {
                        name: 'EPSG:3857'
                    }
                },
                features: features
            }))
        }
        /*if (foismap.update.point){
            let fois = this.position.getFeatures();
            if(fois.length>0){
                // Already on map, just change coordinates
                fois[0].getGeometry().setCoordinates([
                    foismap.update.point.x,
                    foismap.update.point.y
                ]);
            }else{
                // Empty, then create a new one
            }
        }*/
    }

    addPoint() {
        this.position.clear(true);
        this.map.removeInteraction(this.modify);
        this.map.addInteraction(
            this.drawPointInteraction
        );
    }

    /*
        Function fired as soon a new feature is added to
        the editing vector source.
    */
    geomAdded(ev){
        const {
            geometryAdded
        } = this.props;
        if (geometryAdded){
            let feature = ev.feature;
            geometryAdded(
                feature.getGeometry().getType(),
                feature.getGeometry().getCoordinates()
            )
        }
        this.map.removeInteraction(this.drawPointInteraction);
        this.map.addInteraction(this.modify);
    }

    /*
        Function fired as soon the editing vector source
        is changed.
    */
    geomChanged(ev){
        const {
            geometryChanged
        } = this.props;
        if (geometryChanged){
            let feature = ev.feature;
            geometryChanged(
                feature.getGeometry().getType(),
                feature.getGeometry().getCoordinates()
            )
        }
    }

    getToolbar(){
        const {
            sensorType
        } = this.props;

        let buttons = {};
        buttons[setting._SAMPLING_POINT] = (
            <Menu.Item
                key="ebtn-p"
                onClick={e => {
                    this.addPoint();
                }}>
                    Add Location
            </Menu.Item>
        );
        buttons[setting._SAMPLING_CURVE] = (
            <Menu.Item key="ebtn-c">
                Add Path
            </Menu.Item>
        );
        buttons[setting._SAMPLING_SURFACE] = (
            <Menu.Item key="ebtn-s">
                Add Surface
            </Menu.Item>
        );
        if(sensorType !== undefined){
            buttons = [
                buttons[sensorType.foiType]
            ];
        }else{
            buttons = Object.values(buttons);
        }
        return buttons;
    }

    handleTest() {
        debugger;
        console.log(this.map);
    }

    render() {
        return (
            <div style={{
                    width: '100%',
                    height: '100%',
                    border: 'thin solid #cccccc'
                }}>
                {/*<Menu secondary style={{margin: '0px'}}>
                    {this.getToolbar()}
                </Menu>*/}
                <div id='map-container' style={{
                    width: '100%',
                    height: '100%',
                    padding: '0px'
                }}></div>
            </div>
        )
    }
};

export default FoisMapComponent;
