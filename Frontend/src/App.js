import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './componenents/Books/AddBook';
import Navbar from './componenents/Navbar/Navbar';
import Home from './componenents/Home/Home';
import RegisterUser from './componenents/users/RegisterUser';
import LoginUser from './componenents/users/LoginUser';
import Profile from './componenents/Profile/Profile';
import UpdateProfile from './componenents/UpdateProfile/UpdateProfile';
import Users from './componenents/users/Users';
import Login from './componenents/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user-update" element={<UpdateProfile />} />
          <Route path="/user" element={<Users />} />
          <Route path="/LoginPage" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
