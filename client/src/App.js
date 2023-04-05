import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Layout from "./layout/Layout";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import CreatePostPage from "./pages/CreatePostPage";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create_post" element={<CreatePostPage />} />
          <Route path="/post_detail/:id" element={<PostDetailPage />}/>
        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
