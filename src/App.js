import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoriesLoader from "./components/loader/StoriesLoader";
import Stories from "./components/stories/Stories";
function App() {
  return (
    //basic Routing
    <Router>
      <Routes>
        <Route exact path="/" element={<StoriesLoader />}></Route>
        <Route exact path="/stories" element={<Stories />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
