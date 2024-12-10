// import React from "react";
// import logo from "../assets/logoDrone.jpg";

// import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import Template from "./Template";
// // import About from "./About";

// const Navbar = (props) => {
//     let isLoggedIn = props.isLoggedIn;
//     let setIsLoggedIn = props.setIsLoggedIn;

    
//   return (
//     <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto ">
//       <Link to="/">
//       <img src={logo} alt="logo" width={60} height={12} loading ="lazy" /></Link>

//       <nav>
//         <ul className="flex gap-5 text-richblack-100">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <div className="flex items-center gap-x-4 ">
//         { !isLoggedIn &&
//           <Link to="/login">
//             <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700">Log In</button>
//           </Link>
//         }
//         {!isLoggedIn &&
//           <Link to="/signup">
//             <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700">Sign up</button>
//           </Link>
//         }
//         {
//           isLoggedIn &&
//           <Link to="/">
//             <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700" onClick={()=>{
//               setIsLoggedIn(false)
//               toast.success("Loged out")
//             }}>Logout</button>
//           </Link>
//         }
//         { 
//           isLoggedIn &&
//           <Link to="/dashboard">
//             <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700">Dashboard</button> 
//           </Link>
//         }
//       </div>
//     </div>
//   )
// } 

// export default Navbar;




// import React from "react";
// import logo from "../assets/logoDrone.jpg";

// import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";

// const Navbar = (props) => {
//   const { isLoggedIn, setIsLoggedIn } = props;

//   return (
//     <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
//       {/* Logo */}
//       <Link to="/">
//         <img src={logo} alt="Logo" width={60} height={12} loading="lazy" />
//       </Link>

//       {/* Navigation Links */}
//       <nav>
//         <ul className="flex gap-5 text-richblack-100">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Action Buttons */}
//       <div className="flex items-center gap-x-4">
//         {!isLoggedIn && (
//           <>
//             <Link to="/login">
//               <button
//                 className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
//                 aria-label="Log In"
//               >
//                 Log In
//               </button>
//             </Link>
//             <Link to="/signup">
//               <button
//                 className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
//                 aria-label="Sign Up"
//               >
//                 Sign Up
//               </button>
//             </Link>
//           </>
//         )}

//         {isLoggedIn && (
//           <>
//             <Link to="/">
//               <button
//                 className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
//                 onClick={() => {
//                   setIsLoggedIn(false);
//                   toast.success("Logged out");
//                 }}
//                 aria-label="Log Out"
//               >
//                 Logout
//               </button>
//             </Link>
//             <Link to="/dashboard">
//               <button
//                 className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
//                 aria-label="Dashboard"
//               >
//                 Dashboard
//               </button>
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React from "react";
import logo from "../assets/logoDrone.jpg";

import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] pt-4 pb-0 mx-auto">
      {/* Logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          width={60}
          height={12}
          loading="lazy"
          className="transition duration-300 ease-in-out hover:opacity-80"
        />
      </Link>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-5 text-richblack-100">
          <li>
            <Link
              to="/"
              className="transition duration-300 ease-in-out hover:text-blue-500 hover:shadow-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="transition duration-300 ease-in-out hover:text-blue-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition duration-300 ease-in-out hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <>
            <Link to="/login">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 transition duration-300 ease-in-out hover:bg-richblack-700 hover:text-white hover:shadow-lg"
                aria-label="Log In"
              >
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 transition duration-300 ease-in-out hover:bg-richblack-700 hover:text-white hover:shadow-lg"
                aria-label="Sign Up"
              >
                Sign Up
              </button>
            </Link>
          </>
        )}

        {isLoggedIn && (
          <>
            <Link to="/">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 transition duration-300 ease-in-out hover:bg-richblack-700 hover:text-white"
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged out");
                }}
                aria-label="Log Out"
              >
                Logout
              </button>
            </Link>
            <Link to="/dashboard">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 transition duration-300 ease-in-out hover:bg-richblack-700 hover:text-white"
                aria-label="Dashboard"
              >
                Dashboard
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
