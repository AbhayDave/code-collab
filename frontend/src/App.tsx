import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Link to={"/home"} className="btn btn-primary">
      Home
    </Link>
  );
}

export default App;
