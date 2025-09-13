
export default function Contact() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Us</h2>
      <p className="mb-6 max-w-2xl">
        We'd love to hear from you! Please use the form below to get in touch with us.
      </p>
      <form className="max-w-2xl mx-auto bg-white dark:bg-gray-600 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm md:text-base">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-300" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm md:text-base">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-300" 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm md:text-base">Message</label>
          <textarea 
            id="message" 
            rows="4" 
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-300"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
