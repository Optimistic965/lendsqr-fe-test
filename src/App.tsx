import './styles/App.scss';
import { Routes, Route} from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Notfound } from "./pages/404";
import { Users } from './components/users';
import { UserDetail } from './components/user-detail';
import { GenDetails } from './components/genDetails';
import { DataFailed } from './components/dataFailed';
// import { UserDetail } from './components/user-detail';

function App() {
  return (
      <Routes>
        <Route path='/' element={ <Login/> }/>
        <Route element={ <Home/> }>
          <Route path='dashboard' element={ <Users />} />
          <Route path='user' element={ <Users />} />
          <Route path='user/:id' element={ <UserDetail />} >
            <Route path='geDe' element={ <GenDetails />} />
            <Route path='*' element={ <DataFailed text="Data Failed to Load....."/>} />
          </Route>
          <Route path='*' element={  <DataFailed text='Page Still Under Construction....' />} />
        </Route>
        <Route path='*' element={ <Notfound/> }/>
      </Routes>
  );
}

export default App;
