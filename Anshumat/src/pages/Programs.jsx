export default function Programs() {
  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
      <p className="mb-8">
        Anshumat Foundation offers various programs designed to support personal and professional growth.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Career Guidance Program</h3>
          <p className="mb-4">A structured program to help students and young professionals make informed career choices.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>One-on-one career counseling sessions</li>
            <li>Industry exposure through field visits</li>
            <li>Resume building and interview preparation</li>
          </ul>
        </div>
        
        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Leadership Development</h3>
          <p className="mb-4">Developing future leaders through comprehensive training and practical experiences.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Leadership workshops and seminars</li>
            <li>Team management skills development</li>
            <li>Community project leadership opportunities</li>
          </ul>
        </div>
        
        <div className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Educational Support</h3>
          <p className="mb-4">Financial and academic support for deserving students.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Scholarships for higher education</li>
            <li>Educational resources and materials</li>
            <li>Tutoring and academic guidance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}