import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FetchItems from "../Components/FetchItems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header></Header>
      <FetchItems />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
