import {UserContext} from './UserContext.js';
import { useState } from 'react';
import {Filler} from './Filler.jsx'
export default function App(){
  const[name,setName]=useState("Mirza")
  return(<UserContext.Provider value={{name,setName}}>
     <Filler/>
  </UserContext.Provider>)
}