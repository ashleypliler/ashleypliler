import React from 'react'
import styles from './About.module.css';
import ash from '../../images/ashpic.jpg'
export const About = () => {
  return (
    <div className={styles.container}>
      <img src={ash} alt='ash'></img>
      <div className={styles.words}>     
        Hello! I am Ashley Pliler and I love design. Using my imagination to get an idea across in a new and creative way is something I am passionate about. My love of design drove me to learn more and I graduated from DevMountain Software Bootcamp in full-stack web-development. I love front-end web development and creating/designing websites that are aesthetic and easy to navigate. Another way I express my creativity is through photography and videography. In my experience, these skills; web-development, graphic design, and photography are all connected in creating a brand and helping a company reach their goals. I am eager to work with clients to help build their vision.      
      </div>
    </div>
  )
}
