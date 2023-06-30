import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
