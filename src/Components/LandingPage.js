// import React from 'react';
// import { Link } from 'react-router-dom';
// function ladingPage() {
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     section.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="font-sans">
//       {/* Header */}


//       {/* Hero Section */}
//       <section className="bg-cover bg-center h-screen text-white flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/drones-bg.jpg)' }}>
//         <h2 className="text-5xl font-bold mb-4">Empowering the Future with Drones</h2>
//         <p className="text-xl mb-6">create greateness using innovative drone technology</p>


//         <Link to="/model">
//           <button  className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full">Check out</button>
//         </Link>

//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 px-6 text-center bg-gray-100">
//         <h2 className="text-4xl font-semibold mb-6">About Us</h2>
//         <p className="text-lg">At Aerial Insight, we leverage advanced drone technology to assess the structural integrity and strength of buildings. Our innovative approach allows for detailed inspections of hard-to-reach areas, providing real-time data on potential weaknesses, cracks, or structural vulnerabilities.</p>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-16 px-6 text-center">
//         <h2 className="text-4xl font-semibold mb-10">Services</h2>
//         <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold mb-4">Drone-Based Structural Inspections</h3>
//             <p>Our drones perform detailed aerial inspections to identify structural weaknesses, cracks, and other potential issues in buildings. This service allows for fast, accurate, and non-invasive assessments of building strength, including difficult-to-reach areas like rooftops and facades..</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold mb-4">Real-Time Data Analysis</h3>
//             <p>We provide real-time data processing and analysis from drone inspections, offering immediate insights into the structural integrity of a building. Our AI-driven analytics help detect issues such as material degradation, corrosion, or shifts in load-bearing components.</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold mb-4">Periodic Monitoring and Reporting</h3>
//             <p>We offer ongoing monitoring services to track the structural health of buildings over time. Our periodic drone inspections and reports help ensure that your building remains strong and safe, reducing the risk of future failures or costly repairs.</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 px-6 text-center bg-gray-100">
//         <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
//         <p>Interested in partnering or learning more? Reach out to us via email: <a href="mailto:info@dronestartups.com" className="text-orange-500">info@droneMaster.com</a></p>
//       </section>


//     </div>
//   );
// }

// export default ladingPage;




// import React from 'react';
// import { Link } from 'react-router-dom';
// // import LandingPage from 'LandingPage.css'

// function LandingPage() {
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     section.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="font-sans">
//       {/* Hero Section with Animated Background */}
//       <section
//         className="h-screen text-white flex flex-col items-center justify-center relative overflow-hidden"
//       >
//         {/* Background Animation */}
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-900 animate-bg-pan z-0"></div>
//         <div className="absolute inset-0 z-0 bg-building-pattern bg-opacity-20 mix-blend-overlay"></div>

//         {/* Content */}
//         <div className="z-10 text-center">
//           <h2 className="text-5xl font-bold mb-4 hover:text-orange-500 transition-all duration-300">
//             Empowering the Future with Drones
//           </h2>
//           <p className="text-xl mb-6 hover:text-orange-500 transition-all duration-300">
//             Create greatness using innovative drone technology.
//           </p>
//           <Link to="/model">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
//               Check Out
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* About Section */}
//       <section
//         id="about"
//         className="py-16 px-6 text-center bg-gray-100 hover:bg-gray-200 transition-all duration-300"
//       >
//         <h2 className="text-4xl font-semibold mb-6 hover:text-orange-500 transition-all duration-300">
//           About Us
//         </h2>
//         <p className="text-lg hover:text-gray-700 transition-all duration-300">
//           At Aerial Insight, we leverage advanced drone technology to assess the structural integrity and strength of buildings...
//         </p>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-16 px-6 text-center relative overflow-hidden">
//         <h2 className="text-4xl font-semibold mb-10 hover:text-orange-500 transition-all duration-300">
//           Services
//         </h2>
//         <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h3 className="text-2xl font-semibold mb-4 hover:text-orange-500 transition-all duration-300">
//               Drone-Based Structural Inspections
//             </h3>
//             <p className="hover:text-gray-700 transition-all duration-300">
//               Our drones perform detailed aerial inspections to identify structural weaknesses...
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h3 className="text-2xl font-semibold mb-4 hover:text-orange-500 transition-all duration-300">
//               Real-Time Data Analysis
//             </h3>
//             <p className="hover:text-gray-700 transition-all duration-300">
//               We provide real-time data processing and analysis from drone inspections...
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
//             <h3 className="text-2xl font-semibold mb-4 hover:text-orange-500 transition-all duration-300">
//               Periodic Monitoring and Reporting
//             </h3>
//             <p className="hover:text-gray-700 transition-all duration-300">
//               We offer ongoing monitoring services to track the structural health of buildings...
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section
//         id="contact"
//         className="py-16 px-6 text-center bg-gray-100 hover:bg-gray-200 transition-all duration-300"
//       >
//         <h2 className="text-4xl font-semibold mb-6 hover:text-orange-500 transition-all duration-300">
//           Contact Us
//         </h2>
//         <p className="hover:text-gray-700 transition-all duration-300">
//           Interested in partnering or learning more? Reach out to us via email: 
//           <a
//             href="mailto:info@droneMaster.com"
//             className="text-orange-500 hover:underline transition-all duration-300"
//           >
//             rovertrupesh@gmail.com
//           </a>
//         </p>
//       </section>
//     </div>
//   );
// }

// export default LandingPage;






import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans">
      {/* Hero Section with Animated Background */}
      <section
        className="h-screen text-white flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-900 animate-bg-pan z-0"></div>
        <div className="absolute inset-0 z-0 bg-building-pattern bg-opacity-20 mix-blend-overlay"></div>

        {/* Content */}
        <div className="z-10 text-center">
          <h2 className="text-5xl font-bold mb-4 hover:text-orange-500 transition-all duration-300 ease-out hover:shadow-lg">
            Empowering the Future with Drones
          </h2>
          <p className="text-xl mb-6 hover:text-orange-500 transition-all duration-300 ease-in-out hover:shadow-md">
            Create greatness using innovative drone technology.
          </p>
          <Link to="/model">
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
              Check Out
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-6 text-center bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
      >
        <h2 className="text-4xl font-semibold mb-6 hover:text-orange-500 transition-all duration-300 ease-in-out hover:shadow-md">
          About Us
        </h2>
        <p className="text-lg hover:text-gray-700 transition-all duration-300 ease-in-out hover:shadow-sm">
          At Aerial Insight, we leverage advanced drone technology to assess the structural integrity and strength of buildings...
        </p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 px-6 text-center relative overflow-hidden bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        <h2 className="text-4xl font-semibold mb-10 hover:text-orange-500 transition-all duration-300 ease-in-out hover:shadow-md">
          Services
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 hover:text-orange-500 transition-all duration-300 ease-in-out">
              Drone-Based Structural Inspections
            </h3>
            <p className="hover:text-gray-700 transition-all duration-300 ease-in-out">
              Our drones perform detailed aerial inspections to identify structural weaknesses...
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 hover:text-orange-500 transition-all duration-300 ease-in-out">
              Real-Time Data Analysis
            </h3>
            <p className="hover:text-gray-700 transition-all duration-300 ease-in-out">
              We provide real-time data processing and analysis from drone inspections...
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 hover:text-orange-500 transition-all duration-300 ease-in-out">
              Periodic Monitoring and Reporting
            </h3>
            <p className="hover:text-gray-700 transition-all duration-300 ease-in-out">
              We offer ongoing monitoring services to track the structural health of buildings...
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 text-center bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
      >
        <h2 className="text-4xl font-semibold mb-6 hover:text-orange-500 transition-all duration-300 ease-in-out hover:shadow-md">
          Contact Us
        </h2>
        <p className="hover:text-gray-700 transition-all duration-300 ease-in-out hover:shadow-sm">
          Interested in partnering or learning more? Reach out to us via email:{' '}
          <a
            href="mailto:rovertrupesh@gmail.com"
            className="text-orange-500 hover:underline transition-all duration-300 ease-in-out"
          >
            rovertrupesh@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default LandingPage;
