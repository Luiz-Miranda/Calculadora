import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "Components/Navbar";
import Measures from "pages/Measures";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Measures />} />       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;