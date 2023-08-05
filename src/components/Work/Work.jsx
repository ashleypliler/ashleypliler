import React from 'react'
import golden from '../../images/golden-hat.png'
import logo from '../../images/aphotoslogo.png'
import cookies from '../../images/reception.jpg'
import prime from '../../images/primewindow.jpg'
import glitzz from '../../images/glitzz.JPG'
import onoyo from '../../images/onoyo.JPG'
import plant from '../../images/plant.JPG'
import styles from './Work.module.css'
import { Link } from 'react-router-dom'


export const Work = () => {
  return (
    <div className={styles.portfolio}>
        <div className={styles.container}>
            <a href='https://www.youtube.com/watch?v=ghFuGxeND4U&t=3s'><img src={golden}></img></a>
            <Link to='/prime'><img src={prime}></img></Link> 
            <a href='https://www.youtube.com/watch?v=EcnvHOt5pho'><img src={logo}></img></a>
            <a href='https://ashleyallyse55.pixieset.com/markandmaddieweddingvideos/'><img src={plant}></img></a>
            <a href='https://ashleyallyse.pixieset.com/glitzzpermanentjewelry/'><img src={glitzz}></img></a>
            <a href='https://ashleyallysephotos.pixieset.com/onoyo/'><img src={onoyo}></img></a>
            <a href='https://ashleyallyse.pixieset.com/tylerandkellyreception/'><img src={cookies}></img></a>
        </div>
    </div>
  )
}
