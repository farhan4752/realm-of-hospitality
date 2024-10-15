import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "./Firebase.config";
import { AuthContext } from "./AuthProvider";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [loginSuccess, setLoginSuccess] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  // Handle login form submission
  const onSubmit = ({ email, password }) => {
    setLoginError("");
    setLoginSuccess("");

    signInUser(email, password)
      .then((result) => {
        reset();
        navigate(location?.state ? location.state : "/");
        if (result.user.emailVerified) {
          setLoginSuccess("Logged in successfully");
        }
      })
      .catch(() => {
        setLoginError("Invalid password or email");
      });
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    const email = getValues("email");
    if (!email) {
      alert("Please provide an email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Handle GitHub Sign-In
  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        setLoginSuccess("Logged in with GitHub successfully");
      })
      .catch((error) => {
        console.error(error);
        setLoginError("GitHub login failed: " + error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Helmet>
        <title>Realm-of-hospitality || Login</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 font-serif">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-6 font-light">
          Please log in to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
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

          {/* Forgot Password */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Log In
          </button>

          {/* Error and Success Messages */}
          {loginError && (
            <p className="text-center text-red-500 mt-2">{loginError}</p>
          )}
          {loginSuccess && (
            <p className="text-center text-green-500 mt-2">{loginSuccess}</p>
          )}

          {/* Link to Register */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              New to this website?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>

        {/* Google Sign In */}
        <div className="mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-2 px-4 flex justify-center items-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.35 11.1H12V13.1H17.8C17.3 15 15.4 16.1 13.5 16.1C11.3 16.1 9.5 14.4 9.5 12.1C9.5 9.8 11.3 8.1 13.5 8.1C14.6 8.1 15.6 8.5 16.4 9.1L18.1 7.5C16.9 6.5 15.3 6 13.5 6C9.9 6 7 8.9 7 12.5C7 16.1 9.9 19 13.5 19C17.1 19 20 16.5 20 12.9C20 12.5 20 11.7 19.9 11.3L21.35 11.1Z"
                fill="white"
              />
            </svg>
            Sign in with Google
          </button>
        </div>

        {/* GitHub Sign In */}
        <div className="mt-6">
          <button
            onClick={handleGithubSignIn}
            className="w-full py-2 px-4 flex justify-center items-center bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-200"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
