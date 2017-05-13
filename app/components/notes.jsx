import React from 'react';

export default ({notes}) => (
  <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
    )}</ul>
);
// Note the simplification of the map function
// Shortened from <ul>{notes.map( (note) => (
