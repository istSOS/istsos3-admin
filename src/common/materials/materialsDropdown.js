import React, { Component } from 'react';

// Semantic UI components
import { Form, Header } from 'semantic-ui-react'

class MaterialDropdown extends Component {
    handleChange(event, data) {
        const {
            onSelected,
            materials,
            materialSelected
        } = this.props;
        for (let key in Object.keys(materials.data)) {
            if(materials.data[key].definition === data.value){
                materialSelected(data.value);
                if(onSelected!==undefined){
                    onSelected({
                        ...materials.data[key]
                    });
                }
                break;
            }
        }
    }
    render() {
        const {
            materials
        } = this.props;
        var options = materials.data.map((material) => {
            return {
                key: "mat-opt-" + material.id,
                value: material.definition,
                text: material.name,
                content: <Header
                content={material.name}
                subheader={material.definition}/>
            }
        });
        return (
            <Form.Select
                fluid={true}
                options={options}
                placeholder='Select the material'
                value={
                    materials.selected !== null?
                    materials.selected: null
                }
                onChange={this.handleChange.bind(this)}/>
        )
    }
};

export default MaterialDropdown;
