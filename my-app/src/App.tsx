import React from 'react';
import Main from './pages/Main';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './pages/Admin';
import AddEmployee from './pages/AddEmployee';
import ViewEmployee from './pages/ViewEmployee';
import Employee from './pages/Employee';
import ResetPassword from './pages/ResetPassword';
import Skills from './pages/Skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee/:id" element={<Employee />} />
        <Route path="/skills/:id" element={<Skills />} />
        <Route path="/reset/:id" element={<ResetPassword />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/view-employee/:id/:id?" element={<ViewEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
