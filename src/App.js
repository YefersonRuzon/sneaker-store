import './App.scss';
import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/Product/Product';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
