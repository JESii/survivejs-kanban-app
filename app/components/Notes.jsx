import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default ({
  notes,
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => (
  <ul>{notes.map(({id, editing, task}) =>
    <li key={id}>
      <Note onClick={onNoteClick.bind(null, id)}>
        <Editable
          editing={editing}
          value={task}
          onEdit={onEdit.bind(null, id)} />
        <button onClick={onDelete.bind(null, id)}>- Delete</button>
      </Note>
    </li>
  )}</ul>
)
  // <ul>{notes.map(({id, task}) =>
  //   <li key={id}>
  //     <Note>
  //       <span>{task}</span>
  //       <button>onClick={onDelete.bind(null, id)}> x Delete</button>
  //     </Note>
  //   </li>
  // )}
  // </ul>
  // Note the simplification of the map function
  // Shortened from <ul>{notes.map( (note) => (
