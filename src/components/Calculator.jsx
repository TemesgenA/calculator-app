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
  );
};

export default Calculator;
