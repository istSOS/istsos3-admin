import React, { Component } from 'react';
// import { translate } from 'react-i18next';

import ObservableProperties
    from '../../common/observableProperties/observablePropertiesContainer';

import Uoms
    from '../../common/uoms/uomsContainer';

import ObservationTypes
    from '../../common/observationTypes/observationTypesContainer';

import Fois
    from '../fois/foisContainer';

class InsertSensorComponent extends Component {

    sensorTypePage() {
        const {
            insertsensor,
            selectSensorType
        } = this.props;
        const sensorTypes = insertsensor.sensorTypes;
        return (
            <div>
                {
                    Object.keys(sensorTypes).map((id, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '16px'
                            }}>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={e => {
                                    //e.preventDefault();
                                    selectSensorType(id);
                                }}>
                                {sensorTypes[id].name}
                            </button>
                        </div>
                    ))
                }
            </div>
        )
    }

    observationTypesPage() {
        const {
            insertsensor,
            selectObservationType
        } = this.props;
        const observationTypes = insertsensor.observationTypes;
        return (
            <div>
                {
                    Object.keys(observationTypes).map((id, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '16px'
                            }}>
                            <button
                                type="button"
                                className={
                                    "btn " +
                                    (
                                        insertsensor.observationType === id ?
                                        "btn-success": "btn-primary"
                                    )
                                }
                                onClick={e => {
                                    selectObservationType(id);
                                }}>
                                {observationTypes[id].name}
                            </button>
                        </div>
                    ))
                }
            </div>
        )
    }

    handleNameChange(event) {
        console.log(event.target.value);
        const {
            setSensorName
        } = this.props;
        setSensorName(event.target.value);
    }

    handleFoiNameChange(event) {
        console.log(event.target.value);
        /*const {
            setSensorName
        } = this.props;
        setSensorName(event.target.value);*/
    }

    finishPage() {
        const {
            insertsensor,
            observedPropertySelected,
            uomSelected,
            resultTypeSelected,
            addObservableProperty,
            removeObservableProperty,
            register_sensor,
            geometryAdded
        } = this.props;
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col">

                        <div className="form-group">
                            <label htmlFor="offeringName">
                                Sensor name
                            </label>
                            <input className="form-control"
                                id="offeringName"
                                type="text"
                                onChange={
                                    this.handleNameChange.bind(this)
                                }
                                value={insertsensor.name}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="oty">
                                Observable property
                            </label>
                            <br/>
                            <ObservableProperties
                                onSelected={observedPropertySelected}/>
                            <br/>
                            <Uoms
                                onSelected={uomSelected}/>
                            <br/>
                            <ObservationTypes
                                onSelected={resultTypeSelected}/>
                            &nbsp;
                            <button type="button"
                                className="btn btn-primary btn-sm"
                                onClick={e => {
                                    addObservableProperty();
                                }}>
                                Add
                            </button>
                        </div>
                        {
                            insertsensor.observableProperties.length>0?
                            <table className="table">
                                    <thead className="thead-inverse">
                                        <tr>
                                          <th>#</th>
                                          <th>Observable property</th>
                                          <th>Unit of measure</th>
                                          <th>result type</th>
                                          <th>x</th>
                                        </tr>
                                    </thead>
                                <tbody>
                                {
                                    insertsensor.observableProperties.map((op, index) => (
                                        <tr key={'op-row-' + (index+1)}>
                                            <th scope="row">
                                                {index}
                                            </th>
                                            <td>
                                                {
                                                    op.observedProperty.name === ""?
                                                    op.observedProperty.def:
                                                    op.observedProperty.name
                                                }
                                            </td>
                                            <td>
                                                {op.uom.name} {
                                                    op.uom.description !== ''?
                                                    " ("+op.uom.description+")":
                                                    null
                                                }
                                            </td>
                                            <td>
                                                {op.resultType.description}
                                            </td>
                                            <td>
                                                <button type="button"
                                                    className="btn btn-primary btn-sm"
                                                    onClick={e => {
                                                        removeObservableProperty(index);
                                                    }}>
                                                    remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                              </tbody>
                            </table>: null
                        }

                    </div>
                    <div className="col">
                        <Fois
                            sensorType={
                                insertsensor.sensorTypes[
                                    insertsensor.sensorType
                                ]
                            }
                            geometryAdded={geometryAdded}/>

                        <form className="form-inline" style={{
                                marginTop: "16px"
                            }}>
                            <div className="form-group">
                                <label htmlFor="foiName" className="col-form-label">
                                    Feature of interest name &nbsp;
                                </label>
                                <input className="form-control"
                                    id="foiName"
                                    type="text"
                                    onChange={
                                        this.handleFoiNameChange.bind(this)
                                    }
                                    value={insertsensor.featureOfInterest.name}/>
                            </div>
                        </form>

                        <div style={{marginTop: "32px"}}>
                            <button
                                type="button"
                                className="btn btn-dark"
                                onClick={e => {
                                    register_sensor(insertsensor);
                                }}>
                                Finish
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    getPage() {
        const {
            insertsensor
        } = this.props;
        if (insertsensor.wizardPage === 1){
            return this.sensorTypePage();
        }else if(insertsensor.wizardPage === 2){
            return this.observationTypesPage();
        }else if(insertsensor.wizardPage === 3){
            return this.finishPage();
        }else{
            return null;
        }
    }

    render() {
        const {
            //observableproperties,
            insertsensor
        } = this.props;
        return (
            <div className='container-fluid'>
                <h3>
                    <span
                        className="badge badge-secondary">
                        {insertsensor.wizardPage} / 3
                    </span>
                    &nbsp; Sensor Creator
                </h3>
                {
                    insertsensor.wizardPage === 1 ? <p>
                        Follow all the steps to register a new sensor.
                    </p>: null
                }
                <p>
                    {
                        insertsensor.sensorType !== null? <span>
                            Sensor config: &nbsp;
                            {
                                insertsensor.sensorTypes[
                                    insertsensor.sensorType
                                ].name
                            }
                            {/*
                                insertsensor.observationType !== null? <span>
                                     &nbsp; / &nbsp;
                                    {
                                        insertsensor.observationTypes[
                                            insertsensor.observationType
                                        ].name
                                    }
                                </span>: null
                            */}
                        </span>: null
                    }
                </p>
                {
                    this.getPage()
                }
            </div>
        )
    }
};

export default InsertSensorComponent;
