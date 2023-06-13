import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { Content } from './components/Content/Content';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Routes>
        <Route path='/twitter-clone' element={<Navigate to='/login' />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Content />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
