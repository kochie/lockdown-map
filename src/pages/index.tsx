import React from 'react'
import { Heading, Alert, Link, Card } from 'fannypack'
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
          <Link
            style={{ textDecoration: 'underline', fontWeight: 'bold' }}
            href={
              'https://www.dhhs.vic.gov.au/restrictions-restricted-postcodes-covid-19'
            }
          >
            website
          </Link>
          .
        </Alert>
      </div>
      <div id="map">
        <div className={styles.timeline}>
          <Card>
            <Heading use={'h2'}>Map</Heading>
            <p>
              Highlighted below are areas within the state where stage 3
              restrictions are now in place. If you live in these areas please
              visit the Department of Health and Human Services to see what
              restrictions are in place.
            </p>
          </Card>
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </div>
      <div id="timeline" className={styles.timeline}>
        <Card>
          <Heading use={'h2'}>Event Timeline</Heading>
          <EventTimeline />
        </Card>
      </div>
      <div className={styles.timeline}>
        <Card>
          <Heading use={'h2'}>Contributing</Heading>
          <p>
            To update any information or to report any bugs that you encounder
            please open an issue in{' '}
            <Link href={'https://github.com/kochie/lockdown-map/issues'}>
              Github
            </Link>{' '}
            and I&apos;ll take a look.
          </p>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default Home
