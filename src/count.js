import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const Count = () =>{
    // const [count , setName] = useState("Iam a Batman");
    const [count,setCount] =useState(0);

    // const changer = () => {
    //     setName("No iam a superman");
    // }

const increment = () =>{
    setCount(count +1)
}
const decrement = () =>{
    setCount(count -1)
}

useEffect(() => {
    console.log("Effect");
}, [count])


    return(
        <div>
            {/* <h1>{ count }</h1>
            <button onClick={changer}>Click</button> */}
       
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <Link to ="/Forms">Form</Link>
        </div>

    )
    
}


export default Count;
