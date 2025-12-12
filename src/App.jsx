import React from "react"; // Added for completeness
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import Gallery from "./pages/Gallery";
import Info from "./pages/Info";
import Membership from "./pages/Membership";
import Profile from "./pages/Profile";
import Donate from "./pages/Donate";
import "./App.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "red" }}>
          <h1>Application Error</h1>
          <p>{this.state.error?.message}</p>
          <pre>{this.state.error?.stack}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen">
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/info" element={<Info />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>

        {/* Footer visible on all pages */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
