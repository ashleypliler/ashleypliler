import React from 'react'
import styles from './Home.module.css'
import Video from '../Video/Video'
export const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.vid}><Video/></div>
    <div className={styles.skills}>
      <div>What I Do</div>
      <div className=''>
      
      </div>
    </div>
    </div>
  )
}
