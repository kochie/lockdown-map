import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import Head from 'next/head'

// import styles from '../styles/map.module.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = (): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null)
  const postcodeId = 'kochie.cjhqarkd'
  const restrictedPostcodes = [
    '3012',
    '3021',
    '3032',
    '3038',
    '3042',
    '3046',
    '3047',
    '3055',
    '3060',
    '3064',
  ]

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: { lat: -37.7423107, lng: 145.0127503 },
      zoom: 10,
      // zoom: 13,
      // center: [4.899, 52.372]
    })

    map.on('mouseenter', 'postcodes', function () {
      map.getCanvas().style.cursor = 'pointer'
    })

    map.on('mouseleave', 'postcodes', function () {
      map.getCanvas().style.cursor = ''
    })

    map.on('load', () => {
      map.addLayer({
        id: 'postcodes',
        type: 'fill',
        source: {
          type: 'vector',
          url: `mapbox://${postcodeId}`,
        },
        'source-layer': 'SDM730435-7u4d6a',
        filter: [
          'match',
          ['get', 'POSTCODE'],
          restrictedPostcodes,
          true,
          false,
        ],
        paint: {
          // 'line-width': 1,
          'fill-color': 'rgba(200, 100, 240, 0.4)',
          'fill-outline-color': 'rgba(200, 100, 240, 1)',
        },
      })

      // map.setFilter('postcodes', )
    })

    map.on('click', 'postcodes', function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<p>Postcode: ${e.features[0].properties.POSTCODE}</p>`)
        .addTo(map)
    })

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    )
    map.addControl(new mapboxgl.FullscreenControl())
    map.addControl(new mapboxgl.NavigationControl())

    return () => {
      map.remove()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Lockdown Map</title>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div style={{ height: '100%' }} ref={mapRef} />
    </>
  )
}

export default Map
