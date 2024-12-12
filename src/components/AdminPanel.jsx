import React, { useState } from "react";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({
    name: "",
    description: "",
    photo: "",
  });

  // Handle input changes for creating a new profile
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new profile
  const handleAddProfile = () => {
    if (newProfile.name && newProfile.description && newProfile.photo) {
      setProfiles((prev) => [...prev, { ...newProfile, id: prev.length + 1 }]);
      setNewProfile({ name: "", description: "", photo: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Delete a profile
  const handleDeleteProfile = (id) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      {/* Form to Add a New Profile */}
      <div className="form-container">
        <h2>Add New Profile</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newProfile.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProfile.description}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={handleChange}
          className="input-field"
        />
        <button onClick={handleAddProfile} className="add-button">
          Add Profile
        </button>
      </div>

      {/* List of Profiles */}
      <div className="profile-container">
        {profiles.length === 0 ? (
          <p>No profiles available.</p>
        ) : (
          profiles.map((profile) => (
            <div key={profile.id} className="profile-card">
              <img
                src={profile.photo}
                alt={profile.name}
                className="profile-image"
              />
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
              <button
                onClick={() => handleDeleteProfile(profile.id)}
                className="delete-button"
              >
                Delete Profile
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
