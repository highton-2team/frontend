import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/home";
import Calendar from "./routes/calendar";
import "./App.css";
import Mentoring from "./routes/Mentoring/mentoring";
import Write from "./routes/Write/write";
import Post from "./routes/Post/post";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mentoring" element={<Mentoring />} />
          <Route path="/write" element={<Write />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
