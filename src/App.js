import React from 'react';
import './App.css';
import  {Header } from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExponses} from './components/IncomeExponses'
import {TransactionList} from './components/TransactionList'
import {AddTransation} from './components/AddTransation'

function App() {
  return (
    <div >
      <Header/>
      <div className="container">
         <Balance/>
        <IncomeExponses/>
        <TransactionList/>
        <AddTransation/>
      </div>
    </div>
  );
}

export default App;
