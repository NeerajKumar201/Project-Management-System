import {createContext, useState} from 'react'

export const DataContext1 = createContext();

export const DataContextProvider1 = ({children}) =>{
    const [data1,setData1] = useState([{name: 'Gangadhar',password:'Gangadhar' },
                                     {name: 'Teja',password:'Teja' },
                                     {name: 'Neeraj Kumar',password:'Neeraj' }]);

    
    return(
        <DataContext1.Provider value={{data1,setData1}}>
            {children}
        </DataContext1.Provider>
    )
}
