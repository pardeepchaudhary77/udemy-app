import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home, Login, Register } from "./pages";

function App() {
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
