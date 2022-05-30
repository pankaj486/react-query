import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export const GoogleMap = () => {
    const zoom = 11
    const center = [
        {
            id: 1,
            lat: 59.955413,
            lng: 30.337844,
            text: "from Pankaj"
        },
        {
            id: 2,
            lat: 53.955413,
            lng: 37.337844,
            text: "from Kishan"
        },
        {
            id: 3,
            lat: 56.955413,
            lng: 20.337844,
            text: "from rahul"
        },
    ]

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBDjXt0wsh9QrwGxz_WeAKdjuwEmrZ9fe4' }}
                defaultCenter={{lat:59.567890, lng: 65.78875}}
                defaultZoom={zoom}
            >

                {center.map((center) => {
                    return <AnyReactComponent
                        lat={center.lat}
                        lng={center.lng}
                        text={center.text}
                    />
                })}
            </GoogleMapReact>
        </div>
    );
}
