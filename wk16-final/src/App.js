
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
  import Sidenav from './components/side-nav';
  import Explore from "./Pages/Explore";
  import Home from "./Pages/Home";
  import Order from "./Pages/Order";
  import Products from "./Pages/Products";



function App() {

  return (
    <div className="App" >
   <Sidenav/>
    <main>
    <Routes>
   <Route path="/" element={<Home />}/>
    <Route path="/explore" element={<Explore />} />
   <Route path="/products" element={<Products />}/>
    <Route path="/order" element={<Order />} />
    </Routes>
   </main>
   </div>
    );
    }

export default App;
