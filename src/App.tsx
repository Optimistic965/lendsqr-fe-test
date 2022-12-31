import './styles/App.scss';
import { Routes, Route} from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Notfound } from "./pages/404";
import { Users } from './components/users';
// import { UserDetail } from './components/user-detail';

function App() {
  return (
      <Routes>
        <Route path='/' element={ <Login/> }/>
        <Route element={ <Home/> }>
          <Route path='dashboard' element={ <Users />} />
          <Route path='users' element={ <Users />} />
          <Route path='*' element={  <h1> Page Still Under Construction </h1>} />
        </Route>
        <Route path='*' element={ <Notfound/> }/>
      </Routes>
  );
}

export default App;
