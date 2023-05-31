import TimePicker from "./components/TimePicker/TimePicker";

function App() {
  return (
    <div className="container my-10">
      <TimePicker />

      <h3 className="mt-6 text-lg">Potential improvements:</h3>
      <ul className="list-decimal px-5 text-xs">
        <li>
          You should be able to change the time directly by typing in the text
          field
        </li>
        <li>
          There should be a way to cancel the "dirty changes" - common in form
          libraries
        </li>
        <li>Support for 24hours</li>
        <li>Option to take "Now" current time</li>
        <li>A way to reset/clear time</li>
        <li>More styled variants</li>
        <li>more props: disabled? required?</li>
      </ul>
    </div>
  );
}

export default App;
