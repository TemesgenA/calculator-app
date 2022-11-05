import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';
import Display from './Display';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const clickHandler = (event) => {
    setState({ ...setState, ...calculate(state, event) });
  };

  return (
    <div className="calculator-page">
      <h2 className="calculator-txt">Let us do some math</h2>
      <div className="calculator">
        <Display
          total={state.total}
          operation={state.operation}
          next={state.next}
        />
        <Buttons
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
};

export default Calculator;
