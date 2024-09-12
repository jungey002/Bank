import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import TransactionsTable from './TransactionsTable';

function Transactions() {

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

    <div className="container mt-5">
    <h3 className="text-center">Banking App</h3>
    <div className="row">
      <div className="col-md-6">
        <Deposit onDeposit={handleDeposit} />
      </div>
      <div className="col-md-6">
        <Withdraw onWithdraw={handleWithdraw} />
      </div>
    </div>
    <TransactionsTable accounts={accounts} />
  </div>
   
  );
}

export default Transactions;
