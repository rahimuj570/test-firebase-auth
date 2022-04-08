import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Signin from "./Components/Signin";
import SuccessPage from "./Components/SuccessPage";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/success" element={<SuccessPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
