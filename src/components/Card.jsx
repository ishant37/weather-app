import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import CloudIcon from '@mui/icons-material/Cloud';
export default function Cardimg({ info }) {
  const DUSTY = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5fGVufDB8fDB8fHww";
  let RAINY = "https://plus.unsplash.com/premium_photo-1667516468789-81a6ba214724?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";
  let SUNNY = "https://media.istockphoto.com/id/537794373/photo/panoramic-warm-sunset.webp?b=1&s=170667a&w=0&k=20&c=qXmNrGt9UmlWpCHkjpvZ8YQMXrzP5mH1NL7FwiQ-Amw=";
  let CLOUDY = "https://plus.unsplash.com/premium_photo-1664112065598-77832fcd9b8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let SNOWY = "https://images.unsplash.com/photo-1635495672599-cb0c64399b58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25vd3klMjBzZWFzb258ZW58MHx8MHx8fDA%3D";

  return (
    <>
      <h3>Weather Info -{info.description} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 25 ? <AcUnitIcon /> : info.temp > 40 ? <WbSunnyIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <CloudIcon />}</h3>
      <div className='card'>
        <Card sx={{ maxWidth: 345 }}>

          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={info.humidity > 70 ? RAINY : info.temp > 25 ? SUNNY : info.temp > 40 ? DUSTY : info.temp < 3 ? SNOWY : CLOUDY}
              alt="weather"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {(info.city || '').toUpperCase()}
              </Typography>
              <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}%</p>
                <p>Minimum temp = {info.temp_min}&deg;C</p>
                <p>Maximum temp = {info.temp_max}&deg;C</p>
                <p>Feels like = {info.feels_like}</p>
                <p aria-disabled>The weather can be described as {info.description} and feels like {info.feels_like}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}