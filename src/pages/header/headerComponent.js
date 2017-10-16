import React, { Component } from 'react';
import { translate } from 'react-i18next';
import {
  Link
} from 'react-router-dom';

class HeaderComponent extends Component {

    render() {
        // const {login, checkCredential} = this.props;
        const { t } = this.props;
        //debugger;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">IS3</a>
                <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link"
                                to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                to="/sensors">{t('sensors')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                to="/fois">{t('featureofinterests')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                to="/fois">{t('specimen')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"
                                to="/">
                                Chart &nbsp;
                                <span className="badge badge-secondary">4</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle"
                                to="/create">
                                Add</Link>
                        </li>
                    </ul>
                </div>
                {/*<div className="row">
                    <div className="col-md-auto">
                        <Link className="btn btn-sm btn-outline-dark"
                            to="/">Home</Link>
                    </div>
                    <div className="col-md-auto">
                        <Link className="btn btn-sm btn-outline-dark"
                            to="/sensors">{t('sensors')}</Link>
                    </div>
                    <div className="col-md-auto">
                        <Link className="btn btn-sm btn-outline-dark"
                            to="/fois">{t('featureofinterests')}</Link>
                    </div>
                    <div className="col-6"></div>
                    <div className="col" style={{
                            textAlign: 'right'
                        }}>
                        <button className="btn btn-sm btn-outline-dark">
                          Chart &nbsp;
                          <span className="badge badge-secondary">4</span>
                        </button>
                    </div>
                    <div className="col-md-auto" style={{
                            textAlign: 'right'
                        }}>
                        <Link className="btn btn-sm btn-outline-dark"
                            to="/fois">Add</Link>
                    </div>
                </div>
                    */}
            </nav>
        )
    }
};

export default translate('header')(HeaderComponent);
