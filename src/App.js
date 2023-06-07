import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { Content } from './components/Content/Content';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/main' element={<Content />}></Route>
            </Routes>
        </Provider>
    );
}

export default App;
