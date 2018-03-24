import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Section.css';

export default class Section extends Component {

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any
  };

  static defaultProps = {
    title: ''
  };

  render() {

    const { title, children, className, id } = this.props;

    const classes = classNames(
      'section',
      (id) ? `section-${id}` : '',
      'clearfix',
      className
    );

    return (
      <section id={id} className={classes}>
        {title ? <h2>{title}</h2> : null}
        <main>
          {children}
        </main>
      </section>
    );
  }
}
