import React, { Component } from 'react';

// istSOS components
import {
    Material,
    SamplingMethods,
    Uoms
} from '../../common';

// Semantic UI components
import {
    Form,
    Input,
    TextArea,
    Popup
    //Grid
} from 'semantic-ui-react';

// Date picker
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class SpecimenFormMetadata extends Component {

    constructor(props) {
        super(props);
        this.checkidentifier = false;
    }

    handleSpecimentChange(event) {
        switch (event.target.id) {
            case "specimenIdentifier":
                let si = event.target.value.replace(/[^\w-]/gi, '');
                this.props.setSpecimenIdentifier(si);
                if(this.checkidentifier){
                    clearTimeout(this.checkidentifier);
                    this.checkidentifier = false;
                }
                if(si.length > 0){
                    this.checkidentifier = setTimeout(function(){
                        if(this.props.specimenform.data.identifier.length > 0){
                            this.props.checkSpecimenIdentifier(
                                this.props.specimenform.data.identifier);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "specimenName":
                this.props.setSpecimenName(
                    event.target.value
                );
                break;
            case "specimenDescription":
                this.props.setSpecimenDescription(
                    event.target.value
                );
                break;
            case "specimenSize":
                this.props.setSpecimenSizeValue(
                    event.target.value
                );
                break;
            case "specimenCurrentLocation":
                this.props.setSpecimenCurrentLocation(
                    event.target.value
                );
                break;
            case "specimenSpecimenType":
                this.props.setSpecimenSpecimenType(
                    event.target.value
                );
                break;
            case "specimenTimeD": // /^[0-9.,]+$/
                let d = event.target.value.replace(/[^0-9-]/gi, '');
                this.props.setSpecimenSampligDate(d);
                break;
            case "specimenTimeT":
                let t = event.target.value.replace(/[^0-9:]/gi, '');
                this.props.setSpecimenSampligTime(t);
                break;
            default:
        }
    }

    handleDayClick = (day, { selected }) => {
        this.props.setSpecimenSampligDate(
            moment(day).format("YYYY-MM-DD")
        );
    }

    render() {
        const {
            specimenform,
            hidden,
            setMaterial,
            setSpecimenSizeUom
        } = this.props;
        return (
            <Form widths='equal'>
                <Form.Field required>
                    <label>Material</label>
                    <Material
                        layout="dropdown"
                        onSelected={setMaterial}/>
                </Form.Field>

                <Form.Field required>
                    <label>Identifier</label>
                    <Input
                        id="specimenIdentifier"
                        iconPosition='left'
                        icon={
                            specimenform.identifierValidated === true
                                && specimenform.identifierValid === true?
                            'check': 'delete'
                        }
                        loading={specimenform.validatingIdentifier}
                        placeholder='Assign a unique identifier to this specimen'
                        onChange={
                            this.handleSpecimentChange.bind(this)
                        }
                        value={specimenform.data.identifier}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                </Form.Field>

                <Form.Field>
                    <label>Name</label>
                    <Input
                        id="specimenName"
                        placeholder='Give this specimen a name or label'
                        onChange={
                            this.handleSpecimentChange.bind(this)
                        }
                        value={specimenform.data.name}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                </Form.Field>

                <Form.Field>
                    <label>
                        Description
                    </label>
                    <TextArea
                        id="specimenDescription"
                        rows="3"
                        placeholder="Add a description"
                        onChange={
                            this.handleSpecimentChange.bind(this)
                        }
                        value={specimenform.data.description}/>
                </Form.Field>
                {
                    hidden.indexOf('time')===-1?
                    <Form.Group widths='equal'>
                        <Form.Field
                            error={!specimenform.samplingTimeValid}>
                            <label>Sampling date {
                                specimenform.date.length>0?
                                " (YYYY-MM-DD)": null
                            }</label>
                            <Popup
                                trigger={
                                    <Input
                                        icon='calendar'
                                        iconPosition='left'
                                        id="specimenTimeD"
                                        placeholder='YYYY-MM-DD'
                                        onChange={
                                            this.handleSpecimentChange.bind(this)
                                        }
                                        value={specimenform.date}
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"/>
                                }
                                on='focus'
                                position='bottom left'>
                                <Popup.Content>
                                    <DayPicker
                                        showWeekNumbers
                                        onDayClick={this.handleDayClick}
                                        selectedDays={
                                            specimenform.date?
                                            moment(specimenform.date).toDate():
                                            undefined
                                        }
                                        todayButton="Today"/>
                                </Popup.Content>
                            </Popup>
                        </Form.Field>
                        <Form.Field
                            error={!specimenform.samplingTimeValid}>
                            <label>Time {
                                specimenform.time.length>0?
                                " (HH:MM:SS)": null
                            }</label>
                            <Input
                                icon='time'
                                iconPosition='left'
                                id="specimenTimeT"
                                placeholder='HH:MM:SS'
                                onChange={
                                    this.handleSpecimentChange.bind(this)
                                }
                                value={specimenform.time}
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"/>
                        </Form.Field>
                    </Form.Group>: null
                }
                <Form.Field>
                    <label>Sampling method</label>
                    <SamplingMethods
                        onSelected={setMaterial}/>
                </Form.Field>

                <Form.Group widths='equal'>
                    <Form.Field required>
                        <label>
                            Size
                        </label>
                        <Input
                            icon='expand'
                            iconPosition='left'
                            id="specimenSize"
                            placeholder=''
                            type='number'
                            onChange={
                                this.handleSpecimentChange.bind(this)
                            }
                            value={specimenform.data.size.value}
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"/>
                    </Form.Field>
                    <Form.Field required>
                        <label>
                            Unit of measure
                        </label>
                        <Uoms
                            onSelected={setSpecimenSizeUom}/>
                    </Form.Field>
                </Form.Group>

                <Form.Field>
                    <label>Current location</label>
                    <Input
                        icon='archive'
                        iconPosition='left'
                        id="specimenCurrentLocation"
                        placeholder={
                            "Describe the location of a physical specimen " +
                            "(a shelf in a warehouse, a drawer in a museum)"
                        }
                        onChange={
                            this.handleSpecimentChange.bind(this)
                        }
                        value={specimenform.data.currentLocation}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                </Form.Field>

                <Form.Field>
                    <label>Form of the specimen</label>
                    <Input
                        icon='cube'
                        iconPosition='left'
                        id="specimenSpecimenType"
                        placeholder={
                            "Describe the basic form of the specimen " +
                            "(polished section, core, pulp, solution)"
                        }
                        onChange={
                            this.handleSpecimentChange.bind(this)
                        }
                        value={specimenform.data.specimenType}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                </Form.Field>
            </Form>
        )
    }
};

export default SpecimenFormMetadata;
