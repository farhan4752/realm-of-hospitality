import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    // Logic for handling acceptance of terms
    navigate("/register"); // Redirect to registration after acceptance
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-10">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 rounded-t-3xl text-center">
          <h1 className="text-5xl font-bold font-mono">Terms & Conditions</h1>
          <p className="mt-2 text-lg italic">
            Please read carefully before using our service
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-8 max-h-96 overflow-y-auto text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to the Terms and Conditions page for our website. By
            accessing this website, you agree to comply with these terms and
            conditions.
          </p>
          <h3 className="text-2xl font-semibold mb-3">1. Use of the Website</h3>
          <p className="mb-4">
            By accessing this site, you are agreeing to use it for lawful
            purposes and not to breach any local, state, or international laws.
          </p>
          <h3 className="text-2xl font-semibold mb-3">2. Privacy Policy</h3>
          <p className="mb-4">
            Your privacy is important to us. Please review our privacy policy
            for information on how we handle your data.
          </p>
          <h3 className="text-2xl font-semibold mb-3">
            3. Intellectual Property
          </h3>
          <p className="mb-4">
            All content on this site, including text, graphics, and logos, are
            owned by us or licensed to us. Unauthorized use is prohibited.
          </p>
          {/* Add more sections as needed */}
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 rounded-b-3xl text-center">
          <button
            onClick={handleAccept}
            className="bg-green-500 hover:bg-green-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300"
          >
            I Accept
          </button>
          <p className="mt-4 text-sm">
            By clicking "I Accept", you agree to our Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
