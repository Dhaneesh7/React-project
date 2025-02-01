import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home setUser={setUser} /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
