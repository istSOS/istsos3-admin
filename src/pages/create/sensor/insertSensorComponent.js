import React, { Component } from 'react';
import {
  Route,
  withRouter
} from 'react-router-dom';

import {
    FoisMap
} from '../../../common';

import {
    setting
} from 'istsos3-core';

import {
    Mappa,
    Fois,
    SensorForm,
    FoiForm,
    SpecimenForm
} from 'istsos3-ui';

//import Fois from '../fois/foisContainer';

// Semantic UI components
import {
    Card,
    Segment,
    Icon,
    Button,
    Header,
    Divider,
    Tab,
    Menu
} from 'semantic-ui-react';

class InsertSensorComponent extends Component {

    local = {
        sensorTypes: {
            "1": {
                id: '1',
                name: "Insitu Fixed",
                description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
                fixed: true,
                icon: "/img/st/1.png",
                foiType: setting._SAMPLING_POINT
            },
            /*"2": {
                id: '2',
                name: "Insitu Mobile",
                description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
                fixed: false,
                icon: "/img/st/2.png",
                foiType: setting._SAMPLING_CURVE
            },*/
            "3": {
                id: '3',
                name: "Specimen fixed",
                description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
                fixed: true,
                icon: "/img/st/3.png",
                foiType: setting._SAMPLING_SPECIMEN
            }
        },
        observationTypes: {
            "1": {
                id: "1",
                name: "Single Observation in Time",
                description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
                icon: "/img/ot/1.png"
            },
            "2": {
                id: "2",
                name: "Multiple Observation in Time",
                description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
                icon: "/img/ot/2.png"
            }
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            // Configurations
            skipSpecimen: false,
            newTab: false,
            sensorType: null,
            foiType: null,
            observationType: null,
            material: null,
            config: {},

            // Sensor metadata
            sensor: null,

            // Specimen metadata
            specimen: null,

            // Selected existing Foi
            existingFoi: null,
            newFoi: null,
            foiValid: false,
            fiex: [],
            coordinates: [],

            // Validations
            metadataValid: false,
            specimenValid: false,
            observedPropertiesValid: false,
        };
        this.sensorMetadataChanged = this.sensorMetadataChanged.bind(this);
        this.specimenMetadataChanged = this.specimenMetadataChanged.bind(this);
        this.sensorObservedPropertiesChanged = this.sensorObservedPropertiesChanged.bind(this);
        this.selectSensorType = this.selectSensorType.bind(this);
        this.selectObservationType = this.selectObservationType.bind(this);
        this.toggleFoiEdit = this.toggleFoiEdit.bind(this);
        this.selectFoi = this.selectFoi.bind(this);
        this.foiChanged = this.foiChanged.bind(this);

        this.props.history.push(
            '/create/sensor'
        )
    }

    selectSensorType(sensorTypes){
        this.setState({
            ...this.state,
            sensorType: sensorTypes.id,
            foiType: sensorTypes.foiType
        });
    }

    selectObservationType(observationType){
        this.setState({
            ...this.state,
            observationType: observationType.id
        });
    }

    sensorMetadataChanged (metadata, valid) {
        this.setState({
            ...this.state,
            sensor: {
                ...this.state.sensor,
                ...metadata
            },
            metadataValid: valid
        });
    }

    specimenMetadataChanged (metadata, valid) {
        this.setState({
            ...this.state,
            specimen: {
                ...this.state.specimen,
                ...metadata
            },
            specimenValid: valid === undefined? this.state.specimenValid: valid
        });
    }

    sensorObservedPropertiesChanged (observable_properties, valid) {
        this.setState({
            ...this.state,
            sensor: {
                ...this.state.sensor,
                ...observable_properties
            },
            observedPropertiesValid: valid
        });
    }

    toggleFoiEdit(newTab){
        let foiValid = false;
        if(!newTab){
            foiValid = this.state.existingFoi !== null;
        }
        this.setState({
            ...this.state,
            newTab: newTab,
            foiValid: foiValid,
            sensor: {
                ...this.state.sensor,
                sampled_foi: {
                    ...(
                        newTab? this.state.newFoi: this.state.existingFoi
                    )
                }
            }
        });
    }

    foiChanged (foi, valid) {
        this.setState({
            ...this.state,
            foiValid: valid,
            newFoi: foi,
            sensor: {
                ...this.state.sensor,
                sampled_foi: {
                    ...foi
                }
            }
        });
    }

    selectFoi(foi){
        this.setState({
            ...this.state,
            foiValid: true,
            existingFoi: foi,
            sensor: {
                ...this.state.sensor,
                sampled_foi: foi.shape === null?
                    foi.identifier: {
                        ...foi
                    }
            }
        });
    }

    startPage(){
        const sensorTypes = this.local.sensorTypes;
        const sensorTypesArr = Object.keys(sensorTypes);
        const observationTypes = this.local.observationTypes;
        const observationTypesArr = Object.keys(observationTypes);
        return (
            <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%'
                }}>
                <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flex: '1 1 0%',
                        margin: '2rem'
                        //alignItems: 'center'
                    }}>
                    <div style={{
                            margin: "0px 3.5em 0.875em 1.5em",
                            minWidth: "200px"
                        }}>
                        <Header as="h3">
                            <Icon name='podcast' />
                            <Header.Content>
                                Sensor Type
                            </Header.Content>
                        </Header>
                        <p>
                            Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        </p>
                        <p>
                            Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        </p>
                    </div>
                    <div style={{
                            flex: '1 1 0%'
                        }}>
                        <Card.Group>
                            {
                                sensorTypesArr.map((id, index) => (
                                    <Card
                                        color = {
                                            this.state.sensorType === id ?
                                            'green': null
                                        }
                                        key={"is-st-c-"+index}>
                                        <Card.Content>
                                            <Card.Header>
                                                {sensorTypes[id].name}
                                            </Card.Header>
                                            <Card.Description>
                                                {sensorTypes[id].description}
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra
                                            textAlign="right">
                                            <Button
                                                onClick={e => {
                                                    this.selectSensorType(
                                                        sensorTypes[id]
                                                    );
                                                }}
                                                color = {
                                                    this.state.sensorType === id ?
                                                    'green': null
                                                }>
                                                {
                                                    this.state.sensorType === id ?
                                                    <Icon name='check' />: null
                                                }
                                                Select
                                            </Button>
                                        </Card.Content>
                                    </Card>
                                ))
                            }
                        </Card.Group>
                    </div>
                </div>
                <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flex: '1 1 0%',
                        margin: '2rem'
                        //alignItems: 'center'
                    }}>
                    <div style={{
                            margin: "0px 3.5em 0.875em 1.5em",
                            minWidth: "200px"
                        }}>
                        <Header as="h3">
                            <Icon name='database' />
                            <Header.Content>
                                Result Type
                            </Header.Content>
                        </Header>
                        <p>
                            Donec sollicitudin molestie malesuada. Vivamus
                            suscipit tortor eget felis porttitor volutpat.
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem.
                        </p>
                        <p>
                            Pellentesque in ipsum id orci porta dapibus.
                            Curabitur arcu erat, accumsan id imperdiet et,
                            porttitor at sem. Quisque velit nisi, pretium ut
                            lacinia in, elementum id enim.
                        </p>
                    </div>
                    <div style={{
                            flex: '1 1 0%'
                        }}>
                        <Card.Group>
                            {
                                observationTypesArr.map((id, index) => (
                                    <Card
                                        key={"is-rt-c-"+index}
                                        color = {
                                            this.state.observationType === id ?
                                            'green': null
                                        }>
                                        {/*<Image
                                            src={observationTypes[id].icon}/>*/}
                                        <Card.Content>
                                            <Card.Header>
                                                {observationTypes[id].name}
                                            </Card.Header>
                                            <Card.Description>
                                                {observationTypes[id].description}
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra
                                            textAlign="right">
                                            <Button
                                                color = {
                                                    this.state.observationType === id ?
                                                    'green': null
                                                }
                                                onClick={e => {
                                                    this.selectObservationType(
                                                        observationTypes[id]
                                                    );
                                                }}>
                                                {
                                                    this.state.observationType === id ?
                                                    <Icon name='check' />: null
                                                }
                                                Select
                                            </Button>
                                        </Card.Content>
                                    </Card>
                                ))
                            }
                        </Card.Group>
                    </div>
                </div>
            </div>
        )
    }

    finish = () => {
        const {
            registerSensor
        } = this.props;

        let config = null;

        // Add the speciment template if sensor type is SF_Specimen
        if (this.state.sensorType === '3' && !this.state.skipSpecimen){
            config = {
                "specimen": {
                    ...this.state.specimen
                }
            };
        }

        console.log({
            ...{
                ...this.state.sensor,
                foi_type: this.state.foiType
            },
            "fixed": this.local.sensorTypes[
                this.state.sensorType
            ].fixed,
            "config": config
        });
        registerSensor({
            ...{
                ...this.state.sensor,
                foi_type: this.state.foiType
            },
            "fixed": this.local.sensorTypes[
                this.state.sensorType
            ].fixed,
            "config": config
        });
    }

    render() {
        const {
            history,
            foiform,
            fois
        } = this.props;

        return (
            <div style={{
                flex: '1 1 0%',
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div style={{
                    flex: '1 1 0%',
                    padding: "2rem"
                }}>
                    <Route
                        path='/create/sensor'
                        exact={true}
                        render={(routeProps) => (
                            this.startPage()
                        )}/>
                    <Route
                        path='/create/sensor/specimen'
                        exact={true}
                        render={(routeProps) => (
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    height: '100%'
                                }}>
                                <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: '1 1 0%'
                                        //alignItems: 'center'
                                    }}>
                                    <div style={{
                                            margin: "2rem 3.5em 0.875em 1.5em",
                                            maxWidth: "450px"
                                        }}>
                                        <Header as="h3">
                                            <Icon name='newspaper' />
                                            <Header.Content>
                                                Specimen template
                                            </Header.Content>
                                        </Header>
                                        <p>
                                        Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        </p>
                                        <p>
                                        Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        </p>
                                        <p>
                                        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                        </p>
                                    </div>
                                    <Segment style={{
                                            flex: '1 1 0%',
                                            overflowY: "auto",
                                            padding: "2rem"
                                        }}>
                                        <SpecimenForm
                                            layout="template"
                                            specimen={
                                                this.state.specimen === null?
                                                undefined: this.state.specimen
                                            }
                                            onChange={this.specimenMetadataChanged}/>
                                    </Segment>
                                </div>
                            </div>
                        )}/>
                    <Route
                        path='/create/sensor/metadata'
                        exact={true}
                        render={(routeProps) => (
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    height: '100%'
                                }}>
                                <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: '1 1 0%'
                                        //alignItems: 'center'
                                    }}>
                                    <div style={{
                                            margin: "2rem 3.5em 0.875em 1.5em",
                                            maxWidth: "450px"
                                        }}>
                                        <Header as="h3">
                                            <Icon name='code' />
                                            <Header.Content>
                                                Sensor metadata
                                            </Header.Content>
                                        </Header>
                                        <p>
                                        Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        </p>
                                        <p>
                                        Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        </p>
                                        <p>
                                        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                        </p>
                                    </div>
                                    <Segment style={{
                                            flex: '1 1 0%',
                                            overflowY: "auto",
                                            padding: "2rem"
                                        }}>
                                        <SensorForm
                                            layout="metadata"
                                            sensor={
                                                this.state.sensor === null?
                                                undefined: this.state.sensor
                                            }
                                            onChange={this.sensorMetadataChanged}/>
                                    </Segment>
                                </div>
                            </div>
                        )}/>
                    <Route
                        path='/create/sensor/observedproperties'
                        exact={true}
                        render={(routeProps) => (
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    height: '100%'
                                }}>
                                <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: '1 1 0%'
                                        //alignItems: 'center'
                                    }}>
                                    <div style={{
                                            margin: "2rem 3.5em 0.875em 1.5em",
                                            maxWidth: "450px"
                                        }}>
                                        <Header as="h3">
                                            <Icon name='find' />
                                            <Header.Content>
                                                Observed properties
                                            </Header.Content>
                                        </Header>
                                        <p>
                                        Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        </p>
                                        <p>
                                        Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        </p>
                                        <p>
                                        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                        </p>
                                    </div>
                                    <Segment style={{
                                            flex: '1 1 0%',
                                            display: "flex",
                                            flexDirection: 'column',
                                            padding: "2rem"
                                        }}>
                                        <SensorForm
                                            single={this.state.observationType === '1'}
                                            layout="observedproperties"
                                            sensor={
                                                this.state.sensor === null?
                                                undefined: this.state.sensor
                                            }
                                            onChange={this.sensorObservedPropertiesChanged}/>
                                    </Segment>
                                </div>
                            </div>
                        )}/>
                    <Route
                        path='/create/sensor/featureofinterest'
                        exact={true}
                        render={(routeProps) => (
                            <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    height: '100%'
                                }}>
                                <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flex: '1 1 0%'
                                        //alignItems: 'center'
                                    }}>
                                    <div style={{
                                            margin: "2rem 3.5em 0.875em 1.5em",
                                            maxWidth: "450px"
                                        }}>
                                        <Header as="h3">
                                            <Icon name='find' />
                                            <Header.Content>
                                                Feature of interest
                                            </Header.Content>
                                        </Header>
                                        <p>
                                        Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                                        </p>
                                        <p>
                                        Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et,
                                        porttitor at sem.
                                        </p>
                                        <p>
                                        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                        </p>
                                    </div>
                                    <Segment style={{
                                            flex: '1 1 0%',
                                            display: "flex",
                                            flexDirection: 'column',
                                            padding: "2rem"
                                        }}>
                                        <Tab
                                            activeIndex={
                                                this.state.newTab? 1: 0
                                            }
                                            menu={{ secondary: true, pointing: true }}
                                            panes={[
                                                {
                                                    menuItem: <Menu.Item key='isw-isf-1'>
                                                        Select existing
                                                    </Menu.Item>
                                                },
                                                {
                                                    menuItem: <Menu.Item key='isw-isf-2'>
                                                        Create new
                                                    </Menu.Item>
                                                }
                                            ]}
                                            onTabChange={(e, d) => {
                                                // setMode(d.activeIndex);
                                                if(d.activeIndex === 0){
                                                    this.toggleFoiEdit(false);
                                                }else{
                                                    this.toggleFoiEdit(true);
                                                }
                                            }}/>
                                        <div style={{
                                                    flex: "1 1 0%",
                                                    overflowY: "auto",
                                                    padding: "1em 0px",
                                                    display: "flex",
                                                    flexDirection: "row"
                                                }}>
                                            {
                                                this.state.newTab?

                                                <FoiForm
                                                    showMap={true}
                                                    foiType={this.state.foiType}
                                                    foi={this.state.newFoi}
                                                    onChange={this.foiChanged}/>
                                                /*[
                                                    <Segment.Group key="isc-fl" style={{
                                                            flex: "0.4 1 0%",
                                                            flexDirection: "column",
                                                            display: "flex",
                                                            margin: "0px"
                                                        }}>
                                                        <Segment style={{
                                                                flex: "1 1 0%",
                                                                overflowY: "auto"
                                                            }}>
                                                            <FoiForm
                                                                foiType={this.state.foiType}
                                                                foi={this.state.newFoi}
                                                                onChange={this.foiChanged}/>
                                                        </Segment>
                                                    </Segment.Group>,
                                                    <div key="isc-fm" style={{
                                                                flex: "0.6 1 0%"
                                                            }}>
                                                        <Mappa key="isc-fm1"
                                                            fois={fois.data}
                                                            isFetching={fois.isFetching}
                                                            editing={setting._SAMPLING_TYPES[this.state.foiType].name}
                                                            foi={this.state.newFoi}
                                                            changefeature={(foi)=>{
                                                                this.setState({
                                                                    newFoi: {
                                                                        ...this.state.newFoi,
                                                                        shape: {
                                                                            ...foi.shape
                                                                        }
                                                                    }
                                                                })
                                                            }}
                                                            addfeature={(foi)=>{
                                                                this.setState({
                                                                    newFoi: {
                                                                        ...this.state.newFoi,
                                                                        shape: {
                                                                            ...foi.shape
                                                                        }
                                                                    }
                                                                })
                                                            }}/>
                                                    </div>
                                                ]*/:
                                                [
                                                    <Segment.Group key="isc-fl" style={{
                                                            flex: "0.4 1 0%",
                                                            flexDirection: "column",
                                                            display: "flex",
                                                            margin: "0px"
                                                        }}>
                                                        {/*<Segment color='black'>
                                                            <Header sub>Feature of interests:</Header>
                                                        </Segment>*/}
                                                        <Segment style={{
                                                                flex: "1 1 0%",
                                                                overflow: "hidden",
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                padding: "0px 0px 0px 1em"
                                                            }}>
                                                            <Fois
                                                                layout='list'
                                                                activeItem={
                                                                    this.state.existingFoi !== null?
                                                                    this.state.existingFoi.identifier: null
                                                                }
                                                                onSelected={(foi)=>{
                                                                    this.selectFoi(foi);
                                                                }}
                                                                filter={{
                                                                    map_ids: this.state.fiex
                                                                }}/>
                                                        </Segment>
                                                    </Segment.Group>,
                                                    <div key="isc-fm" style={{
                                                                flex: "1 1 0%"
                                                            }}>
                                                        <Mappa key="isc-fm2"
                                                            highlighted={
                                                                this.state.sensor != null && this.state.sensor.hasOwnProperty('sampled_foi')?
                                                                    [this.state.sensor.sampled_foi.id]: []
                                                            }
                                                            fois={fois.data}
                                                            isFetching={fois.isFetching}
                                                            moveend={(features)=>{
                                                                console.log(features);
                                                                this.setState({
                                                                    fiex: features
                                                                })
                                                            }}/>
                                                    </div>
                                                ]
                                            }
                                        </div>
                                    </Segment>
                                </div>
                            </div>
                        )}/>
                    <Route
                        path='/create/sensor/featureofinterest/map'
                        exact={true}
                        render={(routeProps) => (
                            <div>
                                <Header as='h3'>
                                    Feature of interest
                                </Header>
                                <FoiForm
                                    hideButton={true}
                                    hide={{
                                        name: true,
                                        identifier: true,
                                        description: true,
                                        type: true
                                    }}/>
                                <FoisMap
                                    sensorType={{
                                        foiType: foiform.type
                                    }}
                                    edit={foiform.shape}/>
                            </div>
                        )}/>
                </div>
                <div style={{
                    width: "400px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "2rem",
                    boxShadow: "rgba(50, 50, 50, 0.75) 0px 0px 3px 0px"
                }}>
                    <Card>
                        <Route
                            path='/create/sensor'
                            exact={true}
                            render={() => ([
                                <Card.Content
                                    key={'fwcsc-1'}>
                                    <Card.Header>
                                        Registering a new sensor
                                    </Card.Header>
                                    <Card.Description>
                                        Please, select the sensor type and
                                        the data format for this sensor of the
                                        new sensor.
                                    </Card.Description>
                                </Card.Content>,
                                <Card.Content extra
                                    key={'fwcsc-2'}>
                                    <div className='ui two buttons'>
                                        <Button
                                            primary={(
                                                    this.state.sensorType !== null &&
                                                    this.state.observationType !== null)}
                                            disabled={!(
                                                    this.state.sensorType !== null &&
                                                    this.state.observationType !== null)}
                                            content='Continue'
                                            onClick={(e) => {
                                                if (this.state.sensorType === '3'){
                                                    history.push(
                                                        '/create/sensor/specimen'
                                                    );
                                                }else{
                                                    history.push(
                                                        '/create/sensor/metadata'
                                                    );
                                                }
                                            }}/>
                                    </div>
                                </Card.Content>
                            ])}/>
                        <Route
                            path='/create/sensor/specimen'
                            exact={true}
                            render={() => ([
                                <Card.Content
                                    key={'fwcsc-1'}>
                                    <Card.Header>
                                        Registering a new sensor
                                    </Card.Header>
                                    <Card.Description>
                                        Each time a new speciment will be
                                        collected this is the date that will
                                        be filled by default.
                                    </Card.Description>
                                </Card.Content>,
                                <Card.Content extra
                                    key={'fwcsc-2'}>
                                    <div>
                                        <Button
                                            primary={this.state.specimenValid}
                                            disabled={!this.state.specimenValid}
                                            fluid
                                            content='Continue'
                                            onClick={(e)=>(
                                                this.setState({
                                                    skipSpecimen: false
                                                }, () => {
                                                    history.push(
                                                        '/create/sensor/metadata'
                                                    )
                                                })
                                            )}/>
                                        <Divider horizontal>Or</Divider>
                                        <Button
                                            primary={!this.state.specimenValid}
                                            secondary={this.state.specimenValid}
                                            fluid
                                            content='Skip'
                                            onClick={(e)=>{
                                                this.setState({
                                                    skipSpecimen: true
                                                }, () => {
                                                    history.push(
                                                        '/create/sensor/metadata'
                                                    )
                                                })
                                            }}/>
                                    </div>
                                </Card.Content>
                            ])}/>
                        <Route
                            path='/create/sensor/metadata'
                            exact={true}
                            render={() => ([
                                <Card.Content
                                    key={'fwcsc-1'}>
                                    <Card.Header>
                                        Registering a new sensor
                                    </Card.Header>
                                    <Card.Description>
                                        Each time a new speciment will be
                                        collected this is the date that will
                                        be filled by default.
                                    </Card.Description>
                                </Card.Content>,
                                <Card.Content extra
                                    key={'fwcsc-2'}>
                                    <div className='ui two buttons'>
                                        <Button
                                            primary={this.state.metadataValid}
                                            disabled={!this.state.metadataValid}
                                            fluid
                                            content='Continue'
                                            onClick={(e)=>(
                                                history.push(
                                                    '/create/sensor/observedproperties'
                                                )
                                            )}/>
                                    </div>
                                </Card.Content>
                            ])}/>
                        <Route
                            path='/create/sensor/observedproperties'
                            exact={true}
                            render={() => ([
                                <Card.Content
                                    key={'fwcsc-1'}>
                                    <Card.Header>
                                        Registering a new sensor
                                    </Card.Header>
                                    <Card.Description>
                                        Each time a new speciment will be
                                        collected this is the date that will
                                        be filled by default.
                                    </Card.Description>
                                </Card.Content>,
                                <Card.Content extra
                                    key={'fwcsc-2'}>
                                    <div className='ui two buttons'>
                                        <Button
                                            primary={this.state.observedPropertiesValid}
                                            disabled={!this.state.observedPropertiesValid}
                                            fluid
                                            content='Continue'
                                            onClick={(e)=>(
                                                history.push(
                                                    '/create/sensor/featureofinterest'
                                                )
                                            )}/>
                                    </div>
                                </Card.Content>
                            ])}/>
                        <Route
                            path='/create/sensor/featureofinterest'
                            exact={true}
                            render={() => ([
                                <Card.Content
                                    key={'fwcsc-1'}>
                                    <Card.Header>
                                        Registering a new sensor
                                    </Card.Header>
                                    <Card.Description>
                                        Give your sensor a position or define
                                        o location domain
                                    </Card.Description>
                                </Card.Content>,
                                <Card.Content extra
                                    key={'fwcsc-2'}>
                                    <div className='ui two buttons'>
                                        <Button
                                            primary={this.state.foiValid}
                                            disabled={!this.state.foiValid}
                                            fluid
                                            content={'Checkout'}
                                            onClick={(e)=>{
                                                history.push(
                                                    '/create/sensor/checkout'
                                                )
                                                this.finish();
                                                // if(insertsensor.newTab){
                                                //     history.push(
                                                //         '/create/sensor/featureofinterest/map'
                                                //     )
                                                // }else{
                                                //     history.push(
                                                //         '/create/sensor/checkout'
                                                //     )
                                                //     this.finish();
                                                // }
                                            }}/>
                                    </div>
                                </Card.Content>
                            ])}/>
                        <Route
                            path='/create/sensor/featureofinterest/map'
                            exact={true}
                            render={() => ([
                                <Card.Content
                                    key={'fwcsc-1'}>
                                    <Card.Header>
                                        Registering a new sensor
                                    </Card.Header>
                                    <Card.Description>
                                        Position your sensor
                                    </Card.Description>
                                </Card.Content>,
                                <Card.Content extra
                                    key={'fwcsc-2'}>
                                    <div className='ui two buttons'>
                                        <Button
                                            primary
                                            fluid
                                            content='Checkout'
                                            onClick={(e)=>{
                                                history.push(
                                                    '/create/sensor/checkout'
                                                );
                                                this.finish();
                                            }}/>
                                    </div>
                                </Card.Content>
                            ])}/>
                    </Card>
                </div>
            </div>
        );
    }

};

export default withRouter(InsertSensorComponent);
