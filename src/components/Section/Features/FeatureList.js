import React from 'react';
import FeatureItem from './FeatureItem';
import PropTypes from 'prop-types';

const FeatureList = ({ items }) => (
  <div>
    {
      items.map((item, i) => (
        <FeatureItem {...item} key={i} />
      ))
    }
  </div>
);

FeatureList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  )
};
FeatureList.defaultProps = {
  items: []
};

export default FeatureList;
