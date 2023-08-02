import React from 'react'
import styles from './Home.module.css'
import Video from '../Video/Video'
export const Home = () => {
  return (
    <div className={styles.container}>
    <div className={styles.vid}><Video/></div>
    <div className={styles.skills}>
      <div className={styles.what_header}>What I Do</div>
      <div>
          <div className={styles.header_website}>WEBSITES</div>
          <div className={styles.header_design}>DESIGN</div>
          <div className={styles.header_photo}>PHOTO & VIDEO</div>
      </div>
      <div className={styles.whatido}>
        <div>
          <ul className={styles.website}>
            <li>Front & Back-end web development</li>
            <li>React.js</li>
            <li>JavaSript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>+ More</li>
          </ul>
        </div>
        <div>
          <ul className={styles.design}>
            <li>Graphic Design</li>
            <li>UX/UI Design</li>
            <li>Logos</li>
            <li>Websites</li>
            <li>Flyers</li>
            <li>+ More</li>
          </ul>
        </div>
        <div>
          <ul className={styles.photos}>
            <li>Wedding Videography</li>
            <li>Products</li>
            <li>Family Shoots</li>
            <li>Couple Shoots</li>
            <li>Portrait Shoots</li>
            <li>+ More</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
