import React from 'react'
import styles from './Home.module.css'
import Video from '../Video/Video'
import { Link } from 'react-router-dom'
import pic from '../../images/ashpic2.JPG'

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
              <li>Graduate from coding bootcamp</li>
              <li>Front & Back-end web development</li>
              <li>React.js</li>
              <li>JavaScript</li>
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
              <li>Product</li>
              <li>Family</li>
              <li>Couples</li>
              <li>Portraits</li>
              <li>+ More</li>
            </ul>
          </div>
        </div>
        <div className={styles.work_header}>
          <div className={styles.work_together}>Let's Work Together!</div>
          <div className={styles.clients_header}>Currently taking clients for:</div>
          <div>
            <ul >
              <li className={styles.clients}> - Website Design.</li>
              <li className={styles.clients}> - Website build out connected to a domain.</li>
              <li className={styles.clients}> - Graphic Design (flyers, logos, cards, etc.).</li>
              <li className={styles.clients}> - Wedding Videography.</li>
              <li className={styles.clients}> - Photos: Family, Couple, and Portait shoots.</li>
            </ul>
          </div>
          <button className={styles.contact_btn}><Link to='/contact'>Contact me Here!</Link></button>
        </div>
        <div className={styles.home_pic}>
          <img className={styles.pic} src={pic} alt="pic" />
        </div>
      </div>
    </div>
  )
}
