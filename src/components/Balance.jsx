import React, {useContext}from 'react'
import { GlobalContext } from '../Context/GloabalState'

export const Balance = () => {
    const { transaction } =  useContext(GlobalContext);
    const amounts = transaction.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  
    return (
        <div>
             <h4>Your Balance</h4>
            <h1>${total}</h1>
            
        </div>
    )
}
