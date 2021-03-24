/* eslint-disable react/prefer-stateless-function */

import { uniqueId } from 'lodash';
import React from 'react';

// BEGIN (write your solution here)
class Definitions extends React.Component {
  render () {
    const {data} = this.props;
    return data.length > 0 ? <dl>
      {data.map(x=>
          <React.Fragment key={uniqueId()}>
            <dt>{x.dt}</dt>
            <dd>{x.dd}</dd>
          </React.Fragment>
      )} 
      </dl> : null;
  }
}

export default Definitions;
// END
