import { Link, useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import Discover from "./Discover";
import "animate.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const properties = useLoaderData();
  console.log(properties);

  return (
    <div>
      <Helmet>
        <title>Realm-of-hospitality | Home</title>
      </Helmet>
      {/* Slider Section */}
      <Slider />

      {/* Section Title */}
      <h1 className="text-center my-12 text-5xl font-bold font-serif bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-4 border-b-8 border-indigo-600 rounded-3xl shadow-2xl container mx-auto animate__animated animate__bounce">
        Our Featured Properties
      </h1>

      {/* Properties Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 my-20 px-5 lg:px-0">
        {properties.properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          >
            {/* Property Image */}
            <img
              className="h-[250px] w-full object-cover rounded-t-3xl"
              src={property.image}
              alt={property.estate_title}
            />

            {/* Property Information */}
            <div className="p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {property.estate_title}
              </h2>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Type:</span> {property.segment_name}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-bold">Status:</span> {property.status}
              </p>
              <p className="text-gray-600 mb-6">
                <span className="font-bold">Location:</span> {property.location}
              </p>

              {/* See Details Button */}
              <Link to={`/detailsProperty/${property.id}`}>
                <button className="w-full bg-gradient-to-r from-indigo-400 to-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-400 transition-colors duration-300">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Discover Section */}
      <Discover />
    </div>
  );
};

export default Home;
