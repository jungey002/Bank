import React, { useState } from 'react';

function Deposit({ onDeposit }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    if (accountNumber && amount) {
      onDeposit(accountNumber, amount);
      setAccountNumber('');
      setAmount('');
    } else {
      alert('Please enter account number and amount!');
    }
  };

  const handleCancel = () => {
    setAccountNumber('');
    setAmount('');
  };

  return (
    <div className="card p-3">
      <h3>Deposit</h3>
      <div className="mb-3">
        <label>Account Number</label>
        <input
          type="text"
          className="form-control"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="btn btn-primary me-2" onClick={handleDeposit}>
        Deposit
      </button>
      <button className="btn btn-secondary" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default Deposit;
