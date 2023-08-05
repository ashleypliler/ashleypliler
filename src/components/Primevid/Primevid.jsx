import React from 'react'
import styles from './Primevid.module.css'
import vid from '../../images/primevid.mov'

export const Primevid = () => {
  return (
    <div>
        <a href='https://www.instagram.com/reel/CunPWJXgUqs/?hl=en'><video className={styles.video} src={vid} controls autoPlay loop/></a>
    </div>
  )
}
