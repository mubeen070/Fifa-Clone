import MiddleBottom from "./Components/Bottom";
import Footer1 from "./Components/Footer";
import Menu from "./Components/Menu";
import MiddleTop from "./Components/Top";

function App() {
  return (
    <>
      <Menu />
      <div className="container" >
        <div className="row">
          <div className="col-lg-2"style={{border:'1px solid black'}}>
            <h1>Hi I am left side bar</h1>
          </div>
          <div className="col-lg-10">
            <MiddleTop />
            <MiddleBottom />
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}

export default App;
