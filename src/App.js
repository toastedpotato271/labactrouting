import React, { useState } from 'react';
import './App.css';
import './Nav.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
//pages
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact'; 

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const credentials = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
  ];

  const handleLogin = (event) => {
    event.preventDefault();
    const foundUser   = credentials.find((user) => user.username === username && user.password === password);
    if (foundUser  ) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password!');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h2>LOGIN</h2>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input-field"
        />
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>My Website</h1>
        <BrowserRouter>
      <nav className="navbar-menu">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
          </div>
        );
    }
  }
export default App;