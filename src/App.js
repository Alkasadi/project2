import './App.css';
// import Ali from "./Ali";
// import "./Ali.css";
import MyHeader from "./components/MyHeader/MyHeader";
import "./components/MyHeader/MyHeader"
import Login from './Sign/Login';
// import "./Sign/Login.css"
import MyBoody from './componentstwou/MyBoody';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route index element={<Login/>}/>

        <Route path='/MyBoody' element={<MyBoody/>}/>
      <Route path="/MyHeader" element={<MyHeader/>} />
      



      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
