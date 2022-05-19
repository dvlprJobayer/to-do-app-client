import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AddTask from './components/AddTask/AddTask';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AllTask from './components/AllTask/AllTask';

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/add-task' element={<RequireAuth>
                    <AddTask />
                </RequireAuth>}></Route>
                <Route path='/all-task' element={<RequireAuth>
                    <AllTask />
                </RequireAuth>}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
