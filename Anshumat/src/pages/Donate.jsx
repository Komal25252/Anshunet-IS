export default function Donate() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Make a Donation</h2>
      <p className="mb-8 max-w-3xl">
        Your generous contribution helps us continue our mission of empowering individuals through knowledge and mentorship.
      </p>
      
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 bg-blue-50 p-4 md:p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Why Donate?</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Support educational programs for underprivileged students</li>
            <li>Help expand our mentorship network to reach more individuals</li>
            <li>Fund community development initiatives</li>
            <li>Enable us to organize more skill development workshops</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border dark:border-gray-700">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Donation Form</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block mb-1 text-sm md:text-base">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-300" 
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1 text-sm md:text-base">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-300" 
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-sm md:text-base">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-300" 
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="amount" className="block mb-2 text-sm md:text-base">Donation Amount</label>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <button 
                  type="button" 
                  className="border p-2 rounded hover:bg-blue-50 transition-colors border-gray-300 bg-white"
                >
                  $25
                </button>
                <button 
                  type="button" 
                  className="border p-2 rounded hover:bg-blue-50 transition-colors border-gray-300 bg-white"
                >
                  $50
                </button>
                <button 
                  type="button" 
                  className="border p-2 rounded hover:bg-blue-50 transition-colors border-gray-300 bg-white"
                >
                  $100
                </button>
              </div>
              <input 
                type="number" 
                placeholder="Other amount" 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-300" 
              />
            </div>
            
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
