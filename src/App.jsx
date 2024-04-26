import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Task from './pages/Task';
import Opportunity from "./pages/Opportunity";
import Proposal from "./pages/Proposal";

function App() {
  return (
    <>
       {/* <div className="">
      <Dashboard />
      <Task />
    </div> */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/task" element={<Task />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/proposal" element={<Proposal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
