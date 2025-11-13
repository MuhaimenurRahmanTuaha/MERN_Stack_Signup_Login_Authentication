import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'react-toastify/ReactToastify.css';
import { useState } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Invalid from "./pages/Invalid";
import RefreshHandler from "./RefreshHandler";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  const privateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <BrowserRouter>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={privateRoute({ element: <Home /> })} />
        <Route path="*" element={<Invalid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
