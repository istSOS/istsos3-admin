import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Sensors,
    FoisMap,
    ObservedProperties,
    ObservationTypes
} from 'istsos3-ui';

// Semantic UI components
import {
    div
} from 'semantic-ui-react';

class HomeComponent extends Component {

    render() {
        const {
            sensors,
            observed_properties,
            observationtypes
        } = this.props;

        return (
            <div style={{
                flex: '1 1 0%',
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div style={{
                        flex: '1 1 0%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    <div attached='top' style={{
                            backgroundColor: '#207433',
                            padding: "1rem",
                        }}>
                        <div>
                            <div style={{
                                color: 'white',
                                fontWeight: "bold"
                            }}>
                                Registered sensors
                            </div>
                            <div style={{
                                color: 'white',
                                fontSize: "0.7em"
                            }}>
                                Count: {sensors.dlen}, loaded in {sensors.rtime/1000} seconds
                            </div>
                        </div>
                    </div>
                    <div attached style={{
                            flex: '0.5 1 0%',
                            display: 'flex',
                            padding: "1rem",
                            flexDirection: 'column'
                        }}>
                        <Sensors
                            layout='list'/>
                    </div>
                    <div style={{
                        flex: '0.5 1 0%',
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <div style={{
                                flex: '0.5 1 0%',
                                display: 'flex',
                                //margin: '0.5em 0.25em 0px 0px',
                                flexDirection: 'column'
                            }}>
                            <div attached='top' style={{
                                    backgroundColor: '#207433',
                                    padding: "1rem",
                                }}>
                                <div>
                                    <div style={{
                                        color: 'white',
                                        fontWeight: "bold"
                                    }}>
                                        Observed properties
                                    </div>
                                    <div style={{
                                        color: 'white',
                                        fontSize: "0.7em"
                                    }}>
                                        Count: {observed_properties.dlen}, loaded in {observed_properties.rtime/1000} seconds
                                    </div>
                                </div>
                            </div>
                            <div attached style={{
                                    flex: '1 1 0%',
                                    padding: "1rem",
                                    overflowY: 'auto'
                                }}>
                                <ObservedProperties
                                    layout='list'/>
                            </div>
                        </div>
                        <div style={{
                                flex: '0.5 1 0%',
                                display: 'flex',
                                //margin: '0.5em 0px 0px 0.25em',
                                flexDirection: 'column'
                            }}>
                            <div attached='top' style={{
                                    backgroundColor: '#207433',
                                    padding: "1rem",
                                }}>
                                <div>
                                    <div style={{
                                        fontWeight: "bold",
                                        color: 'white'
                                    }}>
                                        Observation Types
                                    </div>
                                    <div style={{
                                        color: 'white',
                                        fontSize: "0.7em"
                                    }}>
                                        Count: {observationtypes.dlen}, loaded in {observationtypes.rtime/1000} seconds
                                    </div>
                                </div>
                            </div>
                            <div attached style={{
                                    flex: '1 1 0%',
                                    padding: "1rem",
                                    overflowY: 'auto'
                                }}>
                                <ObservationTypes layout='list'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    flex: '1 1 0%'
                }}>
                    <FoisMap/>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        sensors: state.core_sensors,
        observed_properties: state.core_observed_properties,
        observationtypes: state.core_observationtypes
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);
