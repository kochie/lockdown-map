import React from 'react'
import {
  faMapMarkedAlt,
  faStream,
  faLock,
} from '@fortawesome/pro-duotone-svg-icons'

import styles from '../styles/header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.headerFlexbox}>
        <a href="#top" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className={styles.heading}>
            <FontAwesomeIcon
              icon={faLock}
              style={{ marginRight: 10 }}
              size={'2x'}
            />
            <div className={styles.title}>
              Victoria <br />
              Lockdown Map
            </div>
          </div>
        </a>
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
