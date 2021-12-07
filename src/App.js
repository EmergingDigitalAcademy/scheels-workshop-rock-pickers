import RockPickerFunction from "./components/RockPickerFunction";
import RockPicker from "./components/RockPicker";

// This is a functional component! It is a POJO (plain old
// js object) that returns JSX to be rendered. The JSX
// can be made up of html or other components that, in turn,
// render themselves (and their children)
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <RockPickerFunction />
      <RockPickerFunction name="Jaryd" highScore="something" />
      <RockPickerFunction name="Bob" highScore="something" />
      <RockPicker name="Ryan" highScore="something" />
    </div>
  );
}

export default App;
