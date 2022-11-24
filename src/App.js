import MiddleBottom from "./Components/Bottom";
import Footer1 from "./Components/Footer";
import Menu from "./Components/Menu";
import MiddleTop from "./Components/Top";
import { useState } from "react";
import {Routes , Route} from 'react-router-dom';

function App() {
  const [state, setState] = useState([
    {
      id: 1,
      title: "Football",
      desc: "Matuidi: Football has the power to create a better world",
      foot: "5-22-2022",
      thumb: "./matuidi.jpg",
    },
    {
      id: 2,
      title: "Football",
      desc: "Messi says he’s fine, gets ovation and applause",
      foot: "12-29-2022",
      thumb: "./messi.jpg",
    },
    {
      id: 3,
      title: "Football Unites The World",
      desc: "Messi says he’s fine.",
      foot: "10-22-2022",
      thumb: "./messi.jpg",
    },
  ]);
  const handledelete = (items1) => {
    console.log("Deleting.." + items1);
    const newdata = state.filter((items) => items.id !== items1);
    setState(newdata);
    console.log("Deleted...");
  };
  const imgSty = {
    height: "10rem",
    width: "12rem",
    padding: "10px",
  };
  
  return (
    <>
      <Menu />

    
      <div className="container">
        <div className="row">
          <div className="col-lg-2" style={{ border: "1px solid black" }}>
            <h1 className="text-align-center pt-2 px-2">I am the side bar!</h1>
            {state.map((item) => (
              <div
                className="card"
                style={{
                  width: "12rem",
                  height: "22rem",
                  display: "inline-block",
                }}
                key={item.id}
                >
                <img
                  className="card-img-top"
                  src={item.thumb}
                  alt="Card"
                  style={imgSty}
                  />
                <div className="card-body">
                  <h5 className="card-text">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handledelete(item.id)}
                    style={{
                      position: "absolute",
                      right: 15,
                      bottom: 10,
                      fontSize: "11px",
                    }}
                    >
                    Delete
                  </button>
                  <p
                    className="text-muted footer"
                    style={{
                      position: "absolute",
                      left: 15,
                      bottom: -10,
                      fontSize: "11px",
                    }}
                  >
                    {item.foot}
                  </p>
                </div>
              </div>
            ))}
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
