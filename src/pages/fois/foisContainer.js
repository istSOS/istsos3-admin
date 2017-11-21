import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import DomainList from '../../common/domainList/domainListContainer';
import FoisList from '../../common/foisList/foisListContainer';
import FoisMap from '../../common/foisMap/foisMapContainer';

// Semantic UI components
import { Grid } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import { Label } from 'semantic-ui-react';

class Fois extends Component {

    render() {
        const {
            domains,
            fois
        } = this.props;
        return(
            <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Header as='h3'>
                            Domains
                            {
                                domains.data.length>0?
                                <Label color='black' circular>
                                    {domains.data.length}
                                </Label>: null
                            }
                        </Header>
                        <DomainList/>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h3'>
                            Feature of Interests
                            {
                                fois.data.length>0?
                                <Label color='black' circular>
                                    {fois.data.length}
                                </Label>: null
                            }
                        </Header>
                        <FoisList/>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <FoisMap/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        domains: state.domains,
        fois: state.fois
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Fois));
