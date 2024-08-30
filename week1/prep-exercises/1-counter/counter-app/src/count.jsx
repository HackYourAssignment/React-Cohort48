import React from 'react';
import PropTypes from 'prop-types';

const Count = ({ count }) => {
    return <h1>{count}</h1>;
};

Count.propTypes = {
    count: PropTypes.number.isRequired,
};


export default Count;