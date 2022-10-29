/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const { total, next, operation } = this.props;
    return (
      <div className="display">
        {/* requires attention */}
        <div className="operand">
          <p>
            { total }
            { operation }
            { next }
          </p>
        </div>
      </div>
    );
  }
}

export default Display;
