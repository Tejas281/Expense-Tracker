import React,{useContext} from 'react'
import { TransactionList } from './TransactionList'
import { GlobalContext } from '../Context/GloabalState'


export const Transaction = ({ transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount<0 ?'minus' : 'plus'}>
          Cash {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
