import { useState } from "react";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import auth from "./Firebase.config"; // Your firebase config file
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons
import { useNavigate } from "react-router-dom";

const ChangedPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // For message styling
  const [showOldPassword, setShowOldPassword] = useState(false); // For old password visibility toggle
  const [showNewPassword, setShowNewPassword] = useState(false); // For new password visibility toggle
  const navigate = useNavigate();

  const handleChangePassword = () => {
    const user = auth.currentUser;

    if (user) {
      const credential = EmailAuthProvider.credential(user.email, oldPassword);

      // Re-authenticate the user
      reauthenticateWithCredential(user, credential)
        .then(() => {
          // Update password
          updatePassword(user, newPassword)
            .then(() => {
              setMessage("Password updated successfully!");
              setMessageType("success");
              navigate("/");
            })
            .catch((error) => {
              setMessage("Error updating password: " + error.message);
              setMessageType("error");
            });
        })
        .catch((error) => {
          setMessage("Re-authentication failed: " + error.message);
          setMessageType("error");
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Change Password
        </h2>

        <div className="space-y-4">
          <div className="relative">
            <label className="block text-gray-700 mb-1 font-medium">
              Current Password
            </label>
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="Enter your current password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute right-4 top-9 text-gray-500"
            >
              {showOldPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="relative">
            <label className="block text-gray-700 mb-1 font-medium">
              New Password
            </label>
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-9 text-gray-500"
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            onClick={handleChangePassword}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Change Password
          </button>

          {message && (
            <p
              className={`mt-4 text-center text-sm font-medium ${
                messageType === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangedPassword;
