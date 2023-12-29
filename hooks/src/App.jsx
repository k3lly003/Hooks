import "./styles/App.css";
import { useNavigate } from "react-router-dom";
import MenuBar from "./layouts/MenuBar.jsx";
function App() {
  const navigate = useNavigate();
  function handleUseStatePage(event) {
    event.preventDefault();
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case "state":
        navigate("/useState");
        break;
      case "effect":
        navigate("/useEffect");
        break;
      default:
        console.log("you reached to the default");
        return window.alert("Choose one of the hooks given in the option");
    }
  }
  return (
    <>
      <div>
        <MenuBar />
      </div>
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
