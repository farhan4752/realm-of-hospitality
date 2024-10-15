import { useLoaderData, useParams } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaTag,
  FaHome,
  FaListAlt,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const DetailsProperty = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const property = properties.properties.find(
    (item) => item.id === parseInt(id)
  );
  console.log(id, property);

  return (
    <div className="container mx-auto my-20 p-6">
      <Helmet>
        <title>Realm-of-hospitality | Details property</title>
      </Helmet>
      {/* Property Image */}
      <div className="flex justify-center">
        <img
          className="h-[600px] w-[1200px] rounded-3xl shadow-lg object-cover"
          src={property.image}
          alt={property.estate_title}
        />
      </div>

      {/* Property Details */}
      <div className="bg-white rounded-lg shadow-md p-8 mt-10 mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-20 text-center text-gray-800 bg-yellow-200 py-2 border-b-8 border-l-8 border-black rounded-2xl shadow-xl font-cursive ">
          {property.estate_title}
        </h1>
        <div className="grid grid-cols-1 mb-10 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4 font-serif text-gray-700 text-2xl  ">
            <p className="flex items-center hover:scale-105 ">
              <FaHome className="text-red-500 mr-3 text-xl" />
              <span className="font-bold">Property Type:</span>{" "}
              {property.segment_name}
            </p>
            <p className="flex items-center hover:scale-105 ">
              <FaTag className="text-blue-500 mr-3 text-xl" />
              <span className="font-bold">Status:</span> {property.status}
            </p>
            <p className="flex items-center hover:scale-105 ">
              <FaRulerCombined className="text-green-500 mr-3 text-xl" />
              <span className="font-bold">Area:</span> {property.area}
            </p>
            <p className="flex items-center hover:scale-105 ">
              <FaMoneyBillAlt className="text-yellow-500 mr-3 text-xl" />
              <span className="font-bold">Price:</span> {property.price}
            </p>
            <p className="flex items-center hover:scale-105 ">
              <FaMapMarkerAlt className="text-purple-500 mr-3 text-xl" />
              <span className="font-bold">Location:</span> {property.location}
            </p>
            <h2 className="flex items-center text-2xl font-bold mb-4 hover:scale-105 ">
              <FaListAlt className="text-teal-500 mr-3" />
              Facilities:
            </h2>
            <ul className="list-disc list-inside ml-5">
              {property.facilities.map((facility, index) => (
                <li key={index} className="text-lg">
                  {facility}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Facilities and Description */}
          <div className=" font-serif text-gray-700 hover:scale-105">
            <h3 className="text-2xl font-bold ">Description:</h3>
            <p className="text-justify text-lg leading-relaxed">
              {property.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProperty;
