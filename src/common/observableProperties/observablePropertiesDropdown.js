import React, { Component } from 'react';

// Semantic UI components
import {
    Header,
    Dropdown
} from 'semantic-ui-react'

class ObservablePropertiesDropdown extends Component {

    render() {
        const {
            observableproperties,
            onSelected
        } = this.props;
        var options = observableproperties.data.map((oty, key) => {
            return {
                key: oty.id,
                value: oty.definition,
                text: oty.name,
                content: <Header
                    content={oty.name}
                    subheader={oty.definition} />
            }
        })
        return (
            <Dropdown
                style={{
                    marginBottom: '1em'
                }}
                placeholder='Observable properties'
                fluid multiple selection
                options={options}
                onChange={(event, data) => {
                    if(onSelected!==undefined){
                        onSelected(data.value);
                    }
                }} />
        )
    }
};

export default ObservablePropertiesDropdown;
