import React, { Component } from 'react';

// Semantic UI components
import {
    Grid,
    Image,
    Button,
    Card
} from 'semantic-ui-react';

class MaterialCards extends Component {

    handleSelected(material) {
        const {
            onSelected
        } = this.props;
        if(onSelected!==undefined){
            onSelected(material);
        }
    }

    render() {
        const {
            materials
        } = this.props;
        return (
            <Grid columns={5}>
            {
                materials.data.map((material) => (
                    <Grid.Column
                        key={"cspm-"+material.id}>
                        <Card>
                            <Image
                                src={material.image}/>
                            <Card.Content>
                                <Card.Header>
                                    {material.name}
                                </Card.Header>
                                <Card.Meta style={{
                                        wordWrap: 'break-word'
                                    }}>
                                    {material.definition}
                                </Card.Meta>
                                <Card.Description>
                                    {material.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra
                                textAlign="center">
                                <Button
                                    secondary
                                    onClick={(e) => {
                                        this.handleSelected(material);
                                    }}>
                                    Select
                                </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                )
            )}
            </Grid>
        )
    }
};

export default MaterialCards;
