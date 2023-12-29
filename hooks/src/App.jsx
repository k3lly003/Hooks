import "./App.css";

function App() {
  // const history = useHistory();
  function handleUseStatePage(event) {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case "state":
        window.location.href = "https://www.google.com";
        break;
      case "effect":
        window.location.href = "https://www.x.com";
        break;
      default:
        console.log("you reached to the default");
        return window.alert("Choose one of the hooks given in the option");
    }
  }
  return (
    <>
      <div className="count">
        <h2>Practice Hooks</h2>
        <p>Select between the two to start your exercises:</p>
        <select name="hooks" id="select" onChange={handleUseStatePage}>
          <option value="choose"></option>
          <option value="state">useState</option>
          <option value="effect">useEffect</option>
        </select>
      </div>
    </>
  );
}

export default App;
