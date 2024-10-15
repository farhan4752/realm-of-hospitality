import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Tips to Find Your Dream Home",
      date: "October 12, 2024",
      description:
        "Finding the perfect home can be daunting, but these 5 expert tips will guide you in the right direction to make the process easier and more enjoyable.",
      image: "/images/dream-home.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Understanding Mortgage Rates in 2024",
      date: "September 29, 2024",
      description:
        "Mortgage rates have fluctuated in 2024. Learn how to navigate the changes and secure the best rates for your property investment.",
      image: "/images/mortgage-rates.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "How to Increase Your Home's Value",
      date: "August 15, 2024",
      description:
        "Looking to sell your home? Discover simple renovation ideas that will significantly boost your home's market value.",
      image: "/images/home-value.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "The Ultimate Guide to First-Time Home Buying",
      date: "October 12, 2024",
      description:
        "Buying your first home is a major milestone. Learn everything you need to know, from saving for a down payment to closing the deal on your dream home.",
      image: "/images/dream-home.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "10 Home Renovation Ideas That Won't Break the Bank",
      date: "September 29, 2024",
      description:
        "Upgrade your home without going over budget! These affordable renovation ideas can boost your home's appeal and value.",
      image: "/images/mortgage-rates.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "The Pros and Cons of Buying vs. Renting in 2024",
      date: "August 15, 2024",
      description:
        "Should you buy a home or rent? We break down the financial and lifestyle considerations to help you make an informed decision.",
      image: "/images/home-value.jpg",
      link: "#",
    },
    {
      id: 7,
      title: "Top Real Estate Trends to Watch in 2024",
      date: "October 12, 2024",
      description:
        "The real estate market is always changing. Stay ahead of the game with the latest trends and predictions for the year.",
      image: "/images/dream-home.jpg",
      link: "#",
    },
    {
      id: 8,
      title: "How to Stage Your Home for a Quick Sale",
      date: "September 29, 2024",
      description:
        "Want to sell your home faster? Discover key home staging tips that can help you attract buyers and close the deal sooner.",
      image: "/images/mortgage-rates.jpg",
      link: "#",
    },
    {
      id: 9,
      title: "Understanding Property Taxes and How They Affect Your Budget",
      date: "August 15, 2024",
      description:
        "Property taxes can have a big impact on your home expenses. Learn how to calculate and plan for these costs when budgeting for a home.",
      image: "/images/home-value.jpg",
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <Helmet>
        <title>Realm-of-hospitality | Blogs</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-mono text-center text-gray-600 mb-8  bg-blue-300 py-2 border-b-8 border-l-8 border-black rounded-2xl shadow-xl">
          All Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-cursive">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className=" rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between bg-blue-50"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                <p className="text-gray-400">{blog.description}</p>
              </div>

              <div>
                <a
                  href={blog.link}
                  className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
