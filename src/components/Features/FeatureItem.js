import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FeatureItem = ({ img, title, description, odd }) => (
  <article>
    <figure>
      <img src={img} />
    </figure>
    <h3>{title}</h3>
    <p>{description}</p>
  </article>
);

FeatureItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;
