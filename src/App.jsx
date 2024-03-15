import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./components/update";
import Read from "./components/read";
import Home from "./components/home";
import Create from "./components/create";
import datajson from "./data/db.json";
import { userContext } from "./context/user-context";
import { useState } from "react";

export default function App() {
  const copyData = [...datajson.users];
  const [listUsers, setListUsers] = useState(copyData);
  return (
    <userContext.Provider value={{ listUsers: { listUsers, setListUsers } }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Home />}></Route>
          <Route path="/read/:id" element={<Read />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}
