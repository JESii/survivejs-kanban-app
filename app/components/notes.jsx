import React from 'react';
import uuid from 'uuid';

const notes = [
  { id: uuid.v4(), task: 'Learn React'},
  { id: uuid.v4(), task: 'Use Webpack'},
  { id: uuid.v4(), task: 'Up Your Game'}
];
export default () => (
  <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
    )}</ul>
);
// Note the simplification of the map function
// Shortened from <ul>{notes.map( (note) => (
