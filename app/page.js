"use client"

import Link from 'next/link'
import { FaMapMarkerAlt, FaBell, FaChartLine, FaCloudRain, FaIndustry, FaShieldAlt } from 'react-icons/fa'; // Importing icons

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 font-sans">
      {/* Hero Section */}


      <section className="relative flex flex-col items-center justify-center text-center py-24 md:py-32 overflow-hidden text-blue-50">
        {/* Background Overlay or Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/a/a7/Open_pit_mine_in_Jharia.jpg")' }}></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">SurakshaDrishti</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white mb-8">AI-powered rockfall prediction for safer, smarter mining operations.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
            <Link href="/signup" className="px-10 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </Link>
            <Link href="/login" className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
              Login
            </Link>
          </div>
        </div>
        
      </section>
      <div className="max-w-4xl mx-auto my-8 p-4 bg-yellow-900/50 text-yellow-200 border-l-4 border-yellow-400 rounded-r-lg shadow-lg">
  <div className="flex">
    <div className="flex-shrink-0">
      {/* Optional: Add an Info Icon for better visuals */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-300 mr-3"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    </div>
    <div>
      <h3 className="font-bold text-yellow-100">A Note for Our Judges</h3>
      <p className="text-sm mt-1">
        This is a **high-fidelity frontend prototype** designed to showcase the complete user interface, user experience, and our vision for the SurakshaDrishti platform. All data displayed (maps, charts, alerts) is **simulated** to demonstrate full functionality.
        <br />
        The core machine learning model has been developed and validated separately, and the backend integration is currently in progress.
      </p>
    </div>
  </div>
</div>

      {/* What is SurakshaDrishti */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">What is SurakshaDrishti?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          SurakshaDrishti is an intelligent, cost-effective solution for predicting and preventing rockfall incidents in open-pit mines.
          It integrates multi-source data including Digital Elevation Models (DEM), drone imagery, geotechnical sensor data,
          and environmental factors using advanced AI to provide proactive insights, helping mine planners and workers
          stay safe and prepared.
        </p>
      </section>

      

      {/* Features Section */}
      <section className="py-16 bg-blue-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-8 bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
            <FaMapMarkerAlt className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Real-time Risk Maps</h3>
            <p className="text-gray-600">Visualize danger zones instantly with dynamic, interactive maps and plan accordingly to avoid accidents.</p>
          </div>
          <div className="p-8 bg-gradient-to-r from-green-50 to-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
            <FaBell className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Predictive Alerts</h3>
            <p className="text-gray-600">Get timely, probability-based alerts via SMS and email to act proactively before incidents occur.</p>
          </div>
          <div className="p-8 bg-gradient-to-r from-purple-50 to-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 text-center">
            <FaChartLine className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Data-driven Decisions</h3>
            <p className="text-gray-600">Leverage advanced AI-powered forecasts to enhance safety protocols and significantly reduce operational risks.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 text-center bg-green-50">
        <h2 className="text-3xl font-bold mb-12 text-blue-700">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 text-blue-600 text-3xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Collect Multi-source Data</h3>
            <p className="text-gray-600">Seamlessly integrate DEM, drone imagery, geotechnical sensors, and environmental data.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 text-green-600 text-3xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Predict Risks with AI</h3>
            <p className="text-gray-600">Our advanced ML models analyze patterns to identify and forecast potential rockfall danger zones.</p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 text-purple-600 text-3xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Proactive Safety Measures</h3>
            <p className="text-gray-600">Receive actionable insights and alerts, enabling informed and timely decision-making for safety.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 text-center bg-blue-50  text-white">
        <h2 className="text-3xl text-blue-700 font-bold mb-10">Transforming Mining Safety</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 border-2 border-blue-600  bg-blue-100 bg-opacity-10 rounded-lg shadow-md">
            <FaIndustry className="text-5xl text-blue-600 mx-auto mb-4" />
            <p className="text-4xl font-bold text-blue-600 mb-2">Scalable</p>
            <p className="text-lg text-gray-500">Adaptable for diverse mining operations, public & private.</p>
          </div>
          <div className="p-6 border-2 border-green-600  bg-green-100 bg-opacity-10 rounded-lg shadow-md">
            <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-4" />
            <p className="text-4xl font-bold text-green-600 mb-2">Enhanced Safety</p>
            <p className="text-lg text-gray-500">Proactive detection reduces incidents and protects personnel.</p>
          </div>
          <div className="p-6 border-2 border-purple-600 bg-purple-100  bg-opacity-10 rounded-lg shadow-md">
            <FaChartLine className="text-5xl text-purple-600 mx-auto mb-4" />
            <p className="text-4xl font-bold text-purple-600 mb-2">Cost-Effective</p>
            <p className="text-lg text-gray-500">Open-source integration lowers operational expenses.</p>
          </div>
        </div>
      </section>

      {/* Call to Action before Footer */}
      <section className="py-12 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Ready to Enhance Your Mine Safety?</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">Join SurakshaDrishti today and take a step towards a safer, more efficient future for your mining operations.</p>
        <Link href="/signup" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
          Sign Up Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p className="mb-2">&copy; 2025 SurakshaDrishti. All rights reserved.</p>
        <p className="text-sm text-gray-400">Built with <span className="text-red-500">❤️</span> for SIH 2025.</p>
      </footer>
    </div>
  )
}