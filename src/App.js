import Home from "./pages/Home";
import {BrowserRouter,Route ,Routes} from 'react-router-dom'
import Cusine from "./pages/Cusine";
import Searched from "./pages/Searched";
import Reciepe from "./pages/Reciepe";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/cusine/:type" element={<Cusine/>} />
      <Route path='/searched/:search' element={<Searched/>} />
      <Route path='/recipe/:name' element={<Reciepe/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}


export default App;
