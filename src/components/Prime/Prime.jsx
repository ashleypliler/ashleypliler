import React from 'react'
import { Primevid } from '../Primevid/Primevid'
import styles from './Prime.module.css'
import pic from '../../images/primelogo.jpg'
import pic3 from '../../images/B12.png'


export const Prime = ({ closeModal }) => {

  return (
    <div className={styles.prime}>
      <div className={styles.container}>
        <Primevid className={styles.content}/>
        <a href='https://ashleyallysephotos.pixieset.com/prime/'><img className={styles.content} src={pic}/></a>
        <a href='https://ashleyallyse55.pixieset.com/primeivdesigns/'><img className={styles.content} src={pic3}/></a>
      </div>
    </div>
  )
}
