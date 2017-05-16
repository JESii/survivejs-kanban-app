import React from 'react';

export default ({task, onDelete}) => (
  <div>
    <span>{task}</span>
    <button onClick={onDelete}> - Delete </button>
  </div>
);
// Could also be expressed as:
// export default (props) => <div{props.task}</div>;

