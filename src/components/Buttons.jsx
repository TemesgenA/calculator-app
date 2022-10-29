import React from 'react';
import '../index.css';

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
class Buttons extends React.Component {
  render() {
    return (
      <div className="keypad">
        {/* Non-operator keys : keys beside the arithmetic operation keys */}
        <div className="non-operators">
          <div className="screen-status">
            <button type="button" className="btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('AC')}>
              AC
            </button>
            <button type="button" className="btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('+/-')}>
              +/-
            </button>
            <button type="button" className="btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('%')}>
              %
            </button>
          </div>
          <div className="digits">
            <button type="button" className="seven btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('7')}>
              7
            </button>
            <button type="button" className="eight btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('8')}>
              8
            </button>
            <button type="button" className="nine btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('9')}>
              9
            </button>
            <button type="button" className="four btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('4')}>
              4
            </button>
            <button type="button" className="five btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('5')}>
              5
            </button>
            <button type="button" className="six btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('6')}>
              6
            </button>
            <button type="button" className="one btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('1')}>
              1
            </button>
            <button type="button" className="two btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('2')}>
              2
            </button>
            <button type="button" className="three btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('3')}>
              3
            </button>
            <button type="button" className="zero btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('0')}>
              0
            </button>
            <button type="button" className="dot btn btn-secondary btn-xlg" onClick={() => this.props.clickHandler('.')}>
              .
            </button>
          </div>
        </div>
        {/* Arithmetic operation keys */}
        <div className="operators">
          <button type="button" className="btn btn-dark btn-xlg" onClick={() => this.props.clickHandler('/')}>
            /
          </button>
          <button type="button" className="btn btn-dark btn-xlg" onClick={() => this.props.clickHandler('*')}>
            *
          </button>
          <button type="button" className="btn btn-dark btn-xlg" onClick={() => this.props.clickHandler('-')}>
            -
          </button>
          <button type="button" className="btn btn-dark btn-xlg" onClick={() => this.props.clickHandler('+')}>
            +
          </button>
          <button type="button" className="btn btn-dark btn-xlg" onClick={() => this.props.clickHandler('=')}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
