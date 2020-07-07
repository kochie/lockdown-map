import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import Head from 'next/head'
import geocoding from '@mapbox/mapbox-sdk/services/geocoding'
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// import styles from '../styles/map.module.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
const geoClient = geocoding({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
})

// class ZoomControl extends Control {

// }

const Map = (): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null)
  const postcodeId = 'kochie.cjhqarkd'
  const councilId = 'kochie.639o2kkw'
  const futureRestrictedCouncils = [
    '25340', // mornington penninsula
    '21450', // cardinia,
    '21610', // Casey
    '22170', // Frankston
    '22670', // Greater Dandenong
    '23430', // Kingston
    '20910', // Bayside
    '22310', // Glen Eira
    '24970', // Monash
    '23670', // Knox
    '27450', // Yarra Ranges
    '24410', // Maroondah
    '26980', // Whitehorse
    '21110', // Boroondara
    '26350', // Stonnington
    '25900', // Port Phillip
    '24600', // Melbourne
    '27350', // Yarra
    '23110', // Hobsons Bay
    '24330', // Maribyrnong
    '25060', // Moonee Valley
    '25250', // Moreland
    '21890', // Darebin
    '20660', // Banyule
    '24210', // Manningham
    '25710', // Nillumbik
    '27070', // Whittlesea
    '23270', // Hume
    '21180', // Brimbank
    '27260', // Wyndham
    '24850' // Mitchell
  ]

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
    '3031',
    '3051',
  ]

  const publicHousingAddresses = [
    '12 Holland Court, Flemington',
    '120 Racecourse Road, Flemington',
    '126 Racecourse Road, Flemington',
    '130 Racecourse Road, Flemington',
    '12 Sutton Street, North Melbourne',
    '33 Alfred Street, North Melbourne',
    '159 Melrose Street, North Melbourne',
    '9 Pampas Street, North Melbourne',
    '76 Canning Street, North Melbourne',
  ]

  const publicHousingRequests = publicHousingAddresses.map(async (address) => {
    const request = await geoClient
      .forwardGeocode({
        query: address,
        autocomplete: false,
        limit: 1,
        mode: 'mapbox.places',
      })
      .send()

    return request.body?.features[0]
  })

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

    Promise.all(publicHousingRequests).then((h) =>
      h.forEach((feature) => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
          feature.place_name
        )

        // console.log(feature)

        const marker = new mapboxgl.Marker()
          .setLngLat(feature?.center)
          .setPopup(popup)
          .addTo(map)

        // marker.on('hover', (e) => {
        //   console.log("HELLO")
        // })

        marker.getElement().onclick = (e) => {
          marker.togglePopup()
          e.stopPropagation()
        }
      })
    )

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

      map.addLayer({
        id: 'lga',
        type: 'fill',
        source: {
          type: 'vector',
          url: `mapbox://${councilId}`,
        },
        'source-layer': 'SDM734210-9hkugu',
        filter: [
          'match',
          ['get', 'ABSLGACODE'],
          futureRestrictedCouncils,
          true,
          false,
        ],
        paint: {
          // 'line-width': 1,
          'fill-color': 'rgba(100, 110, 200, 0.4)',
          'fill-outline-color': 'rgb(0, 0, 0)',
        },
      })

      // map.setFilter('postcodes', )
    })

    // console.log(map.getLayer('lga'))

    map.on('click', 'postcodes', function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<p>Postcode: ${e.features[0].properties.POSTCODE}</p>`)
        .addTo(map)
    })

    map.on('click', 'lga', function (e) {
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<p>LGA: ${e.features[0].properties.LGA_NAME}</p>`)
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
    map.addControl(new mapboxgl.ScaleControl())

    // map.addControl(new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl
    // }));
    // map.scrollZoom.disable()

    return () => {
      map.remove()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Victoria Lockdown Map</title>
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
