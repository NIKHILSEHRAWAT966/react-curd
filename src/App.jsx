
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import Services from './assets/components/services';
import NotFound from './assets/components/NotFound';
import Login from './assets/components/Login';
import LearnUseEffect from './assets/components/LearnUseEffect';
import PropDriling from './assets/components/PropDriling/PropDriling';
import ContextApi from './assets/components/PropDriling/ContextApi/ContextApi';
import { Counter } from './assets/components/Counter';
import CartComponent from './assets/components/CartComponent';
import AdminDashboard from './pages/AdminDashboard';
import RegisterUser from './assets/components/RegisterUser';

const App=()=>(
 
<Routes>
    <Route path="/" element={<Layout/>}>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegisterUser/>}/>
        <Route path="/learn" element={<LearnUseEffect/>}/>
        <Route path="/Propdriling" element={<PropDriling/>}/>
        <Route path="/contextapi" element={<ContextApi/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/cart" element={<CartComponent/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Route>
</Routes>
);
export default App;