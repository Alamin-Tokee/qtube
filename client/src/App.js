import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Vplayer from "./pages/Vplayer/Vplayer";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Profile from "./pages/Profile/Profile";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Vplayer />} />
        <Route
          path="/login"
          element={user ? <Navigate to="../profile/:id" /> : <Auth />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../login" />}
        />
        <Route
          path="/upload"
          element={user ? <VideoUpload /> : <Navigate to="../login" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
