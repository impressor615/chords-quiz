import './style.scss'

import React, { PureComponent } from 'react';
import classnames from 'classnames';


const WhiteKey = ({ name, onClick, height, ...rest }) => (
  <button
    type="button"
    className={`white-key ${rest.className}`}
    name={name}
    onClick={onClick}
    style={{ height: height }}
  />
);

const BlackKey = ({ name, onClick, style, ...rest }) => (
  <button
    type="button"
    className={`black-key ${rest.className}`}
    name={name}
    onClick={onClick}
    style={style}
  />
);

const SCALES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const BLACK_SCALES = ['C#', 'D#', 'F#', 'G#', 'A#'];
class Piano extends PureComponent {
  constructor(props) {
    super(props);
    this.onClickKey = this.onClickKey.bind(this);
    this.state = {
      chord: [],
      keyWidth: 50,
    };
  }

  componentDidMount() {
    this.setState({
      keyWidth: document
        .getElementsByClassName('white-key')[0].offsetWidth,
    });
  }

  onClickKey(e) {
    const { name } = e.currentTarget;
    const { chord } = this.state;
    if (chord.includes(name)) {
      this.setState({
        chord: [...chord]
          .filter(item => item !== name),
      });
      return;
    }

    if (chord.length === 3) {
      this.setState({ chord: [name] });
      return;
    }

    this.setState({ chord: [...chord, name] });
  }

  placeBlackKey(index) {
    const { keyWidth } = this.state;
    if (index <= 1) {
      return `${(keyWidth / 2) + (keyWidth * index)}px`;
    }

    return `${(keyWidth * 3) + (keyWidth / 2) + (keyWidth * (index - 2))}px`;
  }

  render() {
    const { chord, keyWidth } = this.state;
    return (
      <div className="piano">
        {
          SCALES.map(scale => (
            <WhiteKey
              className={classnames(
                { 'white-key-active': chord.includes(scale)},
              )}
              key={scale}
              name={scale}
              onClick={this.onClickKey} 
              height={`${keyWidth * 4}px`}
            />
          ))
        }
        {
          BLACK_SCALES.map((scale, index) => (
            <BlackKey
              key={scale}
              className={classnames(
                `black-key-${index}`,
                { 'black-key-active': chord.includes(scale)},
              )}
              name={scale}
              onClick={this.onClickKey}
              style={{
                height: `${keyWidth * 2.5}px`,
                left: this.placeBlackKey(index),
              }}
            />
          ))
        }
      </div>
    );
  }
}

export default Piano;
