import React from 'react'
// import {Font} from '@fortawesome/fontawesome-svg-core'
// import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/pro-duotone-svg-icons'

import styles from '../styles/footer.module.css'

const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerFlexbox}>
        <div>Made in Melbourne</div>
        <div className={styles.icons}>
          <a
            className={styles.link}
            href={'https://github.com/kochie/lockdown-map'}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithub}
              size={'lg'}
            />
          </a>
          <a className={styles.link} href={'https://twitter.com/kochie'}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faTwitter}
              size={'lg'}
            />
          </a>
          <a className={styles.link} href={'https://buymeacoff.ee/kochie'}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faCoffee}
              size={'lg'}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
