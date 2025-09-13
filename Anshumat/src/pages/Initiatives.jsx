export default function Initiatives() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Initiatives</h2>
      <p className="mb-8 max-w-3xl">
        At Anshumat Foundation, we run several initiatives aimed at empowering individuals through education and mentorship.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Education Support</h3>
          <p className="text-base">Providing educational resources and scholarships to underprivileged students.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Mentorship Program</h3>
          <p className="text-base">Connecting experienced professionals with young individuals for career guidance.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Community Development</h3>
          <p className="text-base">Working with local communities to address social challenges and promote growth.</p>
        </div>
        
        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-3">Skill Development</h3>
          <p className="text-base">Organizing workshops and training sessions to enhance employability skills.</p>
        </div>
      </div>
    </section>
  );
}