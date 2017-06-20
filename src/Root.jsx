import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import Routes from './Routes';

export default function Root ({
    store
}) {
    return (
        <Provider store={store}>
            <Router
                children={Routes}
                history={browserHistory}
            />
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object
};
