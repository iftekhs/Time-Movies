import { Button } from '@material-ui/core';
import React from 'react';
import './Season.css';
import SeasonItem from './SeasonItem.js';

function Season() {
  return (
    <div className="season">
      <SeasonItem
        title="Hobbit series is out soon Stay Tuned!"
        img="https://ajcarlisle.files.wordpress.com/2014/02/the-hobbit-the-desolation-of-smaug-new-line-cinema-warner-bros-2013.jpg"
        actorimgfirst="https://www.gstatic.com/tv/thumb/persons/279370/279370_v9_bc.jpg"
        actorimagesecound="https://www.gstatic.com/tv/thumb/persons/310042/310042_v9_bb.jpg"
        actorimagethird="https://www.gstatic.com/tv/thumb/persons/19046/19046_v9_bb.jpg"
        actorfname="Martin Freeman"
        actorfcountry="actor"
        actorsname="Richard Armitage"
        actorscountry="Film actor"
        actortname="Elijah Wood"
        actortcountry="American actor"
      />

      <SeasonItem
        title="The Walking Dead"
        img="https://www.denofgeek.com/wp-content/uploads/2013/04/walkingdead1_0.jpg?fit=720%2C404"
        actorimgfirst="https://www.gstatic.com/tv/thumb/persons/156570/156570_v9_bd.jpg"
        actorimagesecound="https://www.gstatic.com/tv/thumb/persons/30812/30812_v9_ba.jpg"
        actorimagethird="https://www.gstatic.com/tv/thumb/persons/167392/167392_v9_bb.jpg"
        actorfname="Norman Reedus"
        actorfcountry="American actor"
        actorsname="Jeffrey Dean Morgan"
        actorscountry="American actor"
        actortname="Lennie James"
        actortcountry="British actor"
      />

      <SeasonItem
        title="IT series is out soon Stay Tuned!"
        img="https://thepoptopic.com/wp-content/uploads/2019/09/it-chapter-two.jpg"
        actorimgfirst="https://www.gstatic.com/tv/thumb/persons/435/435_v9_bc.jpg"
        actorimagesecound="https://upload.wikimedia.org/wikipedia/commons/e/e5/Marlon_Brando_%28cropped%29.jpg"
        actorimagethird="https://www.gstatic.com/tv/thumb/persons/2657/2657_v9_bb.jpg"
        actorfname="Leonardo DiCaprio"
        actorfcountry="American actor"
        actorsname="Marlon Brando"
        actorscountry="American actor"
        actortname="Al Pacino"
        actortcountry="American actor"
      />
    </div>
  );
}

export default Season;
