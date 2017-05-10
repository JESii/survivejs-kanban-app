import React from 'react';

const notes = [
  { id: '12345-abcde', task: 'Learn React'},
  { id: 'abcde-12345', task: 'Do Laundry'}
];

export default () => {
  <ul>{notes.map(note =>
      <li key="{note.id}">{note.task}</li>
  )}</ul>
};
