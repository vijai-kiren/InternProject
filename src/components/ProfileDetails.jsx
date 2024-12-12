import React from "react";
import { useParams } from "react-router-dom";
import MapComponent from "./MapComponent";

const ProfileDetails = () => {
  const { id } = useParams();

  const mockProfile = {
    id,
    name: "John Doe",
    address: "123 Main St, San Francisco, CA",
    lat: 37.7749,
    lng: -122.4194,
  };

  return (
    <div>
      <h1>Profile Details</h1>
      <h2>{mockProfile.name}</h2>
      <p>{mockProfile.address}</p>
      <MapComponent lat={mockProfile.lat} lng={mockProfile.lng} />
    </div>
  );
};

export default ProfileDetails;
