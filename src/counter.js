import React, {useState,useEffect} from 'react'

const Counter = () =>{

    
    const [name,setName] = useState("suren");

    const increment  =()  =>{
        setName("vijay");
    } 
    const decrement = () =>{
        setName("suren");
    }
    return(
        <div>
            <h3>{name}</h3>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
export default Counter;