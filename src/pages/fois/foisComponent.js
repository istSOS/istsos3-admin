import React, { Component } from 'react';

import FoisMap from '../../common/foisMap/foisMapContainer.js'

class FoisComponent extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col">

                        <div className="form-group">
                            <label htmlFor="foiIdentifier">
                                Identifier *
                            </label>
                            <input className="form-control"
                                id="foiIdentifier"
                                type="text"
                                /*onChange={
                                    this.handleNameChange.bind(this)
                                }
                                value={insertsensor.name}*//>
                        </div>

                        <div className="form-group">
                            <label htmlFor="foiName">
                                Label
                            </label>
                            <input className="form-control"
                                id="foiName"
                                type="text"
                                /*onChange={
                                    this.handleNameChange.bind(this)
                                }
                                value={insertsensor.name}*//>
                        </div>

                        <div className="form-group">
                            <label htmlFor="foiDescription">
                                Description
                            </label>
                            <textarea className="form-control"
                                id="foiDescription"
                                rows="3"
                                /*onChange={
                                    this.handleNameChange.bind(this)
                                }
                                value={insertsensor.name}*//>
                        </div>

                        <div className="form-group">
                            <label htmlFor="foiDescription">
                                Related feature
                            </label>
                            <select
                                className="form-control"
                                onChange={this.handleChange}>
                                <option
                                    value=''>
                                    Select the related feature..
                                </option>
                            </select>
                        </div>

                        <label htmlFor="foiCoordinates">
                            Coordinates *
                        </label>
                        <form className="input-group">
                            <input
                                type="text"
                                className="form-control mr-sm-2"
                                id="foiX"
                                placeholder="x"/>
                            <input
                                type="text"
                                className="form-control mr-sm-2"
                                id="foiY"
                                placeholder="y"/>
                            <input
                                type="text"
                                className="form-control"
                                id="foiY"
                                placeholder="z (optional)"/>
                        </form>

                        <div className="form-group" style={{
                                marginTop: "1em"
                            }}>
                            <button type="button"
                                className="btn btn-primary btn-sm"
                                onClick={e => {
                                    //addObservableProperty();
                                    console.log("Click");
                                }}>
                                Add
                            </button>
                        </div>

                    </div>
                    <div className="col">
                        <FoisMap/>
                    </div>
                </div>
            </div>
        )
    }
};

export default FoisComponent;
