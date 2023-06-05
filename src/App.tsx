


import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./Login";
import Home from "./Home";



const App =() => {
    return <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>;
}


export default App;
