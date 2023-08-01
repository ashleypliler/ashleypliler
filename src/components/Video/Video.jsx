import React from 'react'
import video1 from "../../images/vid.mov";
import styles from './Video.module.css';

const Video = () => {
    return (
        <div className={styles.div}>
        <video className={styles.video} src={video1}  autoPlay muted loop/>
      </div>
    )
};

export default Video;