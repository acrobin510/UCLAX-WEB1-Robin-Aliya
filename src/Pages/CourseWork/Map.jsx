import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Map = () => {
    return <MapStyled className="Map">Map</MapStyled>;
};

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 34.013559,
            lng: -118.480745,
        },
        zoom: 11,
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <Map lat={34.013559} lng={-118.480745} text="My Marker" />
            </GoogleMapReact>
        </div>
    );
}

const MapStyled = styled.div``;
