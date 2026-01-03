import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import Layout from "./component/Layout/Layout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import MainPage from "./component/Home/MainPage";
import Group from "./pages/Group";
import Home from "./pages/Home";

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/sign_up" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/profile" element={</>}/> */}
        <Route path="" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/group" element={<Group/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
