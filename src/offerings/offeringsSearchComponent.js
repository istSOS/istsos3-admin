import React, { Component } from 'react';
import { translate } from 'react-i18next';

class OfferingsSearchComponent extends Component {

    render() {
        const {t} = this.props;
        return (
            <div className='container-fluid'
                style={{
                    paddingTop: "15px"
                }}>
                <input type="text" placeholder={t('searchOffering')}/>
            </div>
        )
    }
};

export default translate('offerings')(OfferingsSearchComponent);
