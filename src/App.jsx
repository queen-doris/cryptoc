import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from './pages/Task';
import Opportunity from "./pages/Opportunity";
import Proposal from "./pages/Proposal";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
       {/* <div className="">
      <Dashboard />
      <Task />
    </div> */}
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/task" element={<Task />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
