import { Link } from "react-router-dom";

export default function GetInvolved() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Involved</h2>
      <p className="mb-8 max-w-3xl">
        There are many ways you can contribute to our mission and make a difference in the community.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-5 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
            <p className="mb-6">Share your time and skills to support our programs and initiatives.</p>
          </div>
          <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded inline-block hover:bg-blue-700 transition-colors w-full sm:w-auto">
            Join as Volunteer
          </Link>
        </div>
        
        <div className="border p-5 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3">Donate</h3>
            <p className="mb-6">Your financial contribution helps us expand our reach and impact.</p>
          </div>
          <Link to="/donate" className="bg-green-600 text-white px-6 py-3 rounded inline-block hover:bg-green-700 transition-colors w-full sm:w-auto">
            Make a Donation
          </Link>
        </div>
        
        <div className="border p-5 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3">Partner</h3>
            <p className="mb-6">Collaborate with us as an organization to create greater social impact.</p>
          </div>
          <Link to="/contact" className="bg-purple-600 text-white px-6 py-3 rounded inline-block hover:bg-purple-700 transition-colors w-full sm:w-auto">
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}