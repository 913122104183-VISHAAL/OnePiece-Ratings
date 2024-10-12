import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import PageNotFound from "./Pages/PageNotFound";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Submission from "./Components/Submission";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      {/* <PrivateRoutes /> 

      Role based Access 
      
      1. Admin
      2. User
      
    */}
    </BrowserRouter>
  );
}

export default App;
