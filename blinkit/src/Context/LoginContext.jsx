import React, { createContext, useState } from 'react'

export let login = createContext();

 export function LoginContext(props) {
    let [isLogin,setLogin] = useState(false)
    let [loggedIn,setLoggedIn] = useState(false)
  return (
    <login.Provider value = {{isLogin,setLogin,loggedIn,setLoggedIn}}>
        {props.children}
    </login.Provider>
   
  )
}

