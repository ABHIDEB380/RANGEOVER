
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/main/Header'
import Store from './Component/main/Store'
import Team from './Component/main/Team'
import Contact from './Component/main/Contact';
import Journey from './Component/main/Journey';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Journey/>}/>
        <Route path="team" element={<Team/>} />
        <Route path="store" element={<Store/>} />
        <Route path="contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
