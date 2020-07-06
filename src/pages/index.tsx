import React from 'react'
import { Heading, Alert } from 'fannypack'
// import { Timeline } from 'fannypack'
// import Head from 'next/head'

import Map from '../components/Map'

import styles from '../styles/index.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import EventTimeline from '../components/Timeline'

export const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.jumbotron}>
        <Heading marginLeft={'2em'} color={'white'} className={styles.heading}>
          Victoria Postcode Lockdown Map
        </Heading>
      </div>
      <div className={styles.alert}>
        <Alert hasIcon type="danger">
          While every attempt has been made to make sure the information
          presented here is accurate and up to date, this is not an official
          webite sanctioned by any governing authority. Please use the
          information you find here in conjunction with the states official{' '}
          <a
            style={{ textDecoration: 'underline', fontWeight: 'bold' }}
            href={
              'https://www.dhhs.vic.gov.au/restrictions-restricted-postcodes-covid-19'
            }
          >
            website
          </a>
          .
        </Alert>
      </div>
      <div id="map" className={styles.map}>
        <Map />
      </div>
      <div id="timeline" className={styles.timeline}>
        <Heading use={'h2'}>Event Timeline</Heading>
        <EventTimeline />
      </div>
      <Footer />
    </div>
  )
}

export default Home
