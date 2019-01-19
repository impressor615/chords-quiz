import './style.scss'

import React, { PureComponent } from 'react';
import classnames from 'classnames';
import withNotesContext from '@/withNotesContext';


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

// TODO: svg animation 추가해보기
// TODO: resize 이벤트 추가
const SCALES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const BLACK_SCALES = ['C-sharp', 'D-sharp', 'F-sharp', 'G-sharp', 'A-sharp'];
class Piano extends PureComponent {
  constructor(props) {
    super(props);
    this.onClickKey = this.onClickKey.bind(this);
    this.state = {
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
    const { notes, dispatch, count } = this.props;
    if (notes.includes(name)) {
      dispatch({
        notes: [...notes]
          .filter(item => item !== name).sort(),
      });
      return;
    }

    if (notes.length === count) {
      dispatch({ notes: [name] });
      return;
    }

    dispatch({ notes: [...notes, name].sort() });
  }

  placeBlackKey(index) {
    const { keyWidth } = this.state;
    if (index <= 1) {
      return `${(keyWidth / 2) + (keyWidth * index)}px`;
    }

    return `${(keyWidth * 3) + (keyWidth / 2) + (keyWidth * (index - 2))}px`;
  }

  render() {
    const { notes } = this.props;
    const { keyWidth } = this.state;
    return (
      <div className="piano">
        {
          SCALES.map(scale => (
            <WhiteKey
              className={classnames(
                { 'white-key-active': notes.includes(scale)},
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
                { 'black-key-active': notes.includes(scale)},
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

export default withNotesContext(Piano);
