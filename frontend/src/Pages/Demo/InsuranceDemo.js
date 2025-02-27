import React from "react";

function InsuranceDemo() {
  return (
    <div className="container mx-auto p-6">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white p-10 text-center rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold">Josh Taylor Insurance</h1>
        <p className="mt-2 text-lg">Reliable Coverage, Personalized for You</p>
      </div>

      {/* Policies Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Our Policies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Auto Insurance</h3>
            <p>Comprehensive coverage to keep you safe on the road.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Home Insurance</h3>
            <p>Protect your home and belongings from unexpected events.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Life Insurance</h3>
            <p>Secure your family's financial future with our trusted plans.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Business Insurance</h3>
            <p>Customized protection for businesses of all sizes.</p>
          </div>
        </div>
      </div>

      {/* Customer Quotes Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">What Our Clients Say</h2>
        <div className="mt-4 space-y-4">
          <blockquote className="p-4 bg-white border-l-4 border-blue-500 italic">
            "Josh Taylor Insurance gave me peace of mind. Highly recommend!" - Sarah L.
          </blockquote>
          <blockquote className="p-4 bg-white border-l-4 border-blue-500 italic">
            "Fantastic service and affordable rates." - Mark R.
          </blockquote>
          <blockquote className="p-4 bg-white border-l-4 border-blue-500 italic">
            "I never worry about my coverage anymore." - Emily K.
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default InsuranceDemo;
