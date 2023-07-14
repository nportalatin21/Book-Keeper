import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './componenents/Books/AddBook';
import Navbar from './componenents/Navbar/Navbar';
import Home from './componenents/Home/Home'
import RegisterUser from './componenents/users/RegisterUser'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/register" element={<RegisterUser />} />
          {/* Add more routes for your application */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;





// // import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import AddBook from './componenents/Books/AddBook'
// import Books from './componenents/Books/Books'
// import Navbar from './componenents/Navbar/Navbar'
// //import RegisterUser from './components/users/RegisterUser';
// // import LoginUser from './components/users/LoginUser';
//  import Home from './componenents/Home/Home'
// // import Profile from './components/Profile/Profile';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Route exact path='/' component={Home} />
//         <Route exact path='/books' component={Books} />
//         <Route exact path='/addbook' component={AddBook} />
//       </Router>
//     </>
//   );
// }

// export default App;