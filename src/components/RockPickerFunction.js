import { useState } from 'react';
import PropTypes from 'prop-types';

function RockPickerFunction(props) {
  // can also destructure props here in function: function RockPickerFunction({name})
  const [count, setCount] = useState(0); //default value set as 0
  // In typescript: const [count, setCount] = useState<number>(0)

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);
  const square = () => setCount(count * count);

  // const name = this.props.name
  const name = props.name;

  return (
    <>
      <p>Some text from {name}'s RockPicker</p>
      <p>Our current count is: {count}</p>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={square}>Square</button>
      </div>
    </>
  );
}

RockPickerFunction.propTypes = {
  name: PropTypes.string,
};

RockPickerFunction.defaultProps = {
  name: "Anonymous",
};

export default RockPickerFunction;
