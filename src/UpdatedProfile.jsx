import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdatedProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Realm-of-hospitality | Updated Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold font-mono text-center mb-6 text-gray-800">
          Updated Profile
        </h1>

        {user ? (
          <div className="text-left">
            <div className="mb-4">
              <img
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mx-auto shadow-lg"
              />
            </div>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              <span className="font-bold">User: </span>
              {user.displayName}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Email: </span>
              {user.email}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-bold">Password: </span> **************
              <Link to="/changedPassword">
                <button className="btn btn-ghost btn-sm btn-outline ml-10">
                  Change password
                </button>
              </Link>
            </p>
            <p
              className={`text-base font-medium ${
                user.emailVerified ? "text-green-500" : "text-red-500"
              }`}
            >
              <span className="font-bold text-gray-700">Verification: </span>
              {user.emailVerified ? "Email Verified" : "Email Not Verified"}
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-500">No user is logged in.</p>
        )}
      </div>
    </div>
  );
};

export default UpdatedProfile;
