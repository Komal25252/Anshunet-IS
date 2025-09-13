import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";

function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white w-full">
        <Navbar toggleTheme={toggleTheme} dark={dark} />
        
        <main className="flex-1 p-4 md:p-6 w-full max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
