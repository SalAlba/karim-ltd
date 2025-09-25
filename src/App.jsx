import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import AuthorFooter from "./component/AuthorFooter";
import AccidentManagementForm from "./component/AccidentManagement.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/accident-management"
          element={<AccidentManagementForm />}
        />
      </Routes>
      <Contact />
      <Footer />
      <AuthorFooter />
    </HashRouter>
  );
}

export default App;
