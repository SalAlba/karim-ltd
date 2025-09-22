import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Carousel from "./component/Carousel";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Main />
      <Footer />
    </>
  );
}

export default App;
