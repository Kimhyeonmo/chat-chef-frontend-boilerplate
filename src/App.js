import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Chat from "./pages/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/chat" element={<Chat />} />
      {/* 404 페이지 대응 */}
      <Route path="*" element={<div className="p-10 text-center text-red-500">404 - 페이지를 찾을 수 없습니다</div>} />
    </Routes>
  );
}

export default App;
