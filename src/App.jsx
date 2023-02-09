import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp'





const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/LogIn.jsx' element={<LogIn/>} />
                <Route exact path='/SignUp.jsx' element={<SignUp/>} />
            </Routes>

        </BrowserRouter>




    )
}

export default App;