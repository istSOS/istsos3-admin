import React, { Component } from 'react';
import { translate } from 'react-i18next';
import {
    withRouter
} from 'react-router-dom';

// Semantic UI components
import {
    Menu,
    Dropdown,
    Icon
} from 'semantic-ui-react';

class HeaderComponent extends Component {

    render() {
        // const {login, checkCredential} = this.props;
        const { /*t, */location, history } = this.props;
        return (
            <Menu stackable inverted style={{
                    backgroundColor: 'rgb(31, 117, 51)',
                    boxShadow: "rgba(50, 50, 50, 0.75) 0px 2px 2px 0px",
                    margin: '0px',
                    borderRadius: '0'
                }}>
                <Menu.Item style={{
                        "fontWeight": "bold",
                        //"color": "#65f102"
                    }}>
                    <img src='/img/banner.png' alt="logo" style={{
                        //margin: '0 7px',
                        height: '16px',
                        width: '101px'
                    }}/>
                </Menu.Item>
                <Menu.Item
                    active={location === '/'}
                    onClick={
                        e => {
                            history.push("/");
                        }
                    }>
                    Home
                </Menu.Item>
                <Menu.Item
                    active={location === '/sensors'}
                    onClick={
                        e => {
                            history.push("/sensors");
                        }
                    }>
                    Data viewer
                </Menu.Item>
                {/*<Menu.Item
                    active={location === '/fois'}
                    onClick={
                        e => {
                            history.push("/fois");
                        }
                    }>
                    {t('featureofinterests')}
                </Menu.Item>
                <Menu.Item
                    active={location === '/charts'}
                    onClick={
                        e => {
                            history.push("/");
                        }
                    }>
                    Chart
                    <Label circular color="red">2</Label>
                </Menu.Item>*/}

                <Menu.Menu position='right'>
                    <Dropdown item text='Add &nbsp;' icon="add">
                        <Dropdown.Menu>
                            <Dropdown.Item
                                onClick={
                                    e => {
                                        history.push("/create/specimen");
                                    }
                                }>
                                <Icon name='table' />
                                Data
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={
                                    e => {
                                        history.push("/create/sensor");
                                    }
                                }>
                                <Icon name='podcast' />
                                Sensor
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={
                                    e => {
                                        history.push("/create/featureofinterest");
                                    }
                                }>
                                <Icon name='marker' />
                                Feature of interest
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={
                                    e => {
                                        history.push("/create/specimen");
                                    }
                                }>
                                <Icon name='lab' />
                                Specimen
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item text='Settings &nbsp;' icon='setting'>
                        <Dropdown.Menu>
                            <Dropdown.Header>System settings</Dropdown.Header>
                            <Dropdown.Item>Database</Dropdown.Item>
                            <Dropdown.Header>Personal settings</Dropdown.Header>
                            <Dropdown.Item>User</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        )
    }
};

export default translate('header')(
    withRouter(HeaderComponent)
);
