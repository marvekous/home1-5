import{BrowserRouter,Route,Routes} from 'react-router-dom'
import MainPage from './pages/MainPage';
import Navbar from './pages/navbar/Navbar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Pages3 from './pages/Pages3';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/pg1' element={<Page1/>}></Route>
      <Route path='/pg2' element={<Page2/>}></Route>
      <Route path='/pg3' element={<Pages3/>}></Route>


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
