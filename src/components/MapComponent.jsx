import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { getDecryptedApiKey } from "../utils/appApi";

const MapComponent = ({ lat, lng }) => {
  // Retrieve the decrypted API key
  const apiKey = getDecryptedApiKey();
  console.log(apiKey);

  // Define map styles and default center coordinates
  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: lat || 37.7749, // Default latitude (e.g., San Francisco)
    lng: lng || -122.4194, // Default longitude
  };

  // Handle missing API key
  if (!apiKey) {
    return <p>Failed to load the map. API key is missing or invalid.</p>;
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
