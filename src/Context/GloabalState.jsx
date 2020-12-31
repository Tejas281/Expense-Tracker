import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//initial state
const initialSate ={
    transaction: [
        
         ]
}

//Create context

export const GlobalContext = createContext(initialSate);


//provider componet

export const GlobalProvider =({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialSate);

    // action
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        })
        
    }

    function addTransaction(transactioni) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transactioni
        })
        
    }

    return(<GlobalContext.Provider value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction
        
   }}>

        {children}
        </GlobalContext.Provider>
        
        );
}