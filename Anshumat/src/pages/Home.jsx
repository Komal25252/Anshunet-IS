import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center py-8 px-4">
      <h2 className="text-3xl md:text-4xl font-bold">Empowering Through Knowledge & Mentorship</h2>
      <p className="mt-4 max-w-xl mx-auto text-base md:text-lg">
        Anshumat Foundation is a non-profit organization dedicated to guiding 
        individuals through mentorship, career development, and social impact.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:space-x-4">
        <Link to="/about" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto">
          Learn More
        </Link>
        <Link to="/get-involved" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors w-full sm:w-auto">
          Get Involved
        </Link>
      </div>
    </section>
  );
}
