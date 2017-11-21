import React, { Component } from 'react';

// Semantic UI components
import { List } from 'semantic-ui-react';

class DomainListComponent extends Component {

    render() {
        const {
            domains
        } = this.props;
        return (
            <List divided relaxed>
                {
                    domains.data.map((domain, idx) => (
                        <List.Item key={"dl-" + domain.id}>
                            <List.Content>
                                <List.Header as='a'>{domain.name}</List.Header>
                                <List.Description>{domain.description}</List.Description>
                            </List.Content>
                        </List.Item>
                    ))
                }
            </List>
        )
    }
};

export default DomainListComponent;
