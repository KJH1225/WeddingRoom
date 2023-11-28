import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Mcarousel.scss";
import { API_URL } from "../../config/contansts";
import axios from 'axios';

export default function App() {
  const [halls,setHalls] = useState([]);

  useEffect(()=> {
    axios.get(`${API_URL}/hall`)
    .then(res => {
      setHalls(res.data);
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  },[]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="App3">
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          {halls.map(hall =>
            <div>
              <img src={hall.hallImg}/>
              <h3>{hall.hallName}</h3>
              <p>수용인원 {hall.Capacity}명. 주차가능 {hall.ParkingCapacity}</p>
            </div>
          )} 
        </Carousel>
      </div>
    </div>
  );
}