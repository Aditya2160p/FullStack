import { useState } from "react";
import React from "react";
import axios from "axios";
function Allcars() {
  const baseURL="http://localhost:8080/api/Vehicles"
  const [cars,setCars]=useState([])
  React.useEffect(() => {
    axios.get(`${baseURL}/allvehicles`).then((response) => {
      setCars(response.data);
    });
  }, []);
  console.log(cars)
  return(
    <>
    <ul>
      {cars.map((obj)=>{
        return (
          <li key={obj.vehicleid}>
             model:{obj. model}<br />
            manufacturer:{obj.manufacturer}<br />
            launchdate:{obj.launchdate}<br />
            price:{obj.price}<br />
          </li>
        )})
      }
    </ul>
    </>
  )
}
export default Allcars;