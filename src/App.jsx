import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import Layout from "./component/Layout/Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import MainPage from "./component/Home/MainPage";
import Group from "./pages/Group";

function App() {

  return (
    <>
     
     <BrowserRouter>
      <Routes>
        <Route path="/sign_up" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<MainPage/>}/>
        <Route path="" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/group" element={<Group/>}/>
        </Route>
      </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
