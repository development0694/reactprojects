import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import StudentProfile from "./StudentProfile";
import StudentRegistration from "./StudentRegistration";
import DeleteStudent from "./DeleteStudent";
import UpdateStudent from "./UpdateStudent";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/register" element={<StudentRegistration />} />
          <Route path="/delete" element={<DeleteStudent />} />
          <Route path="/update" element={<UpdateStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;