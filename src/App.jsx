import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AdminPanel from "./components/AdminPanel";
import ProfileDetails from "./components/ProfileDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/profile/:id" element={<ProfileDetails />} />
    </Routes>
  );
};

export default App;
