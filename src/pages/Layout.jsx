
import { Outlet,useLocation } from 'react-router-dom'
import LandingNavbar from '../assets/components/LandingNavbar'
import Landingpage from './Landingpage';

const Layout = () => {

  const location= useLocation();

  return (
    <>

<LandingNavbar/>
 
    {location.pathname==="/" && <Landingpage/>}

    <Outlet/>
  </>  
  )
};

export default Layout;   