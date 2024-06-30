import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<ImageUpload />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
