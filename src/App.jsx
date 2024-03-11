import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/update";
import Read from "./components/read";
import Home from "./components/home";
import Create from "./components/create";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/read" element={<Read />}></Route>
        <Route path="/update" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
