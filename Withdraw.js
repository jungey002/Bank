import React, { useState } from 'react';

function Withdraw({ onWithdraw }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    if (accountNumber && amount) {
      const parsedAmount = parseFloat(amount);
      if (parsedAmount > 0) {
        onWithdraw(accountNumber, parsedAmount);
        setAccountNumber('');
        setAmount('');
      } else {
        alert('Amount must be greater than zero!');
      }
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
      <h3>Withdraw</h3>
      <div className="mb-3">
        <label className="form-label">Account Number</label>
        <input
          type="text"
          className="form-control"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="btn btn-primary me-2" onClick={handleWithdraw}>
        Withdraw
      </button>
      <button className="btn btn-secondary" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default Withdraw;
