import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Carousel from "./component/Carousel";
import Main from "./component/Main";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import AuthorFooter from "./component/AuthorFooter";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Main />
      <Contact />
      <Footer />
      <AuthorFooter />
    </>
  );
}

export default App;
