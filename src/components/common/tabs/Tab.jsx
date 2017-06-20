import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

export default function Tab ({
    label,
    path,
    active
}) {
    return (
        <li onClick={() => browserHistory.push(path)}
            style={{
                ...{
                    margin              : 0,
                    marginRight         : 10,
                    padding             : '4px 10px',
                    fontSize            : 14,
                    fontWeight          : 500,
                    cursor              : 'pointer',
                    color               : '#37474F',
                    backgroundColor     : '#B0BEC5',
                    borderTopRightRadius: 2,
                    borderTopLeftRadius : 2,
                    borderBottom        : 0
                },
                ...((active ? {
                    color          : '#FFFFFF',
                    backgroundColor: '#607D8B',
                    borderBottom   : 0
                } : {})) }}>
            { label }
        </li>
    );
}

Tab.propTypes = {
    label : PropTypes.string,
    path  : PropTypes.string,
    active: PropTypes.bool
};
