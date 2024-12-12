import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Mock profiles data
    const mockProfiles = [
      {
        id: 1,
        name: "John Doe",
        description: "Software Engineer",
        photo: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Jane Smith",
        description: "Graphic Designer",
        photo: "https://via.placeholder.com/150",
      },
    ];
    setProfiles(mockProfiles);
  }, []);

  return (
    <div>
      {/* Admin Panel Link */}
      <div className="admin-link">
        <Link to="/admin">Admin Panel</Link>
      </div>

      {/*<h1>Profile Mapper</h1>

      {/* Display profiles */}
      <div className="profile-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img src={profile.photo} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <Link to={`/profile/${profile.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      
      <p>
        I am really sorry for creating a very basic website. My End semister exams are going on and due to this i am not able to design the website to the extent you wanted
        but i wanted to submit something.
      </p>
      
     
    </div>
  );
};

export default HomePage;
