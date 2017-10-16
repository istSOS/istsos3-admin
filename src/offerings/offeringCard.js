import React, { Component } from 'react';
import { translate } from 'react-i18next';
import moment from 'moment';


class OfferingCard extends Component {
    /*constructor(props) {
        super(props);
    }*/
    render() {
        const {/*t, */offering} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {offering.offering}
                    </h4>
                    <h6 className="card-subtitle mb-2 text-muted">
                        <i style={{
                                fontSize: '14px'
                            }}
                            className="material-icons">place</i> {offering.foi_name}
                    </h6>
                    <p className="card-text">
                        <span>
                            {moment(offering.begin_pos).format('DD MMM YYYY, HH:MM')}
                        </span>
                        <br/>
                        <span style={{
                                fontWeight: 'bold'
                            }}>
                            {moment(offering.end_pos).format('DD MMM YYYY, HH:MM')}
                        </span>
                    </p>
                    {/*<button type="button"
                        className="btn btn-primary">
                        Add to favorites</button>
                    &nbsp;*/}
                    <button type="button"
                        className="btn btn-sm btn-primary">Add to chart</button>
                </div>
            </div>
        )
    }
};

export default translate('offerings')(OfferingCard);
