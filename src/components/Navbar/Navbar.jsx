import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [nav, setNav] = useState(false)

  return (

    <header className={styles.navbar}>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]} >
          <li>
            <a href='/' className={styles.links}>HOME</a>
          </li>
          <li>
            <a href='/work' className={styles.links}>WORK</a>
          </li>
          <li>
            <a href='/about' className={styles.links}>ABOUT</a>
          </li>
          <li>
            <a href='/contact' className={styles.links}>CONTACT</a>
          </li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        
      </div>
    </header>
  )
}
