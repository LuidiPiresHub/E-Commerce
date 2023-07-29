import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Resgister";
import Products from "./pages/products/Products";
import NotFound from "./pages/notFound/NotFound";

export default function App() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') navigate('/login');
  }, [navigate, pathname])


  return (
    <Routes>
      <Route path='/login' Component={Login} />
      <Route path='/register' Component={Register} />
      <Route path='/products' Component={Products} />
      <Route path='*' Component={NotFound} />
    </Routes>
  )
}
