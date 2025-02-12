import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Clasroom from "./pages/Clasroom";
import Assessments from "./pages/Assessments";
import Store from "./pages/Store";
import Calender from "./pages/Calender";
import News from "./pages/News";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classroom" element={<Clasroom />} />
        <Route path="/assessment" element={<Assessments />} />
        <Route path="/store" element={<Store />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
