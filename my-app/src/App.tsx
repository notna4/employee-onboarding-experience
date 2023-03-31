import React from 'react';
import Main from './pages/Main';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './pages/Admin';
import AddEmployee from './pages/AddEmployee';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add" element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
