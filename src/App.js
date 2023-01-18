import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Userhome from "./Components/Userhome";
import Profile from "./Components/Profile";
import Challenges from "./Components/Challenges";
import Allproducts from "./Components/Allproducts";

import CartItem from "./Components/CartItem";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Userhome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/products" element={<Allproducts />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}

export default App;
