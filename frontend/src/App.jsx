import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ProDisplay from "./Components/ProductDisplay/ProDisplay";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/proDisplay" element={<ProDisplay />}>
          <Route path=":proID"  element={<ProDisplay />}/>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
