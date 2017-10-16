import React, { Component } from 'react';
import { translate } from 'react-i18next';

import OfferingCard from './offeringCard'

class offeringsListComponent extends Component {

    render() {
        const {t, offerings} = this.props;
        return (
            <div className='container-fluid'>
                <div
                    style={{
                        fontSize: '1.4em',
                        fontWeight: 'bold',
                        padding: "16px 0px 16px 0px"
                    }}>{t('offeringsList')}</div>
                <div className="row">
                    <div className="col">
                        {
                            offerings.isFetching ?
                            <div>{t('loading')}</div>:
                            offerings.data.map((offering, key) => (
                                <div key={'row-'+offering.offering}>
                                    <OfferingCard
                                        offering = {offering}/>
                                    <div style={{height: "15px"}}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col">
                        map goes here
                    </div>
                </div>
            </div>
        )
    }
};

export default translate('offerings')(offeringsListComponent);
