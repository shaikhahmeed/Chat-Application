import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import Layout from "./component/Layout/Layout";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Group from "./pages/Group";
import ProfilePage from "./component/Home/ProfilePage";
import ChatPage from "./pages/ChatPage";

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/sign_up" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="" element={<Layout/>}>
          <Route index element={<ProfilePage/>}/>
          <Route path="pp" element={<ProfilePage/>}/>
          <Route path="/chat" element={<ChatPage/>}/>
          <Route path="/group" element={<Group/>}/>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
