import React from 'react'
// import Head from 'next/head'

import Map from '../components/Map'

import styles from '../styles/index.module.css'

export const Home = (): JSX.Element => {
  return (
    <>
      <div>
        <h1>Victoria Postcode Lockdown Map</h1>
      </div>
      <div className={styles.map}>
        <Map />
      </div>
      <div>
        <p>
          Currently state 3 restrictions are in effect in the following
          postcodes 3012, 3021, 3032, 3038, 3042, 3046, 3047, 3055, 3060 and
          3064. This map is meant to be used as a visual aid representing the
          offical data found on the{' '}
          <a href="https://www.dhhs.vic.gov.au/restrictions-restricted-postcodes-covid-19">
            website
          </a>{' '}
          for the Victorian Health and Human Services Department
        </p>
      </div>
    </>
  )
}

export default Home
