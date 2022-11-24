import React from "react";
const Partners = [
    {
        id:1,
        logo: './adidas.png'
    },
    {
        id:2,
        logo: './coca.png'
    },
    {
        id:3,
        logo: './wanda.png'
    },
    {
        id:4,
        logo: './hyundai.png'
    },
    {
        id:5,
        logo: './kia.png'
    },
    {
        id:6,
        logo: './qatar.jpg'
    }
]
const Footer1 = () => {
  const imgStyle = {
    height: "60px",
    width: "120px",
    margin: "40px"
  };

  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row d-flex align-items-center justify-content-center flex-direction-row pt-4">
          <h5 style={{ textAlign: "center" }}>FIFA Partners</h5>
          {Partners.map((item) => (
            <img src={item.logo} alt="" style={imgStyle} />
          ))}
        </div>
        <img className="mx-4" src="fifa.png" alt="fifa" style={imgStyle} />
        <div className="row">
          <div className="col-4 px-5">
            <h4 className="mx-4">EXPLORE</h4>
            <ul className="text-muted" style={{ listStyle: "none" }}>
              <li>Competitions</li>
              <li>About FIFA</li>
              <li>Women's Football</li>
              <li>Social Impact</li>
              <li>Football Development</li>
              <li>Technical</li>
              <li>Legal & Compliance</li>
              <li>FIFA/Coca-Cola World ranking</li>
            </ul>
          </div>
          <div className="col-3 px-5" style={{ display: "inline-block" }}>
            <h4 className="mx-4">ALSO VISIT</h4>
            <ul className="text-muted" style={{ listStyle: "none" }}>
              <li>All stories & topics</li>
              <li>Official documents</li>
              <li>Jobs & Careers</li>
              <li>Contact FIFA</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <ul
            className="d-flex flex-direction-row px-5"
            style={{ listStyle: "none" }}
          >
            <li className="px-3">
              <i class="bi bi-facebook"></i>
            </li>
            <li className="px-3">
              <i class="bi bi-instagram"></i>
            </li>
            <li className="px-3">
              <i class="bi bi-twitter"></i>
            </li>
            <li className="px-3">
              <i class="bi bi-youtube"></i>
            </li>
            <li className="px-3">
              <i class="bi bi-stack-overflow"></i>
            </li>
          </ul>
        </div>
        <ul
          className="text-muted d-flex flex-direction-row px-5"
          style={{ listStyle: "none", fontSize:'12px' }}
        >
          <li className="px-3">Terms of service</li>
          <li className="px-3">Data protection portal</li>
          <li className="px-3">Downloads</li>
          <li className="px-3">Cookie Settings</li>
        </ul>
        <p style={{fontSize:'12px' }}>Copyright © 1994 -2022 FIFA. All rights reserved.</p>
      </div>
    </>
  );
};
export default Footer1;
