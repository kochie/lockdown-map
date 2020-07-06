import React from 'react'
import { Heading, Alert, Link, Card } from 'fannypack'
// import { Timeline } from 'fannypack'
// import Head from 'next/head'

import Map from '../components/Map'

import styles from '../styles/index.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import EventTimeline from '../components/Timeline'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

export const Home = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div id="top" style={{ position: 'absolute', top: '-5em' }} />
      <NextSeo
        title="Victorian Lockdown Map"
        description="A visual guide to the lockdown restrictions in place in the state of Victoria."
        canonical="https://lockdownmap.melbourne/"
        openGraph={{
          url: 'https://lockdownmap.melbourne',
          title: 'Victorian Lockdown Map',
          description:
            'A visual guide to the lockdown restrictions in place in the state of Victoria.',
          images: [
            {
              url: 'https://lockdownmap.melbourne/images/flinders-street.jpg',
              width: 2500,
              height: 1660,
              alt: 'Flinders St Station',
            },
          ],
          // eslint-disable-next-line @typescript-eslint/camelcase
          site_name: 'Victorian Lockdown Map',
        }}
        twitter={{
          handle: '@kochie',
          site: '@kochie',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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
              visit the{' '}
              <Link href={'https://www.dhhs.vic.gov.au/coronavirus'}>
                Department of Health and Human Services website
              </Link>{' '}
              to see what restrictions are in place.
            </p>
            <p>
              Current public housing apartments that are in total lockdown are
              indicated with the markers.
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
