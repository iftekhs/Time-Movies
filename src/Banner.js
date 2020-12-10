import { Button } from '@material-ui/core'
import React from 'react'
import './Banner.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

function Banner() {
    
    return (
        <motion.div initial={{ y:"-1000px"}} animate={{ y:"0px" }} transition={{ delay:0.50}} className="banner">
    <div className="banner__info">         
<h1> Venom The movie of <br></br> the Black  creature! </h1>
<p> Venom is Released! <br></br>
Click the button below to<br></br>
Watch The Movie
Live!
</p>

<Link className="linkwatchnow" to='/venom'><Button className="banner__button"> Watch Now! </Button></Link>

</div>


        </motion.div>
    )
}

export default Banner


