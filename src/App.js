import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
