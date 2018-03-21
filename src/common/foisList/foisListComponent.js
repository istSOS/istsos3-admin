import React, { Component } from 'react';

import {setting} from '../setting';

// Semantic UI components
import { Table } from 'semantic-ui-react';

class FoisListComponent extends Component {

    constructor(props) {
        super(props);
        this.onSelected = this.onSelected.bind(this);
    }

    onSelected(foi) {
        const {
            onSelected,
            foiSelected
        } = this.props;
        foiSelected(foi.identifier);
        if(onSelected!==undefined){
            onSelected({
                ...foi
            });
        }
    }

    render() {
        const {
            fois
        } = this.props;
        return (
            <Table basic='very' selectable fixed compact singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            Feature of Interest
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Description
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    fois.data.map((foi, index) => (
                        <Table.Row
                            active={
                                fois.selected === foi.identifier? true: false
                            }
                            style={{
                                cursor: 'pointer'
                            }}
                            key={"foi-list-row-"+index}
                            onClick={e => {
                                this.onSelected({
                                    ...foi
                                });
                            }}>
                            <Table.Cell>
                                <a href={foi.identifier}
                                    rel='noreferrer noopener'
                                    target="_blank"
                                    style={{
                                        fontSize: '1.28571429rem',
                                        textDecoration: 'underline'
                                    }}>
                                    {foi.name}
                                </a>
                                <br/>
                                <span style={{color: "grey"}}>
                                {
                                    foi.type?
                                    foi.type.replace(
                                        setting._foidef, ""):"System domain"
                                }
                                </span>
                            </Table.Cell>
                            <Table.Cell
                                title={foi.description}>
                                {foi.description}
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
        )
    }
};

export default FoisListComponent;
