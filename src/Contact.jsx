import { Helmet } from "react-helmet-async";

const contacts = [
  {
    name: "Tanvir Hossain",
    position: "Marketing Manager",
    phone: "+880 1711 223344",
    email: "tanvir@example.com",
  },
  {
    name: "Sumaiya Akter",
    position: "HR Coordinator",
    phone: "+880 1722 334455",
    email: "sumaiya@example.com",
  },
  {
    name: "Rahim Uddin",
    position: "Software Engineer",
    phone: "+880 1733 445566",
    email: "rahim@example.com",
  },
  {
    name: "Shamima Islam",
    position: "Project Manager",
    phone: "+880 1744 556677",
    email: "shamima@example.com",
  },
  {
    name: "Asif Ahmed",
    position: "Sales Executive",
    phone: "+880 1755 667788",
    email: "asif@example.com",
  },
  {
    name: "Farzana Rahman",
    position: "Graphic Designer",
    phone: "+880 1766 778899",
    email: "farzana@example.com",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Realm-of-hospitality | Contact</title>
      </Helmet>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Information
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {contact.name}
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-bold">Position:</span> {contact.position}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-bold">Phone:</span> {contact.phone}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Email:</span> {contact.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
