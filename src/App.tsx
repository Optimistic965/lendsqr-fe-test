import './styles/App.scss';
import { Routes, Route} from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Notfound } from "./pages/404";

function App() {
  return (
      <Routes>
        <Route path='/' element={ <Login/> }/>
        <Route element={ <Home/> }>
          <Route path='dashboard' element={ <h1> Dashboard </h1>} />
          <Route path='User' element={ <h1> User </h1>} />
        </Route>
        <Route path='*' element={ <Notfound/> }/>
      </Routes>
  );
}

export default App;
