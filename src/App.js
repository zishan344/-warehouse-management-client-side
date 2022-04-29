import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Login from "./component/page/Account/Login/Login";
import Register from "./component/page/Account/Register/Register";
import AddItem from "./component/page/AddItem/AddItem";
import Blogs from "./component/page/Blogs/Blogs";
import Home from "./component/page/Home/Home";
import ManageItem from "./component/page/MnageItem/ManageItem";
import MyItems from "./component/page/MyItems/MyItems";
import RequireAuth from "./component/RequireAuth/RequireAuth";
import Header from "./component/Sheard/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/manageItem" element={<ManageItem></ManageItem>}></Route>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/myItem" element={<MyItems></MyItems>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
