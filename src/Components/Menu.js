import React from "react";
import "../Style/menu.css";
const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="row1">
          <img src="fifa.png" alt="fifa" />
          <ul className="head">
            <li>
              <i class="bi bi-search"></i>
            </li>
            <li>Store </li>
            <li>Tickets</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="row">
          <ul className="list">
            <li className="listItems">Tournaments on Fifa+</li>
            <li className="listItems">About Fifa</li>
            <li className="listItems">Women's Football</li>
            <li className="listItems">Social Impact</li>
            <li className="listItems">Football Development</li>
            <li className="listItems">Technical</li>
            <li className="listItems">legal</li>
            <li className="dropdown listItems">
              World ranking
              <ul className="dropdown-menu">
                <li className="listItems">Men's ranking</li>

                <li className="listItems">Women's ranking</li>

                <li className="listItems">News</li>

                <li className="listItems">Ranking procedures-Men</li>

                <li className="listItems">Ranking procedures-Women</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Menu;
