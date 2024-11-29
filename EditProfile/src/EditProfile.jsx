import React, { useState } from "react";

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleImageChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Add logic for saving changes (API call or local state update)
    console.log("Profile Updated:", { username, newPassword });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSaveChanges}>
        {/* Profile Picture */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Picture
          </label>
          <div className="flex items-center space-x-4">
            <img
              src={profilePic || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
            />
          </div>
        </div>

        {/* Username */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter new username"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Password Update */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Password
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
