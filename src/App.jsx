import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Calendar from "./routes/calendar";
import Login from "./routes/login";
import "./App.css";
import Mentoring from "./routes/Mentoring/mentoring";
import Write from "./routes/Write/write";
import Post from "./routes/Post/post";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Mentoring" element={<Mentoring />} />
          <Route path="/write" element={<Write />} />
          <Route path="/Post" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
