import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Section.css';

export default class Section extends Component {

  static propTypes = {
    id: PropTypes.string,
    as: PropTypes.string,
    title: PropTypes.string,
    withBg: PropTypes.bool,
    inverted: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.any
  };

  static defaultProps = {
    title: ''
  };

  render() {

    const { title, children, className, id, withBg, inverted, as } = this.props;

    const classes = classNames(
      'section',
      (id) ? `section-${id}` : '',
      'clearfix',
      {
        'section-background': withBg,
        'inverted': inverted
      },
      className
    );

    const Element = as ? as : 'section';

    return (
      <Element id={id} className={classes}>
        {title ? <h2>{title}</h2> : null}
        <main>
          {children}
        </main>
      </Element>
    );
  }
}
