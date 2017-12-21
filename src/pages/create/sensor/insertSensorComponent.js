import React, { Component } from 'react';
import {
  Route,
  withRouter
} from 'react-router-dom';


// istSOS components
import { foiform2entity } from '../../../common/foiForm/foiFormAction';
import {
    //Material,
    //Uoms,
    FoisMap,
    SensorForm,
    SpecimenForm,
    FoiForm,
    FoisList,
    setting
} from '../../../common';

//import Fois from '../fois/foisContainer';

// Semantic UI components
import {
    Grid,
    //Container,
    //Form,
    Card,
    //Input,
    Icon,
    Button,
    Image,
    Header,
    Divider,
    //List
} from 'semantic-ui-react';

class InsertSensorComponent extends Component {

    startPage = () => {
        const {
            insertsensor,
            selectSensorType,
            selectObservationType
        } = this.props;
        const sensorTypes = insertsensor.sensorTypes;
        const sensorTypesArr = Object.keys(sensorTypes);
        const observationTypes = insertsensor.observationTypes;
        const observationTypesArr = Object.keys(observationTypes);
        return (
            <div>
                <Header as="h3">
                    Sensor Type
                </Header>
                <Card.Group>
                    {
                        sensorTypesArr.map((id, index) => (
                            <Card
                                color = {
                                    insertsensor.sensorType === id ?
                                    'green': null
                                }
                                key={"is-st-c-"+index}>
                                <Card.Content>
                                    <Image
                                        floated='right' size='tiny'
                                        src={sensorTypes[id].icon}/>
                                    <Card.Header>
                                        {sensorTypes[id].name}
                                    </Card.Header>
                                    <Card.Meta style={{
                                            wordWrap: 'break-word'
                                        }}>
                                        {sensorTypes[id].foiType.replace(
                                            setting._foidef, ''
                                        )}
                                    </Card.Meta>
                                    <Card.Description>
                                        {sensorTypes[id].description}
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra
                                    textAlign="right">
                                    <Button
                                        onClick={e => {
                                            selectSensorType(
                                                sensorTypes[id]
                                            );
                                        }}
                                        color = {
                                            insertsensor.sensorType === id ?
                                            'green': null
                                        }>
                                        {
                                            insertsensor.sensorType === id ?
                                            <Icon name='check' />: null
                                        }
                                        Select
                                    </Button>
                                </Card.Content>
                            </Card>
                        ))
                    }
                </Card.Group>
                <Header as="h3">
                    Result Type
                </Header>
                <Card.Group>
                    {
                        observationTypesArr.map((id, index) => (
                            <Card
                                key={"is-rt-c-"+index}
                                color = {
                                    insertsensor.observationType === id ?
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
                                            insertsensor.observationType === id ?
                                            'green': null
                                        }
                                        onClick={e => {
                                            selectObservationType(id);
                                        }}>
                                        {
                                            insertsensor.observationType === id ?
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
        )
    }

    finish = () => {
        const {
            register_sensor,
            insertsensor,
            sensorform,
            specimenform,
            fois,
            //foisstate,
            foiform
        } = this.props;

        debugger;

        let observable_property = [],
            observation_type = [],
            oty_check = [],
            config = null;

        for (let c = 0, l = sensorform.observableProperties.length; c<l; c++){
            const op = sensorform.observableProperties[c];
            observable_property.push({
                "definition": op.observedProperty.definition,
                "uom": op.uom.name,
                "type": op.resultType.definition
            });
            if (oty_check.indexOf(op.resultType.definition)===-1){
                oty_check.push(op.resultType.definition)
                observation_type.push(op.resultType.definition);
            }
        }
        if(insertsensor.observationType === '2'){
            observation_type.push(setting._COMPLEX_OBSERVATION);
        }

        // Add the speciment template if sensor type is SF_Specimen
        if (insertsensor.sensorType === '3' && !insertsensor.skipSpecimen){
            config = {
                "specimen": specimenform.data
            };
        }
        // Check if FOI is new of an existing is selected
        let sampled_foi;
        if (insertsensor.newfoi === true){
            sampled_foi = foiform2entity(foiform)
        }else{
            sampled_foi = fois.selected
        }

        // OPTIONAL METADATA
        let pd = {};
        let hasPd = false;

        // General Info
        if((sensorform.keywords.length
            + sensorform.alias.length
            + sensorform.description.length) > 0){
            pd["general_info"] = {};
            if (sensorform.keywords.length>0){
                hasPd = true;
                pd["general_info"]["keywords"] = sensorform.keywords;
            }
            if (sensorform.alias.length>0){
                hasPd = true;
                pd["general_info"]["alias"] = sensorform.alias;
            }
            if (sensorform.description.length>0){
                hasPd = true;
                pd["general_info"]["description"] = sensorform.description;
            }
        }

        // Identification
        if(sensorform.manufacturer != null || (
                (
                    sensorform.modelNumber.length
                    + sensorform.serialNumber.length
                ) > 0
            )){
            pd["identification"] = {};
            if (sensorform.manufacturer != null){
                hasPd = true;
                pd["identification"][
                    "manufacturer"] = sensorform.manufacturer.username;
            }
            if (sensorform.modelNumber.length>0){
                hasPd = true;
                pd["identification"][
                    "model_number"] = sensorform.modelNumber;
            }
            if (sensorform.serialNumber.length>0){
                hasPd = true;
                pd["identification"][
                    "serial_number"] = sensorform.serialNumber;
            }
        }

        // Capabilities
        if((sensorform.samplingTimeResolution.length
            + sensorform.acquisitionTimeResolution.length
            + sensorform.storageCapacity.length
            + sensorform.batteryCapacity.length) > 0){
            pd["capabilities"] = {};
            if (sensorform.samplingTimeResolution.length>0){
                hasPd = true;
                pd["capabilities"][
                    "sampling_time_resolution"] = sensorform.samplingTimeResolution;
            }
            if (sensorform.acquisitionTimeResolution.length>0){
                hasPd = true;
                pd["capabilities"][
                    "acquisition_time_resolution"] = sensorform.acquisitionTimeResolution;
            }
            if (sensorform.storageCapacity.length>0){
                hasPd = true;
                pd["capabilities"][
                    "storage_capacity"] = sensorform.storageCapacity;
            }
            if (sensorform.batteryCapacity.length>0){
                hasPd = true;
                pd["capabilities"][
                    "battery_capacity"] = sensorform.batteryCapacity;
            }
        }

        // Contacts
        if(sensorform.owner != null ||
                sensorform.operator != null){
            pd["contact"] = {};
            if (sensorform.owner != null){
                hasPd = true;
                pd["contact"][
                    "owner"] = sensorform.owner.username;
            }
            if (sensorform.operator != null){
                hasPd = true;
                pd["contact"][
                    "operator"] = sensorform.operator.username;
            }
        }

        register_sensor({
            "name": sensorform.name,
            "fixed": insertsensor.sensorTypes[
                    insertsensor.sensorType
                ].fixed,
            "procedure": sensorform.name,
            "procedure_description_format": [
                "http://www.opengis.net/sensorML/1.0.1"
            ],
            "observable_properties": observable_property,
            "observation_types": observation_type,
            "foi_type": insertsensor.sensorTypes[
                    insertsensor.sensorType
                ].foiType,
            "sampled_foi": sampled_foi,
            "config": config,
            ...(
                hasPd? {
                    "procedure_description": pd
                }: null
            )
        });
    }

    render() {
        const {
            //observableproperties,
            history,
            specimenform,
            insertsensor,
            skipSpecimentPage,
            sensorform,
            foiform,
            toggleFoiEdit,
            fois
        } = this.props;
        return (
            <Grid columns='equal'>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column>
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
                            <div>
                                <Header as='h3'>
                                    Specimen template
                                </Header>
                                <SpecimenForm
                                    hidden={['time']}/>
                            </div>
                        )}/>
                    <Route
                        path='/create/sensor/specimen/processing'
                        exact={true}
                        render={(routeProps) => (
                            <div>
                                <Header as='h3'>
                                    Specimen template
                                </Header>
                                <SpecimenForm
                                    layout="processing"/>
                            </div>
                        )}/>
                    <Route
                        path='/create/sensor/metadata'
                        exact={true}
                        render={(routeProps) => (
                            <div>
                                <Header as='h3'>
                                    Sensor metadata
                                </Header>
                                <SensorForm layout="metadata"/>
                            </div>
                        )}/>
                    <Route
                        path='/create/sensor/observedproperties'
                        exact={true}
                        render={(routeProps) => {
                            if (insertsensor.observationType === '1'){
                                return <SensorForm
                                    single={true}
                                    layout="observedproperties"/>;
                            }else{
                                return <SensorForm
                                    layout="observedproperties"/>;
                            }
                        }}/>
                    <Route
                        path='/create/sensor/featureofinterest'
                        exact={true}
                        render={(routeProps) => (
                            <div>
                                <Header as='h3'>
                                    Feature of interest
                                </Header>
                                <Button.Group>
                                    <Button
                                        positive={!insertsensor.newfoi}
                                        onClick={e => {
                                            toggleFoiEdit(false);
                                        }}>Select existing</Button>
                                    <Button.Or />
                                    <Button
                                        positive={insertsensor.newfoi}
                                        onClick={e => {
                                            toggleFoiEdit(true);
                                        }}>Create new</Button>
                                </Button.Group>
                                {
                                    insertsensor.newfoi?
                                    <FoiForm
                                        hideButton={true}
                                        hide={{
                                            coordinates: true
                                        }}/>:
                                    <FoisList/>
                                }
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
                </Grid.Column>
                <Grid.Column width={3}>
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
                                                    insertsensor.sensorType !== null &&
                                                    insertsensor.observationType !== null)}
                                            disabled={!(
                                                    insertsensor.sensorType !== null &&
                                                    insertsensor.observationType !== null)}
                                            content='Continue'
                                            onClick={(e) => {
                                                if (insertsensor.sensorType === '3'){
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
                                            primary={specimenform.valid}
                                            disabled={!specimenform.valid}
                                            fluid
                                            content='Continue'
                                            onClick={(e)=>(
                                                history.push(
                                                    '/create/sensor/specimen/processing'
                                                )
                                            )}/>
                                        <Divider horizontal>Or</Divider>
                                        <Button
                                            primary={!specimenform.valid}
                                            secondary={specimenform.valid}
                                            fluid
                                            content='Skip'
                                            onClick={(e)=>{
                                                skipSpecimentPage();
                                                history.push(
                                                    '/create/sensor/metadata'
                                                )
                                            }}/>
                                    </div>
                                </Card.Content>
                            ])}/>
                        <Route
                            path='/create/sensor/specimen/processing'
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
                                            fluid
                                            content='Continue'
                                            onClick={(e)=>(
                                                history.push(
                                                    '/create/sensor/metadata'
                                                )
                                            )}/>
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
                                            primary={sensorform.valid}
                                            disabled={!sensorform.valid}
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
                                            primary={(
                                                (
                                                    insertsensor.observationType === '1'
                                                    && sensorform.observableProperties.length === 1
                                                ) || (
                                                    insertsensor.observationType === '2'
                                                    && sensorform.observableProperties.length > 1
                                                )
                                            )}
                                            disabled={!(
                                                (
                                                    insertsensor.observationType === '1'
                                                    && sensorform.observableProperties.length === 1
                                                ) || (
                                                    insertsensor.observationType === '2'
                                                    && sensorform.observableProperties.length > 1
                                                )
                                            )}
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
                                            primary={(
                                                (!insertsensor.newfoi && fois.selected!==null) ||
                                                (insertsensor.newfoi && foiform.valid===true)
                                            )}
                                            disabled={!(
                                                (!insertsensor.newfoi && fois.selected!==null) ||
                                                (insertsensor.newfoi && foiform.valid===true)
                                            )}
                                            fluid
                                            content={
                                                insertsensor.newfoi? 'Continue': 'Checkout'
                                            }
                                            onClick={(e)=>{
                                                if(insertsensor.newfoi){
                                                    history.push(
                                                        '/create/sensor/featureofinterest/map'
                                                    )
                                                }else{
                                                    history.push(
                                                        '/create/sensor/checkout'
                                                    )
                                                    this.finish();
                                                }
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
                </Grid.Column>
            </Grid>
        )
    }
};

export default withRouter(InsertSensorComponent);
