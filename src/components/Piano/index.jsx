import './style.scss'

import React, { PureComponent } from 'react';

// 7개
const WhiteKey = ({ name, onClick }) => (
  <button
    type="button"
    className="white-key"
    name={name}
    onClick={onClick}
  />
);

const BlackKey = () => (
  <button
    type="button"
    className="black-key"
    name={name}
    onClick={onClick}
  />
);

const SCALES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
class Piano extends PureComponent {
  constructor(props) {
    super(props);
    this.onClickKey = this.onClickKey.bind(this);
  }

  onClickKey(e) {
    const { name } = e.currentTarget;
  }

  render() {
    return (
      <div className="piano">
        {
          SCALES.map(scale => (
            <WhiteKey
              key={scale}
              name={scale}
              onClick={this.onClickKey} 
            />
          ))
        }
      </div>
    );
  }
}

export default Piano;
