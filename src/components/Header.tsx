import React from 'react'
import { faMapMarkedAlt, faStream } from '@fortawesome/pro-duotone-svg-icons'

import styles from '../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.headerFlexbox}>
        <div className={styles.title}>
          Victoria <br />
          Lockdown Map
        </div>
        <div className={styles.tools}>
          <span>
            <a href="#map">
              Map <FontAwesomeIcon icon={faMapMarkedAlt} />
            </a>
          </span>
          <span>
            <a href="#timeline">
              Timeline <FontAwesomeIcon icon={faStream} />
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
