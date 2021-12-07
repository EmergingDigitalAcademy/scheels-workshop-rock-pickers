import { Component } from 'react';
import PropTypes from 'prop-types';

class RockPicker extends Component {
  state = { count: 0 }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrease = () => {
    //   if (this.state.count > 0)
    this.setState({ count: this.state.count - 1 });
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  square = () => {
    this.setState({ count: this.state.count * this.state.count });
  }

  render() {
    const { name } = this.props;

    return (
      <>
        <p>Some text from {name}'s RockPicker</p>
        <p>Our current count is: {this.state.count}</p>
        <div>
          <button onClick={this.increase}>Increase</button>
          <button onClick={this.decrease}>Decrease</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.square}>Square</button>
        </div>
      </>
    );
  }
}

RockPicker.propTypes = {
  name: PropTypes.string,
};

RockPicker.defaultProps = {
  name: "Anonymous",
};

export default RockPicker;
