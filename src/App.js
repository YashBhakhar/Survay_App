import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './AdminComp/Home';
import Signup from './AdminComp/Signup';
import Login from './AdminComp/Login';
import Workplace from './AdminComp/Workplace';
import Create from './AdminComp/Create';
import { Provider } from 'react-redux';
import  store  from './Redux/store';
import User from './UserComp/User';
import Thanks from './UserComp/Thanks';

function App() {
  return (
    <div>
      <Provider store={store}>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/workplace' element={<Workplace />} />
      <Route path='/create/:id' element={<Create />} />
      <Route path='/user/:id/:uid' element={<User />} />
      <Route path='/thanks/:id/:uid' element={<Thanks />} />
     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
