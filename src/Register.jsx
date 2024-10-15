import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    const { name, email, photo, password, terms } = data;

    setRegisterError("");
    setRegisterSuccess("");

    // Validate password
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should have at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError("Password should have at least one lowercase letter");
      return;
    } else if (!/\d/.test(password)) {
      setRegisterError("Password should have at least one digit");
      return;
    } else if (!/[\W_]/.test(password)) {
      setRegisterError("Password should have at least one special character");
      return;
    } else if (!terms) {
      setRegisterError("Please accept our terms and conditions");
      return;
    }

    // Create user and update profile
    createUser(email, password)
      .then((result) => {
        setRegisterSuccess("Your account has been created successfully");
        updateProfile(result.user, { displayName: name, photoURL: photo })
          .then(() => console.log("Profile updated"))
          .catch((error) => console.error(error));
        reset(); // Reset the form after successful registration
      })
      .catch(() => {
        setRegisterError("This user is already registered");
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 font-serif">
          Create an Account
        </h1>
        <p className="text-center text-gray-600 mb-6 font-light">
          Please fill in the details to register
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Photo URL Input */}
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Photo URL"
              {...register("photo", { required: "Photo URL is required" })}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">{errors.photo.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password (create strong password)"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            <button
              type="button"
              className="absolute right-4 top-2.5 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoIosEyeOff /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-3"
              {...register("terms", {
                required: "You must accept the terms and conditions",
              })}
            />
            <label className="text-gray-600">
              Accept our
              <Link to="/terms&Conditions" className="text-blue-500 underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>

          {/* Error and Success Messages */}
          {registerError && (
            <p className="text-center text-red-500 mt-2">{registerError}</p>
          )}
          {registerSuccess && (
            <p className="text-center text-green-500 mt-2">{registerSuccess}</p>
          )}

          {/* Link to Login */}
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
