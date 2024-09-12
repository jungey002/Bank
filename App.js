import logo from './logo.svg';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import mylogo from './img/logo1.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import SignUp from './SignUp';
import Transactions from './Transactions';

function App() {

  const [accounts, setAccounts] = useState({});

  const handleDeposit = (accountNumber, amount) => {
    amount = parseFloat(amount);
    setAccounts((prevAccounts) => {
      const account = prevAccounts[accountNumber] || { balance: 0, transactions: [] };
      const newBalance = account.balance + amount;
      const newTransaction = {
        type: 'Deposit',
        accountNumber,
        amount,
        balance: newBalance
      };
      return {
        ...prevAccounts,
        [accountNumber]: {
          balance: newBalance,
          transactions: [...account.transactions, newTransaction]
        }
      };
    });
  };

  const handleWithdraw = (accountNumber, amount) => {
    amount = parseFloat(amount);
    setAccounts((prevAccounts) => {
      const account = prevAccounts[accountNumber] || { balance: 0, transactions: [] };
      const newBalance = account.balance - amount;
      if (newBalance < 0) {
        alert('Insufficient funds!');
        return prevAccounts;  
      }
      const newTransaction = {
        type: 'Withdraw',
        accountNumber,
        amount,
        balance: newBalance
      };
      return {
        ...prevAccounts,
        [accountNumber]: {
          balance: newBalance,
          transactions: [...account.transactions, newTransaction]
        }
      };
    });
  };

  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src={mylogo} alt="Logo" className="d-inline-block align-top" />
              {' '}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="mynav navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Transactions" element={<Transactions />} />
        </Routes>
      </div>
      {/* Footer */}
      <footer className="footer">
          <p>© 2024 BMO MyApp. All rights reserved.</p>
          <p><Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms">Terms of Use</Link></p>
        </footer>
    </div>
  </Router>
  );
}

export default App;
