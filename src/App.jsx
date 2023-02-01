import React from "react";
import ImagenGenerator from "./components/imagen/ImagenGenerator";
import HomeComp from "./components/Home/HomeComp";
import Chatgp3 from "./components/chatgpt3/Chatgp3";
import Chat from "./pages/chat";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chatgpt3" element={<Chatgp3 />} />
        <Route path="/imagen" element={<ImagenGenerator />} />
      </Routes>
    </div>
  );
};

export default App;
