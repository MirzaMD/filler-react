import { UserContext } from "./UserContext.js";
import { useContext } from "react";

export function Filler(){
  const UserContextData=useContext(UserContext)
  const setName=UserContextData.setName
  
  function updateName(){
    setName(prevName=>prevName.slice(0,-1))
  }

  return(
    <div>
      <p>{UserContextData.name}</p>
      <button onClick={updateName}>click me</button>
    </div>
  )
}