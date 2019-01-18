import '@/assets/scss/main.scss';

import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

import Piano from '@/components/Piano';
import MusicPaper from '@/components/MusicPaper';

class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="piano-wrapper">
          <Piano />
        </div>
        <MusicPaper />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app"),
);
