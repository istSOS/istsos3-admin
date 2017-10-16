import React, { Component } from 'react';
import { translate } from 'react-i18next';

class SpecimenCreatorComponent extends Component {

    render() {
        //const {t} = this.props;
        return (
            <div className='container'>
                <div
                    style={{
                        fontSize: '1.4em',
                        fontWeight: 'bold',
                        padding: "16px 0px 16px 0px"
                    }}>Register a new specimen</div>
                <div className="row">
                    <div className="col">

                        <div className="form-group">
                            <label htmlFor="specimenName">
                                Specimen name
                            </label>
                            <input className="form-control"
                                id="specimenName"
                                type="text"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="specimenName">
                                Sampled Feature Identifier
                            </label>
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon3">
                                    https://istsos.org/specimen/
                                </span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="specimenDescription">
                                Description
                            </label>
                            <textarea className="form-control"
                                id="specimenDescription" rows="3"></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="samplingTime">
                                Sampling time
                            </label>
                            <input className="form-control"
                                id="samplingTime"
                                placeholder="yyyy-mm-dd HH:MM:ss"
                                type="text"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputMaterial">
                                Material
                            </label>
                            <input className="form-control"
                                id="inputMaterial"
                                type="text"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputMethod">
                                Sampling method
                            </label>
                            <input className="form-control"
                                id="inputMethod"
                                type="text"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputProcessing">
                                Processing details
                            </label>
                            <input className="form-control"
                                id="inputProcessing"
                                type="text"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputSize">
                                Size
                            </label>
                            <input className="form-control"
                                id="inputSize"
                                type="text"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputLocation">
                                Current location
                            </label>
                            <input className="form-control"
                                id="inputLocation"
                                type="text"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputSamplingLocation">
                                Sampling location
                            </label>
                            <input className="form-control"
                                id="inputSamplingLocation"
                                type="text"/>
                        </div>
                    </div>

                    <div className="col">
                        Dynamic help here
                    </div>
                </div>
            </div>
        )
    }
};

export default translate('offerings')(SpecimenCreatorComponent);
