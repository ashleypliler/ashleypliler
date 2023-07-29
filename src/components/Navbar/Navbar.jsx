import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Logo from "../../images/LOGO.png"

export const Navbar = () => {
    const [nav, setNav] = useState(false)

  return (

    <header className={styles.navbar}>
      <div className={styles.logo}>ashley pliler</div>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]} >
          <li>
            <a href='/' className={styles.links}>WORK</a>
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
