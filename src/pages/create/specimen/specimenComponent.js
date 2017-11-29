import React, { Component } from 'react';

// istSOS components
import {
    SensorsList,
    SpecimenForm
} from '../../../common';

// Semantic UI components
import {
    Grid,
    Header,
    Button,
    Card,
    List
} from 'semantic-ui-react';

class SpecimenComponent extends Component {

    getPage() {
        const {
            insertspecimen,
            sensorsList
        } = this.props;
        if (insertspecimen.wizardPage === 1){
            return (
                <div>
                    <Header as='h3'>
                        Registered procedures with specimens
                    </Header>
                    <p>
                        Please, select the procedure for witch you have
                        sampled this specimen.
                    </p>
                    <SensorsList
                        filters={{
                            specimen: true
                        }}/>
                </div>
            );
        }else if (insertspecimen.wizardPage === 2){
            return (
                <div>
                    <Header as='h3'>
                        Specimen metadata
                    </Header>
                    <SpecimenForm
                        template={sensorsList.selected.config.specimen}
                        layout="metadata"/>
                </div>
            );
        }else if (insertspecimen.wizardPage === 3){
            return (
                <div>
                    <Header as='h3'>
                        Specimen processing
                    </Header>
                    <SpecimenForm
                        layout="processing"/>
                </div>
            );
        }else{
            return null;
        }
    }

    getCurrentStatus = () => {
        const {
            insertspecimen,
            sensorsList
        } = this.props;
        const page = insertspecimen.wizardPage;
        let content = [], meta = [];

        if(page > 1){
            meta.push(
                <List.Item key="isp_meta_1">
                    <List.Icon name='check' />
                    <List.Content>
                        <List.Header>Procedure</List.Header>
                        <List.Description>
                            {sensorsList.selected.procedure}
                        </List.Description>
                    </List.Content>
                </List.Item>
            )
        }

        if (page > 1){
            content.push(<List key="isp_meta_list">{meta}</List>);
        }

        if (page === 1){
            content.push(
                <div key="isp_desc">
                    Please, select the procedure for witch you have
                    sampled this specimen.
                </div>
            )
        }else if (page === 2){
            content.push(
                <div key="isp_desc">
                    Fill all the metadata regarding your specimen
                </div>
            )
        }

        return content;
    }

    getCurrentButton = () => {
        const {
            insertspecimen,
            specimenform,
            sensorsList,
            nextWizardPage
        } = this.props;
        const page = insertspecimen.wizardPage;

        if(page === 1 && (
                sensorsList.selected !== null)){
            return (
                <div className='ui two buttons'>
                    <Button
                        primary
                        content='Continue'
                        onClick={nextWizardPage}/>
                </div>
            )
        }else if(page === 2 && (
                specimenform.valid === true)){
            return (
                <div className='ui two buttons'>
                    <Button
                        primary
                        content='Continue'
                        onClick={nextWizardPage}/>
                </div>
            )
        }else if(page === 2 && (
                specimenform.valid === false)){
            return (
                <div className='ui two buttons'>
                    <Button
                    disabled
                    content='Continue'/>
                </div>
            )
        }else if(page === 3 && (
                specimenform.valid === true)){
            return (
                <div className='ui two buttons'>
                    <Button
                        primary
                        content='Checkout'
                        onClick={this.finish.bind(this)}/>
                </div>
            )
        }else if(page === 2 && (
                specimenform.valid === false)){
            return (
                <div className='ui two buttons'>
                    <Button
                    disabled
                    content='Checkout'/>
                </div>
            )
        }else{
            return (
                <div className='ui two buttons'>
                    <Button
                    disabled
                    content='Continue'/>
                </div>
            );
        }
        //return null;
    }

    finish = () => {
        const {
            sensorsList,
            specimenform,
            createSpecimen
        } = this.props;
        let data = {
            ...specimenform.data
        };
        data.offering = sensorsList.selected.offering;
        data.sampledFeature.href = sensorsList.selected.sampled_foi;
        createSpecimen(data);
    }

    render() {
        const {
            insertspecimen
        } = this.props;
        return (
            <Grid columns='equal'>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column>
                    {this.getPage()}
                </Grid.Column>
                <Grid.Column width={3}>
                    {
                        insertspecimen.wizardPage === 6? null:
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    Registering a new specimen
                                </Card.Header>
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

export default SpecimenComponent;
