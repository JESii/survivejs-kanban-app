import React from 'react';
import Note from './Note';

export default ({notes}) => (
  <ul>{notes.map(note =>
    <li key={note.id}><Note task={note.task} /></li>
  )}
</ul>
);
// Note the simplification of the map function
// Shortened from <ul>{notes.map( (note) => (
