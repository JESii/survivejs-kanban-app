import React from 'react';

const notes = [
  { id: '12345-abcde', task: 'Learn React'},
  { id: 'abcde-12345', task: 'Use Webpack'},
  { id: '12345-67890', task: 'Up Your Game'}
];

export default () => (
  <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
    )}</ul>
);
// Note the simplification of the map function
// Shortened from <ul>{notes.map( (note) => (
