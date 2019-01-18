import './style.scss'

import React, { Fragment, PureComponent } from 'react';

const Note = () => (
  <div className="music-paper-note" />
);

const WholeNote = () => (
  <div className="music-paper-whole-note" />
);

class MusicPaper extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="music-paper">
          {
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index.toString()} className="music-paper-line" />
            ))
          }
          {
            Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index.toString()}
                className={`music-paper-vertical-line music-paper-vertical-line-${index}`}            />

            ))
          }
        </div>
        <div className="music-paper-answer">
          <Note />
          <Note />
          <WholeNote />
        </div>
      </Fragment>
    );
  }
}

export default MusicPaper;
