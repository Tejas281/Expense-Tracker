import React from 'react';
import './App.css';
import  {Header } from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExponses} from './components/IncomeExponses'
import {TransactionList} from './components/TransactionList'
import {AddTransation} from './components/AddTransation'
import {GloabalState, GlobalProvider} from './Context/GloabalState'

function App() {
  return (
  <GlobalProvider>
      <Header/>
      <div className="container">
         <Balance/>
        <IncomeExponses/>
        <TransactionList/>
        <AddTransation/>
        
      </div>
      </GlobalProvider>
  );
}

export default App;
