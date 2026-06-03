import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopicDetail from "./pages/TopicDetail";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:id" element={<TopicDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
