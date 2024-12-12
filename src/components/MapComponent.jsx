import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = ({ lat, lng }) => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: lat || 37.7749,
    lng: lng || -122.4194,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDMsLOHE8YFNU8EhNk9wSUm1xJRRooSEEw">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
