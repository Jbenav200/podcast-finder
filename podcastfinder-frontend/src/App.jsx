import { useState } from 'react'
import Navbar from "./components/Navbar.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
import Home from "./pages/index.jsx";
import About from "./pages/about.jsx";
import Blogs from "./pages/blogs.jsx";
import Signup from "./pages/signup.jsx";
import Contact from "./pages/contact.jsx";
import Results from "./pages/results.jsx";
import './App.css'


function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />}/>
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/search" element={<Signup />}/>
              <Route path="/results" element={<Results />}/>
            </Routes>
      </Router>
  )
}

export default App
