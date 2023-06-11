import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Narrative from "./Pages/Narrative";
import Pics from "./Pages/Pics";
import PicQuestions from "./Pages/PicQuestions";
import Saving from "./Pages/Saving";
import End from "./Pages/End";
import Part3Questionnaire from "./Pages/Part3Questionnaire";
import Start from "./Pages/Start";
import Part1Questionnaire from "./Pages/Part1Questionnaire";
import Part2Questionnaire from "./Pages/Part2Questionnaire";

function App() {
  return (
    <Router>
      {/*<div className="App">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/demo" element={<Home />} />
          <Route path="/narrative" element={<Narrative />} />
          <Route path="/pics" element={<Pics />} />
          <Route path="/pics/q" element={<PicQuestions />} />
          <Route path="/save" element={<Saving />} />
          <Route path="/p3" element={<Part3Questionnaire />} />
          <Route path="/p1" element={<Part1Questionnaire />} />
          <Route path="/end" element={<End />} />
        </Routes>
  </div>*/}
    </Router>
  );
}

export default App;
