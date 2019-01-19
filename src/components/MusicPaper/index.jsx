import './style.scss'

import React, { PureComponent } from 'react';
import classnames from 'classnames';

const Note = ({ chord = '', between }) => (
  <div className={classnames(
    `music-paper-note music-paper-note-${chord}`,
    { between },
  )} />
);

const WholeNote = () => (
  <div className="music-paper-whole-note" />
);

class MusicPaper extends PureComponent {
  constructor(props) {
    super(props);
  }

  // TODO: Note 오른쪽으로 움직여야하는지 아닌지 판단해서 render를 하는 것이?
  renderNote(chord) {
    if (chord === 'C') {
      return <WholeNote />
    }

    <Note chord={chord} />
  }

  render() {
    return (
      <div className="music-paper">
        {
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index.toString()} className="music-paper-line" />
          ))
        }
      </div>
    );
  }
}

export default MusicPaper;
