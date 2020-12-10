import { Button } from '@material-ui/core'
import React from 'react'
import './SeasonItem.css'


function SeasonItem({  img, actorimgfirst, actorimagesecound, actorimagethird, title, actorfname, actortname, actorsname, actorfcountry, actorscountry, actortcountry }) {
    return (
        <div className="season">
        <div className="season__items">

        <div className="item__image">
       <img 
       src={img}
       />

        </div>

<div className="season__itemInfo">

<h1> {title} </h1>
<p>  Lorem Ipsum is simply dummy text of the printi
ry. <br></br>
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br></br>
when an unknown printer took a galley of type and scrambled it to make a typ<br></br>
specimen book. It has survived not only five centuries, but also the leap in elec<br></br>
tronic typesetting, remaining essentially unchanged. It was popularised Ipsum <br></br>
 in the 1960s with the release of Letraset sheets containing Lorem Ipsum passs<br></br>
 ges, and more recently with desktop publishing software like Aldus PageMake<br></br>
 including versions of Lorem Ipsum.ks
 Lorem Ipsum is simply dummy text of the 
 <br></br>
Lorem Ipsum has been the industry's standard dummy text ever since the 150, <br></br>
when an unknown printer took a galley of type and scrambled it to make a typ<br></br>
specimen book. It has survived not only five centuries, but also the leap in<br></br>
 electronic typesetting, remaining essentially unchanged. It was popularised <br></br>
 in the 1960s with the release of Letraset sheets containing Lorem Ipsum pas<br></br>
 ges, and more recently with desktop publishing software like Aldus PageMake<br></br>
 including versions of Lorem Ipsum.
</p>

<div className="season__actors">
<div className="actor">
<img 
src={actorimgfirst}
/>

<div className="actor__info">
<p>{actorfname} </p>
<h6> {actorfcountry} </h6>


</div>

</div>
<div className="actor">
<img 
src={actorimagesecound}
/>

<div className="actor__info">
<p>{actorsname} </p>
<h6> {actorscountry} </h6>


</div>

</div>
<div className="actor">
<img 
src={actorimagethird}
/>

<div className="actor__info">
<p>{actortname} </p>
<h6> {actortcountry} </h6>


</div>

</div>




</div>

<Button className="season__button"> Stay Tuned Subscribe! </Button>

</div>
        </div>
        </div>
    )
}

export default SeasonItem
