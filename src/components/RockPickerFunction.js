import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function RockPickerFunction(props) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => dispatch({ type: 'INCREMENT' });
  const decrease = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });
  const square = () => {
    setTimeout(() => {
      dispatch({ type: 'SQUARE' })
    }, 2000);
  };

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
