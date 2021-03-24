// @ts-check
/* eslint-disable react/display-name */
import React from 'react';

// BEGIN (write your solution here)
const getCard = (params={}) => {
  console.log(`title: ${params.title}, text: ${params.text}`);
  if (!params.hasOwnProperty('title') && !params.hasOwnProperty('text')) {
    return null;
  }
  return <div className="card">
     <div className="card-body">
       {params.title ? <h4 className="card-title">{params.title}</h4> : null}
       {params.text ? <p className="card-text">{params.text}</p> : null}
     </div>
   </div>;
}

export default getCard;
// END
