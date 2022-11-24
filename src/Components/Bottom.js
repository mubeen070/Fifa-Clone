import React from "react";
import "../Style/bottom.css";
import { useState } from "react";
const CardData = [
  {
    id: 1,
    thumb: "./brasil.png",
    title: "Brazil",
    points: 12412,
  },
  {
    id: 2,
    thumb: "./germany.png",
    title: "Germany",
    points: 2232,
  },
  {
    id: 3,
    thumb: "./france.jpg",
    title: "France",
    points: 22322,
  },
  {
    id: 4,
    thumb: "./argentina.png",
    title: "Argentina",
    points: 22322,
  },
  {
    id: 5,
    thumb: "./england.png",
    title: "England",
    points: 22322,
  },
];

const MiddleBottom = (props) => {
  const [state, setState] = useState(CardData);

  const imgSt = {
    width: "50px",
    height: "30px",
  };

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-4">
            <img src="./cokexfifa.png" alt="cokexfifa" />
            <h2>WORLD RANKING</h2>
            <p>
              The official world rankings of the international mens and womens
              teams.
            </p>
            <h4>
            FIFA/Coca-Cola World ranking
            </h4>
          </div>
          <div className="col-lg-4">
            <h3>MEN</h3>
            <table>
              <tr style={{textAlign:'center'}}>
                <th >RK</th>
                <th className="px-5">Team</th>
                <th >Points</th>
              </tr>
              {CardData.map((item) => (
                <tr key={item.id} style={{ paddingTop: "50px" }}>
                  <td>{item.id}</td>
                  <td className="px-5">
                    <img className="mx-2" src={item.thumb} style={imgSt} />
                  {item.title}
                  </td>
                  <td>{item.points}</td>
                </tr>
              ))}
            </table>
          </div>
          <div className="col-lg-4">
          <h3>WOMEN</h3>
            <table>
              <tr style={{textAlign:'center'}}>
                <th>RK</th>
                <th>Team</th>
                <th>Total Points</th>
              </tr>
              {CardData.map((item) => (
                <tr key={item.id} style={{ paddingTop: "50px" }}>
                  <td>{item.id}</td>
                  <td className="px-5">
                    <img className="mx-2" src={item.thumb} style={imgSt} />
                  {item.title}
                  </td>
                  <td>{item.points}</td>
                </tr>
              ))}
            </table>
          </div>

        </div>
      </div>
    </>
  );
};
export default MiddleBottom;
