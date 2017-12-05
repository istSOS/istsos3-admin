import React, { Component } from 'react';


// istSOS components
import { foiform2entity } from '../../../common/foiForm/foiFormAction';
import {
    //Material,
    //Uoms,
    SensorForm,
    SpecimenForm,
    setting
} from '../../../common';

import Fois from '../fois/foisContainer';

// Semantic UI components
import {
    Grid,
    Container,
    //Form,
    Card,
    //Input,
    Icon,
    Button,
    Image,
    Header,
    Divider,
    List
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

    getPage() {
        const {
            insertsensor,
            setWizardPage
        } = this.props;
        if (insertsensor.wizardPage === 1){
            return this.startPage();
        }else if(insertsensor.wizardPage === 2){
            return (
                <div>
                    <Header as='h3'>
                        Specimen template
                    </Header>
                    <p>
                        Each time a new speciment will be collected this is
                        the date that will be filled by default.
                    </p>
                    <SpecimenForm
                        hidden={['time']}/>
                </div>
            );
        }else if(insertsensor.wizardPage === 3){
            return (
                <div>
                    <Header as='h3'>
                        Specimen template
                    </Header>
                    <p>
                        Each time a new speciment will be collected this is
                        the date that will be filled by default.
                    </p>
                    <SpecimenForm
                        layout="processing"/>
                </div>
            );
        }else if(insertsensor.wizardPage === 4){
            return <SensorForm layout="metadata"/>;
        }else if(insertsensor.wizardPage === 5){
            if (insertsensor.observationType === '1'){
                return <SensorForm
                    single={true}
                    layout="observedproperties"/>;
            }else{
                return <SensorForm
                    layout="observedproperties"/>;
            }
        }else if(insertsensor.wizardPage === 6){
            // Configure the Foi creation page to
            // the specific type
            return <Fois
                forceSamplingType={
                    insertsensor.sensorTypes[
                        insertsensor.sensorType
                    ].foiType
                }
                hideButton={true}/>;
        }else if(insertsensor.wizardPage === 7){
            // Configure the Foi creation page to
            // the specific type
            return <Container text textAlign='center'>
                <Header as='h2' icon>
                    <Icon name='flag checkered' circular />
                    <Header.Content>
                        Sensor Registered Successfully
                    </Header.Content>
                </Header>
                <p>
                    Would you like to register a new sensor?
                </p>
                <p>
                    <Button
                        primary
                        content='Yes'
                        onClick={e => {
                            setWizardPage(1);
                        }}/>
                </p>
            </Container>;
        }else{
            return null;
        }
    }

    handleNext = () => {
        const {
            insertsensor,
            nextWizardPage,
            setWizardPage,
        } = this.props;
        const page = insertsensor.wizardPage;
        if(page === 1){
            if (insertsensor.sensorType === '3'){
                nextWizardPage();
            }else{
                setWizardPage(4);
            }
        } else if(page === 5){
            // Check if sensorform is valid
            nextWizardPage();
        }else {
            nextWizardPage();
        }
    }

    finish = () => {
        const {
            register_sensor,
            insertsensor,
            sensorform,
            specimenform,
            fois,
            foisstate,
            foiform
        } = this.props;

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
        if (foisstate.editing === true){
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
            "observable_property": observable_property,
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

    getCurrentStatus = () => {
        const {
            insertsensor,
            sensorform
        } = this.props;
        const page = insertsensor.wizardPage;
        let content = [], meta = [];

        if(page > 1){
            meta.push(
                <List.Item key="is_meta_1">
                    <List.Icon name='check' />
                    <List.Content>
                        <List.Header>Sensor type</List.Header>
                        <List.Description>
                            {insertsensor.sensorTypes[
                                insertsensor.sensorType
                            ].name}
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
            meta.push(
                <List.Item key="is_meta_2">
                    <List.Icon name='check' />
                    <List.Content>
                        <List.Header>Result type</List.Header>
                        <List.Description>
                            {insertsensor.observationTypes[
                                insertsensor.observationType
                            ].name}
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
        }
        if(page > 4){
            meta.push(
                <List.Item key="is_meta_3">
                    <List.Icon name='check' />
                    <List.Content>
                        <List.Header>Name</List.Header>
                        <List.Description>
                            {sensorform.name}
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
        }
        if(page > 5){
            meta.push(
                <List.Item key="is_meta_4">
                    <List.Icon name='check' />
                    <List.Content>
                        <List.Header>
                            Observed properties ({sensorform.observableProperties.length})
                        </List.Header>
                        <List.Description>
                            {
                                sensorform.observableProperties.map((op, index) => (
                                    <div key={"is_meta_op_"+index}>
                                        - {op.observedProperty.name}
                                    </div>
                                ))
                            }
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
        }

        if (page > 1){
            content.push(<List key="is_meta_list">{meta}</List>);
        }

        if(page === 1){
            content.push(
                <div key="is_desc">
                    Please, select the sensor type and
                    the data format for this sensor of the new sensor.
                </div>
            )
        }else if (page === 4) {
            content.push(
                <div key="is_desc">
                    Fill all the metadata describing the new sensor.
                </div>
            )
        }else if (page === 5) {
            if (insertsensor.observationType === "1"){
                content.push(
                    <div key="is_desc">
                        Set one observable property
                    </div>
                )
            }else if (insertsensor.observationType === "2"){
                content.push(
                    <div key="is_desc">
                        Add at least two observable properties
                    </div>
                )
            }
        }
        return content;
    }

    getCurrentButton = () => {
        const {
            foisstate,
            insertsensor,
            sensorform,
            specimenform,
            fois,
            foiform,
            skipSpecimentPage
        } = this.props;
        const page = insertsensor.wizardPage;
        if(page === 1 && (
                insertsensor.sensorType !== null &&
                insertsensor.observationType !== null)){
            return (
                <div className='ui two buttons'>
                    <Button
                        primary
                        content='Continue'
                        onClick={this.handleNext.bind(this)}/>
                </div>
            )
        }else if(page === 2){
            return (
                <div>
                    {
                        specimenform.valid?
                        <Button
                            primary={specimenform.valid}
                            disabled={!specimenform.valid}
                            fluid
                            content='Continue'
                            onClick={this.handleNext.bind(this)}/>:
                        <Button
                            disabled
                            fluid
                            content='Continue'/>

                    }
                    <Divider horizontal>Or</Divider>
                    <Button
                        primary={!specimenform.valid}
                        secondary={specimenform.valid}
                        fluid
                        content='Skip'
                        onClick={skipSpecimentPage}/>
                </div>
            )
        }else if(page === 3){
            return (
                <div className='ui two buttons'>
                    <Button
                        primary
                        content='Continue'
                        onClick={this.handleNext.bind(this)}/>
                </div>
            )
        }else if(page === 4 && sensorform.valid /*sensorform is valid*/){
            return (
                <div className='ui two buttons'>
                    <Button
                        primary
                        content='Continue'
                        onClick={this.handleNext.bind(this)}/>
                </div>
            )
        }else if(page === 5 && (
                (
                    insertsensor.observationType === '1'
                    && sensorform.observableProperties.length === 1
                ) || (
                    insertsensor.observationType === '2'
                    && sensorform.observableProperties.length > 1
                )
            )){
            return (
                <div className='ui two buttons'>
                    <Button
                        primary
                        content='Continue'
                        onClick={this.handleNext.bind(this)}/>
                </div>
            )
        }else if (page === 6 && (
                (!foisstate.editing && fois.selected!==null) ||
                (foisstate.editing && foiform.valid===true))) {
            return (
                <div className='ui two buttons'>
                    <Button
                    primary
                    content='Checkout'
                    onClick={this.finish.bind(this)}/>
                </div>
            );
        }else{
            return (
                <div className='ui two buttons'>
                    <Button
                    disabled
                    content='Continue'/>
                </div>
            );
        }
    }

    render() {
        const {
            //observableproperties,
            insertsensor
        } = this.props;
        return (
            <Grid columns='equal'>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column>
                    {
                        this.getPage()
                    }
                </Grid.Column>
                <Grid.Column width={3}>
                    {
                        insertsensor.wizardPage === 7? null:
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    Registering a new sensor
                                    &nbsp; (p. {insertsensor.wizardPage})
                                </Card.Header>
                                {/*<Card.Meta>
                                    {
                                        insertsensor.sensorType !== null?
                                        insertsensor.sensorTypes[
                                            insertsensor.sensorType
                                        ].name: ""
                                    }
                                </Card.Meta>*/}
                                <Card.Description>
                                    {
                                        this.getCurrentStatus()
                                    }
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                {
                                    this.getCurrentButton()
                                }
                            </Card.Content>
                        </Card>
                    }
                </Grid.Column>
            </Grid>
        )
    }
};

export default InsertSensorComponent;
