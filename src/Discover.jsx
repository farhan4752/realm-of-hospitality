import {
  FaDollarSign,
  FaCalculator,
  FaHandHoldingUsd,
  FaBalanceScale,
  FaSearchLocation,
  FaBuilding,
} from "react-icons/fa";

// Define a mapping between icon names and React Icons components
const iconMapping = {
  FaDollarSign: FaDollarSign,
  FaCalculator: FaCalculator,
  FaHandHoldingUsd: FaHandHoldingUsd,
  FaBalanceScale: FaBalanceScale,
  FaSearchLocation: FaSearchLocation,
  FaBuilding: FaBuilding,
};

const Discover = () => {
  const data = [
    {
      title: "Find out how much you can afford",
      description:
        "We'll help you estimate your budget range. Save to your buyer profile to help in your search.",
      linkText: "Try our affordability calculator",
      icon: "FaDollarSign",
    },
    {
      title: "Understand your monthly costs",
      description:
        "Get an in-depth look at what your monthly and closing costs will look like based on your financial situation and goals.",
      linkText: "Try our mortgage calculator",
      icon: "FaCalculator",
    },
    {
      title: "Get help with your down payment",
      description:
        "You may be able to buy a home with just 3.5% down. Saving for that can be challenging—down payment assistance programs can help.",
      linkText: "Find down payment help",
      icon: "FaHandHoldingUsd",
    },
    {
      title: "Find out if it's better to rent or buy",
      description:
        "Try our rent or buy calculator to determine if buying or renting a home makes more financial sense for your situation.",
      linkText: "Try our rent or buy calculator",
      icon: "FaBalanceScale",
    },
    {
      title: "Search for nearby opportunities",
      description:
        "See apartments available in your area or a location you choose. Narrow your search by price, amenities, and more.",
      linkText: "View apartments near me",
      icon: "FaSearchLocation",
    },
    {
      title: "Discover your dream apartment",
      description:
        "Explore thousands of apartment listings. Find the perfect place to call home.",
      linkText: "Start your apartment search",
      icon: "FaBuilding",
    },
  ];

  return (
    <div className="container mx-auto my-20 px-5 lg:px-0">
      <div>
        <h1 className="text-center font-extrabold text-4xl mb-12 bg-green-300 py-4 border-b-8 border-l-8 border-black rounded-2xl shadow-xl">
          Unlock Your Dream Home with These Tools
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => {
          // Get the corresponding icon component from the iconMapping
          const IconComponent = iconMapping[item.icon];

          return (
            <div
              key={index}
              className="bg-green-50 border border-gray-300 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-6">
                  {IconComponent && (
                    <IconComponent className="text-red-500 text-4xl mr-4" />
                  )}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-10 mt-4">{item.description}</p>
              </div>

              <div>
                <a
                  href="#"
                  className="text-blue-500 font-medium hover:underline"
                >
                  {item.linkText}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discover;
