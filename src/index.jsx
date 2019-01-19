import '@/assets/scss/main.scss';

import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import Piano from '@/components/Piano';
import MusicPaper from '@/components/MusicPaper';
import { NotesContext } from '@/withNotesContext';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      count: 4,
    };
  }

  render() {
    const { notes, count } = this.state;
    return (
      <NotesContext.Provider
        value={{
          notes,
          count,
          dispatch: this.setState.bind(this)
        }}
      >
        <div className="container">
          <div className="piano-wrapper">
            <Piano />
          </div>
          <MusicPaper />
        </div>
      </NotesContext.Provider>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app"),
);
