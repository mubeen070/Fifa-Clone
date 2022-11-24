import { useState } from "react";
import MiddleBottom from "./Bottom";
const Men = [
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
const MenRanking = () => {
    const [ranking , setRanking] = useState(Men);
    
    return(
    <>
    <MiddleBottom ranking = {ranking}/>
    </>
    )
}
