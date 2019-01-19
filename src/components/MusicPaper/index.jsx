import './style.scss'

import React, { PureComponent } from 'react';
import classnames from 'classnames';
import withNotesContext from '@/withNotesContext';

const Note = ({ note = '', left, right }) => (
  <div className={classnames(
    `music-paper-note music-paper-note-${note}`,
    { left, right },
  )} />
);

const WholeNote = () => (
  <div className="music-paper-whole-note-wrapper">
    <div className="music-paper-whole-note" />
  </div>
);

// TODO: #추가
// TODO: 높은 음자리표 추가
class MusicPaper extends PureComponent {
  renderNotes() {
    const { notes } = this.props;
    return notes.map((note) => {
      if (note === 'C') {
        return <WholeNote key={note} />
      }

      return <Note key={note} note={note} />
    });
  }

  render() {
    return (
      <div className="music-paper">
        {
          Array.from({ length: 5 }).map((_, index) => (
            <div key={index.toString()} className="music-paper-line" />
          ))
        }
        { this.renderNotes() }
      </div>
    );
  }
}

export default withNotesContext(MusicPaper);
