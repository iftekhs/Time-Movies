import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card.js';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <Banner />

      <Button className="movie__title">The Action</Button>

      <div className="home__cardSection">
        <Link to="/venom">
          {' '}
          <Card
            img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvGNXRmC76GfZrgM7P_oY0nZqg00bsjC7E5zu4dZBReXiHD_kt"
            title="Venom"
            description="The movie of the Black Creature"
            date="Aug 23, 2018"
          />
        </Link>

        <Link to="/hobsandshaw">
          <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrabjV8ccyLhEDFZfKKxqNbiNokJDmXQMdcg&usqp=CAU"
            title="Hoobs and Shaw"
            description="Fast and Furious Hobs and Shaw"
            date="July 23, 2019"
          />
        </Link>

        <Link to="/rampage">
          <Card
            img="https://contentserver.com.au/assets/639531_rampage_13499890.jpg"
            title="Rampage"
            description="The movie of the Big Gorilla"
            date="April 11, 2018"
          />
        </Link>

        <Link to="/jurassicworld">
          <Card
            img="https://upload.wikimedia.org/wikipedia/en/c/ce/JurassicWorldDominion_Poster.jpeg"
            title="Jurassic world Dominion"
            description="Dinasource Adventure"
            date="June 10, 2022"
          />
        </Link>

        <Link to="/missionimpossible">
          <Card
            img="https://bleedingcool.com/wp-content/uploads/2018/07/mission-impossible-fallout-poster-imax.jpg"
            title="Mission Impossible Fallout"
            description="Falling Mission"
            date="July 12, 2018"
          />
        </Link>
      </div>

      <Button className="movie__title">The Sci-fi</Button>

      <div className="home__cardSection">
        <Link to="/interstellar">
          <Card
            img="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            title="INTERSTELLAR"
            description="The movie of InterStellar"
            date="October 26, 2014"
          />
        </Link>

        <Link to="/martian">
          <Card
            img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSiwreHO3oFxkPPk2yyQXBEgB5RMaGsJguPKY8rtdwLaau_DW0f"
            title="MARTIAN"
            description="The movie of the Man of the planet mars"
            date="September 11, 2015"
          />
        </Link>

        <Link to="/arrival">
          <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn4A0eiVOH4KoM8xqCxxNQM0NAY7lZQZ0glVIUIUOJYb9cryW"
            title="ARRIVAL"
            description="Arrival of another Creature"
            date="September 1, 2016"
          />
        </Link>

        <Link to="/snowpiercer">
          <Card
            img="https://i.pinimg.com/originals/dc/67/d6/dc67d66f3c604ecfd1956a7d9376c50f.jpg"
            title="SNOWPIERCER"
            description="Extinction 0.1"
            date="2020"
          />
        </Link>

        <Link to="/cloverfield">
          <Card
            img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSyg5nxjdmLWY6qGhjY2aykhggZmd_FVZ9nJurJJdoBNR_XOz_e"
            title="THE CLOVERFIELD PARADOX"
            description="CLOVER FIELD"
            date="February 5, 2018"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
