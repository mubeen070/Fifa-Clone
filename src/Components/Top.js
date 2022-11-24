import React from "react";
import "../Style/top.css";
import { useState } from "react";
// const CardData =

const MiddleTop = () => {
  const [state, setState] = useState([
    {
      id: 1,
      title: "Football Unites The World",
      desc: "Matuidi: Football has the power to create a better world",
      foot: "10-22-2022",
      thumb: "./matuidi.jpg",
    },
    {
      id: 2,
      title: "Football Unites The World",
      desc: "Messi says he’s fine, gets ovation and applause",
      foot: "12-22-2022",
      thumb: "./messi.jpg",
    },
    {
      id: 3,
      title: "Football Unites The World",
      desc: "Messi says he’s fine, gets ovation and applause",
      foot: "12-22-2022",
      thumb: "./messi.jpg",
    },
  ]);
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Football",
      desc: "Football has the power!",
      foot: "5-22-2022",
      thumb: "./matuidi.jpg",
    },
    {
      id: 2,
      title: "Football",
      desc: "Messi says he gets ovation!",
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
    {
      id: 4,
      title: "Football Unites The World",
      desc: "Neymar says he’s fine.",
      foot: "10-22-2022",
      thumb: "./messi.jpg",
    },
    {
      id: 5,
      title: "Football Unites The World",
      desc: "Ronaldo says he’s fine.",
      foot: "10-22-2022",
      thumb: "./messi.jpg",
    },
    {
      id: 6,
      title: "Football Unites The World",
      desc: "Messi says he’s fine.",
      foot: "10-22-2022",
      thumb: "./messi.jpg",
    },
  ]);

  const handledelete = (items1) => {
    console.log("Deleting.." + items1);

    const newdata = state.filter((items) => items.id != items1);
    setState(newdata);
    console.log("Deleted...");
  };
  const imgSty = {
    height: "10rem",
    width: "16rem",
    padding: "10px",
  };

  return (
    <>
      <div className="container-fluid" style={{ border: "1px solid black" }}>
        <div className="row ">
          <div
            className="col-4"
            style={{ padding: "40px 100px", color: "white" }}
          >
            <h1>Football Unites the World</h1>
            <p>
              Football Unites the World is a global movement to inspire, unite
              and develop through football.
            </p>
            <h2>More About This</h2>
          </div>
          <div className="col-8" style={{ padding: "50px" }}>
            {state.map((item) => (
              <div
                className="card"
                style={{
                  width: "16rem",
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
            <h5>More</h5>
            <div className="row">
              {news.map((item) => (
                <div className="col-lg-4">
                  <div
                    className="card"
                    style={{
                      backgroundColor: "white",
                      height: "6rem",
                      width: "14rem",
                      display: "inline-block",
                      textAlign: "left",
                      boxSizing:'border-box'
                    }}
                  >
                    <div className="d-flex flex-direction-row text-align-center">
                      <img
                        src={item.thumb}
                        alt="Card image"
                        style={{
                          height: "95px",
                          width: "100px",
                          display: "inline-block",
                          borderRadius: "20px",
                          padding: "5px 5px 5px 5px",
                        }}
                      />
                      <button
                    className="btn btn-danger"
                    onClick={() => handledelete(item.id)}
                    style={{
                      position: "absolute",
                      right: 5,
                      bottom: 10,
                      fontSize: "6px",
                    }}
                  >
                    Delete
                  </button>
                  
                      <p className="card-text px-3 pt-2">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MiddleTop;
