import React, { Component } from 'react';

// istSOS components
import {
    SamplingTypes,
    setting
} from '../../common';

// Semantif UI components
import {
    Form,
    Input,
    TextArea,
    Button
} from 'semantic-ui-react'

const color = "black";

class FoiFormComponent extends Component {

    constructor(props) {
        super(props);
        this.checkname = false;
        this.checkidentifier = false;
    }

    getGeoField() {
        const {
            foiform,
            foiPointXChanged,
            foiPointYChanged,
            foiPointZChanged
        } = this.props;
        let geom = null;
        if(foiform.type !== undefined){
            switch (foiform.type) {
                case setting._SAMPLING_POINT:
                    geom = (
                        <Form.Group widths='equal'>
                            <Form.Field>
                                <label
                                    color={color}
                                    pointing='below'>X *</label>
                                <Input placeholder='X Coordinate'
                                    type="number"
                                    onChange={(e, value) => {
                                        foiPointXChanged(e.target.value);
                                    }}
                                    value={foiform.point.x}/>
                            </Form.Field>
                            <Form.Field>
                                <label
                                    color={color}
                                    pointing='below'>Y *</label>
                                <Input placeholder='Y Coordinate'
                                    type="number"
                                    onChange={e => {
                                        foiPointYChanged(e.target.value);
                                    }}
                                    value={foiform.point.y}/>
                            </Form.Field>
                            <Form.Field>
                                <label
                                    color={color}
                                    pointing='below'>Z</label>
                                <Input placeholder='Z Coordinate'
                                    type="number"
                                    onChange={e => {
                                        foiPointZChanged(e.target.value);
                                    }}
                                    value={foiform.point.z}/>
                            </Form.Field>
                        </Form.Group>
                    );
                    break;
                default:
                    break;
            }
        }
        return geom;
    }

    handleChange(event) {
        switch (event.target.id) {
            case "foiFormName":
                let fn = event.target.value; //.replace(/[^\w\s]/gi, '');
                this.props.foiNameChanged(fn);
                if(this.checkname){
                    clearTimeout(this.checkname);
                    this.checkname = false;
                }
                if(fn.length > 0){
                    this.checkname = setTimeout(function(){
                        if(this.props.foiform.name.length > 0){
                            this.props.checkFoiName(
                                this.props.foiform.name);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "foiFormIdentifier":
                let fi = event.target.value.replace(/[^\w]/gi, '');
                this.props.foiIdentifierChanged(fi);
                if(this.checkidentifier){
                    clearTimeout(this.checkidentifier);
                    this.checkidentifier = false;
                }
                if(fi.length > 0){
                    this.checkidentifier = setTimeout(function(){
                        if(this.props.foiform.identifier.length > 0){
                            this.props.checkFoiIdentifier(
                                this.props.foiform.identifier);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "foiFormDescription":
                this.props.foiDescriptionChanged(
                    event.target.value
                );
                break;
            default:
        }
    }

    render() {
        const {
            create_foi,
            foiSamplingSelected,
            foiform
        } = this.props;
        let hideButton = false;
        if(this.props.hideButton===true){
            hideButton = true;
        }
        return (
            <Form style={{
                    marginLeft: '1rem'
                }}>
                <Form.Field>
                    <label
                        color={color}
                        pointing='below'>Name *</label>
                    <Input
                        id="foiFormName"
                        iconPosition='left'
                        icon={
                            foiform.nameValidated === true && foiform.nameValid === true?
                            'check': 'delete'
                        }
                        loading={foiform.validatingName}
                        placeholder='Label this feature of interest..'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={foiform.name}/>
                </Form.Field>
                <Form.Field>
                    <label
                        color={color}
                        pointing='below'>Identifier *</label>
                    <Input
                        id="foiFormIdentifier"
                        iconPosition='left'
                        icon={
                            foiform.identifierValidated === true && foiform.identifierValid === true?
                            'check': 'delete'
                        }
                        loading={foiform.validatingIdentifier}
                        placeholder='Assigns a unique identifier..'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={foiform.identifier}/>
                </Form.Field>
                <Form.Field>
                    <label
                        color={color}
                        pointing='below'>
                        Description
                    </label>
                    <TextArea
                        id="foiFormDescription"
                        rows="3"
                        placeholder="Add a description"
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={foiform.description}/>
                </Form.Field>

                <Form.Field>
                    <label
                        color={color}
                        pointing='below'>
                        Sampling Type
                    </label>
                    <SamplingTypes
                        onSelected = {foiSamplingSelected}
                        value = {foiform.type}
                        disabled = {foiform.typeForced}/>
                </Form.Field>

                {this.getGeoField()}

                {
                    hideButton?
                        null:
                        foiform.valid?
                        <Button primary
                            onClick={e => {
                                create_foi(foiform);
                            }}>Register</Button>:
                        <Button
                            disabled
                            content='Register'/>
                }

            </Form>
        )
    }
};

export default FoiFormComponent;
