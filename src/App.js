import logo from './logo.svg';
import './App.css';
//import Example from './Example';
//import Home from './Home';
//import Counter from './counter.js';
// //import Listing from './Listing';
// import Forms from './Forms.js';
// import Count from './count.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Counter from './counter.js';
// import Posts from'./Posts.js';
import Register from './Register.js';
import Login from './Login.js';




function App() {
  let name ="mother world"
  return (
    <div>
    <div className='App'>
      {/* <Example />
      <Home/>
      <Counter />
      
      

      <h1>hello !!!!</h1> /
      
  <Listing />*/}
   {/* <Forms /> */}
      {/* <Form /> */}
      {/* < Count /> */}
       {/* < Register/>
       < Login />
      <Posts /> */}
      
        <BrowserRouter>
        { <Routes>
          {/* <Route path="/" element={<Count />}></Route>
          <Route path="/Forms" element={<Forms />}></Route> */} 
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>

        </Routes>}
        </BrowserRouter>
      </div>
    // </div>
  );
  }


export default App;
