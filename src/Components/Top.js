import React from "react";
import "../Style/top.css";
import { useState } from "react";
const CardData = [
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
    desc: "Matuidi: Football has the power to create a better world",
    foot: "11-22-2022",
    thumb: "./matuidi.jpg",
  },
];

const MiddleTop = () => {
  const [state, setState] = useState(CardData);

  const imgSty = {
    height:'10rem',
    width:'16rem',
    padding: '10px'
  }

  return (
    <>
      <div className="container-fluid" >
        <div className="row ">
          <div className="col-4" style={{padding:'40px 100px', color:"white"}}>
            <h1>Football Unites the World</h1>
            <p>
              Football Unites the World is a global movement to inspire, unite
              and develop through football.
            </p>
            <h2>More About This</h2>
          </div>
          <div className="col-8" style={{padding:0}}>
            {CardData.map((item) => (
              <div
                className="card"
                style={{ width: "16rem",height:'22rem', display: "inline-block" }}
                key={item.id}
              >
                <img className="card-img-top" src={item.thumb} alt="Card" style={imgSty}/>
                <div className="card-body">
                  <h5 className="card-text">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
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
            {CardData.map((item) => (
              <div
                className="card"
                style={{
                  backgroundColor: "white",
                  height: "6rem",
                  width: "24.3rem",
                  display: "inline-block",
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
                      borderRadius:'50px',
                      padding: '5px 5px 5px 5px'
                    }}
                  />
                  <p className="card-text px-3 pt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default MiddleTop;
