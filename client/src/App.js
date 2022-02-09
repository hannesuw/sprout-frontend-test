import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DetailPage from "./views/DetailPage";
import HomePage from "./views/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="my-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
