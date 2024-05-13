import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./home";
import Register from "./register/register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
