import React, { Component } from 'react';
import { translate } from 'react-i18next';

import ObservableProperties
    from '../../common/observableProperties/observablePropertiesContainer';

class OfferingCreatorComponent extends Component {

    constructor(props) {
        super(props);
        this.observableSelected = this.observableSelected.bind(this);
    }

    observableSelected(observableProperty){
        console.log(observableProperty);
    }

    render() {
        const {
            offering
        } = this.props;
        const data = offering.data;
        return (
            <div className='container-fluid'>
                <div
                    style={{
                        fontSize: '1.4em',
                        fontWeight: 'bold',
                        padding: "16px 0px 16px 0px"
                    }}>
                    {
                        data.id === undefined?
                        <h3>
                            Register a new sensor
                        </h3>:
                        <h3>
                            Update sensor description
                        </h3>
                    }
                </div>
                <div className="row">
                    <div className="col">

                        <div className="form-group">
                            <label htmlFor="specimenName">
                                Offering name
                            </label>
                            <input className="form-control"
                                id="offeringName"
                                type="text"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="specimenName">
                                Procedure name
                            </label>
                            <input className="form-control"
                                id="procedureName"
                                type="text"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="oty">
                                Observable property
                            </label>
                            <br/>
                            <ObservableProperties
                                onSelected={this.observableSelected}/>
                            &nbsp;
                            <button type="button"
                                className="btn btn-primary btn-sm">
                                Add
                            </button>
                        </div>

                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        )
    }
};

export default translate('offerings')(OfferingCreatorComponent);
