import React, { Component } from 'react';


// OpenLayers 3
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import XYZSource from 'ol/source/xyz';

import VectorLayer from 'ol/layer/vector';
import VectorSource from 'ol/source/vector';
//import Feature from 'ol/feature';
//import Point from 'ol/geom/point';
import Draw from 'ol/interaction/draw';
import Modify from 'ol/interaction/modify';


class FoisComponent extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
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
        this.position = new VectorSource();
        const vector = new VectorLayer({
            source: this.position
        });
        this.map.addLayer(vector);

        //position.addFeature(new Feature(new Point([0, 0])));
        this.drawPointInteraction = new Draw({
            type: 'Point',
            source: this.position
        });

        this.modify = new Modify({
            source: this.position
        });

        this.position.on('addfeature', this.geomAdded, this);
    }

    handleChange(event) {
        console.log("Ciao");
    }

    addPoint() {
        console.log("addPoint");
        debugger;
        this.position.clear(true);
        this.map.removeInteraction(this.modify);
        this.map.addInteraction(
            this.drawPointInteraction
        );
    }

    geomAdded(ev){
        console.log("geomadded");
        debugger;
        const {
            geometryAdded
        } = this.props;
        if (geometryAdded){
            let feature = ev.feature;
            geometryAdded(
                "Point",
                feature.getGeometry().getCoordinates()
            )
        }
        this.map.removeInteraction(this.drawPointInteraction);
        this.map.addInteraction(this.modify);
    }

    getToolbar(){
        const {
            sensorType
        } = this.props;

        const _foidef = "http://www.opengis.net/def/samplingFeatureType/OGC-OM/2.0/";

        let buttons = {};
        buttons[_foidef + "SF_SamplingPoint"] = (
            <button
                key="ebtn-p"
                type="button"
                className="btn btn-light"
                style={{
                    display: "flex",
                    alignItems: "center"
                }}
                onClick={e => {
                    this.addPoint();
                }}>
                    Add Location
            </button>
        );
        buttons[_foidef + "SF_SamplingCurve"] = (
            <button key="ebtn-c" type="button" className="btn btn-light" style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                Add Path
            </button>
        );
        buttons[_foidef + "SF_SamplingSurface"] = (
            <button key="ebtn-s" type="button" className="btn btn-light" style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                Add Surface
            </button>
        );
        if(sensorType !== undefined){
            buttons = [
                buttons[
                    sensorType.foiType
                ]
            ];
        }else{
            buttons = Object.values(buttons);
        }
        return buttons;
    }

    render() {
        return (
            <div style={{
                    width: '100%',
                    border: 'thin solid #cccccc'
                }}>
                <div className="container-fluid" style={{
                        padding: '0px'
                    }}>
                    <nav className="navbar navbar-light bg-light">
                        <form className="form-inline">
                            {this.getToolbar()}
                        </form>
                    </nav>
                </div>
                <div className="container-fluid" id='map-container' style={{
                    padding: '0px',
                    height: '500px'
                }}></div>
            </div>
        )
    }
};

export default FoisComponent;
