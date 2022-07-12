import React from "react";
import axios from "axios";
import { BallTriangle	 } from 'react-loader-spinner';

export default function Weather(props) {
  function showTemperature(response) {
    alert(`The temperature of ${response.data.name} is ${Math.round(response.data.main.temp)}°C`);
    console.log(response.data);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=f7dffd4359849bb28c77fa4fe304c30f&units=metric`;
  axios.get(url).then(showTemperature);
  return (
    <BallTriangle	io
    height="100"
    width="100"
    color='skyblue'
    ariaLabel='loading'
  />
  )
}