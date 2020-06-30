import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import Head from 'next/head'

import styles from "../styles/map.module.css"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = (): JSX.Element => {
    const mapRef = useRef<HTMLDivElement>(null)
 
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: {lat: -36.5766575, lng: 144.3685087},
            zoom: 8
            // zoom: 13,
            // center: [4.899, 52.372]
        });

        return () => {
            map.remove()
        }
    }, []) 

    return (
        <>
        <Head>
            <title>Hello</title>
            <link href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css" rel="stylesheet" />
        </Head>
        <div className={styles.map} ref={mapRef} />
        </>
    )
}

export default Map