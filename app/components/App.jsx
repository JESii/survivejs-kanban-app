import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        { id: uuid.v4(), task: 'Learn React'},
        { id: uuid.v4(), task: 'Use Webpack'},
        { id: uuid.v4(), task: 'Up Your Game'}
      ]
    };
  }

  render() {
    // Why is the following line set up as it is? why {notes}?
    const {notes} = this.state;
    return (
      <div>
        <button onClick={this.addNote}>+ Add Note</button>
        <Notes notes={notes} />
      </div>
    );
  }
  addNote = () => {
    this.setState ({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New Task'
      }])
    });
  }
}
