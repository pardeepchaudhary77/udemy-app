import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, Login, Register } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase/Config";
import { verifyAuth } from "./features/actions/userAction";

function App() {
  const {loading, error, success, userInfo} = useSelector(state => state.user)
  const dispatch = useDispatch()

 //dispatch(verifyAuth())
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}


export default App;
