/* eslint-disable react/prop-types */
import React from 'react';
// import calculate from '../logic/calculate';
import Buttons from './Buttons';
import Display from './Display';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <Display
          total={this.props.total}
          operation={this.props.operation}
          next={this.props.next}
        />
        <Buttons
          clickHandler={this.props.clickHandler}
        />
      </div>
    );
  }
}

export default Calculator;
