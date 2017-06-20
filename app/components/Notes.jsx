import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default ({
  notes,
  onNoteClick = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => (
  <ul className="notes" >{notes.map(({id, editing, task}) =>
    <li key={id}>
      <Note className="note" onClick={onNoteClick.bind(null, id)}>
        <Editable
          editing={editing}
          value={task}
          onEdit={onEdit.bind(null, id)} />
        <button className="delete-note"  onClick={onDelete.bind(null, id)}>- Delete</button>
      </Note>
    </li>
  )}</ul>
)
  // <ul>{notes.map(({id, task}) =>
  //   ...
  // Note the simplification of the map function
  // Shortened from <ul>{notes.map( (note) => (
