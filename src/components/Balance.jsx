import React from 'react'
import { GlobalContext } from '../Context/GloabalState'

export const Balance = () => {
    
  const { transaction } =  useContext(GlobalContext);

    return (
        <div>
             <h4>Your Balance</h4>
            <h1 id="balance">$0.00</h1>
            
        </div>
    )
}
