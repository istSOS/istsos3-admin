import React, { Component } from 'react';
import { translate } from 'react-i18next';
import {
  Link
} from 'react-router-dom';

class CreatorsPageComponent extends Component {

    render() {
        //const {t} = this.props;
        return (
            <div className='container-fluid' style={{
                    textAlign: "right"
                }}>
                <Link className="nav-link"
                    to="/create/sensor">New sensor</Link>
                <Link className="nav-link"
                    to="/create/specimen">New feature of interest</Link>
                <Link className="nav-link"
                    to="/create/specimen">New specimen</Link>
            </div>
        )
    }
};

export default translate('offerings')(CreatorsPageComponent);
