// import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export const Footer = () => {
//     return (
//         <footer className="bg-white text-slate-600 px-6 py-10">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
//                 {/* Brand and Company Info */}
//                 <div className="col-span-1 md:col-span-2">
//                     <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                         U-Technology
//                     </h2>

//                     <div className="mt-4 space-y-1 text-sm text-gray-700">
//                         <p><strong>Company:</strong> Umbarkar Technology India Private Limited</p>
//                         <p><strong>CIN/LLPIN:</strong> U72900PN2020PTC193410</p>
//                         <p><strong>Registration Number:</strong> 193410</p>
//                         <p><strong>ROC Name:</strong> ROC Pune</p>
//                         <p><strong>Contact:</strong> +91 7709222331</p>
//                         <p><strong>Email:</strong> <a href="mailto:info@usystem.solutions" className="text-blue-600 hover:underline">info@usystem.solutions</a></p>
//                     </div>

//                     {/* Social Icons */}
//                     <div className="flex gap-4 mt-4">
//                         <a href="#" aria-label="Facebook"><FaFacebook className="hover:text-blue-500" /></a>
//                         <a href="#" aria-label="LinkedIn"><FaLinkedin className="hover:text-blue-400" /></a>
//                         <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-blue-300" /></a>
//                         <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-pink-400" /></a>
//                     </div>
//                 </div>

//                 {/* Industries */}
//                 <div>
//                     <h3 className="text-lg font-semibold mb-3">Industries</h3>
//                     <ul className="space-y-2 text-sm text-gray-700">
//                         <li><Link to="/construction">Construction</Link></li>
//                         <li><Link to="/healthcare">Healthcare</Link></li>
//                         <li><Link to="/finance">Finance</Link></li>
//                         <li><Link to="/retail">Retail</Link></li>
//                         <li><Link to="/e-learning-education">Education</Link></li>
//                     </ul>
//                 </div>

//                 {/* Solutions */}
//                 <div>
//                     <h3 className="text-lg font-semibold mb-3">Solutions</h3>
//                     <ul className="space-y-2 text-sm text-gray-700">
//                         <li><Link to="/ai">Artificial Intelligence</Link></li>
//                         <li><Link to="/cloud">Cloud Solutions</Link></li>
//                         <li><Link to="/blockchain">Blockchain</Link></li>
//                         <li><Link to="/ui-ux">UI/UX</Link></li>
//                         <li><Link to="/web-development">Web Development</Link></li>
//                     </ul>
//                 </div>

//                 {/* Services */}
//                 <div>
//                     <h3 className="text-lg font-semibold mb-3">Services</h3>
//                     <ul className="space-y-2 text-sm text-gray-700">
//                         <li><Link to="/services/api-development">API Development</Link></li>
//                         <li><Link to="/services/devops">DevOps</Link></li>
//                         <li><Link to="/services/qa-testing">QA Testing</Link></li>
//                         <li><Link to="/services/digital-transformation">Digital Transformation</Link></li>
//                         <li><Link to="/services/plm">PLM</Link></li>
//                     </ul>
//                 </div>
//             </div>

//             {/* Bottom copyright */}
//             <div className="border-t border-gray-300 mt-10 pt-6 text-sm text-center text-gray-700">
//                 © {new Date().getFullYear()} Umbarkar Technology India Pvt Ltd (CIN: U72900PN2020PTC193410). All rights reserved.
//             </div>
//         </footer>
//     );
// };

import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 text-slate-700 px-0 py-14 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Brand Info */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            U-Technology
          </h2>

          <div className="mt-5 space-y-1 text-sm leading-relaxed">
            <p>
              <strong>Company:</strong> Umbarkar Technology India Private
              Limited
            </p>
            <p>
              <strong>CIN/LLPIN:</strong> U72900PN2020PTC193410
            </p>
            <p>
              <strong>Reg. Number:</strong> 193410
            </p>
            <p>
              <strong>ROC Name:</strong> ROC Pune
            </p>
            <p>
              <strong>Contact:</strong> +91 7709222331
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@usystem.solutions"
                className="text-blue-600 hover:underline hover:text-blue-800 transition"
              >
                info@usystem.solutions
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-sky-400 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-slate-900">
            Industries
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/construction"
                className="hover:text-blue-600 transition"
              >
                Construction
              </Link>
            </li>
            <li>
              <Link to="/healthcare" className="hover:text-blue-600 transition">
                Healthcare
              </Link>
            </li>
            <li>
              <Link to="/finance" className="hover:text-blue-600 transition">
                Finance
              </Link>
            </li>
            <li>
              <Link to="/retail" className="hover:text-blue-600 transition">
                Retail
              </Link>
            </li>
            <li>
              <Link
                to="/e-learning-education"
                className="hover:text-blue-600 transition"
              >
                Education
              </Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-slate-900">
            Solutions
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/ai" className="hover:text-blue-600 transition">
                Artificial Intelligence
              </Link>
            </li>
            <li>
              <Link to="/cloud" className="hover:text-blue-600 transition">
                Cloud Solutions
              </Link>
            </li>
            <li>
              <Link to="/blockchain" className="hover:text-blue-600 transition">
                Blockchain
              </Link>
            </li>
            <li>
              <Link to="/ui-ux" className="hover:text-blue-600 transition">
                UI/UX
              </Link>
            </li>
            <li>
              <Link
                to="/web-development"
                className="hover:text-blue-600 transition"
              >
                Web Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-slate-900">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services/api-development"
                className="hover:text-blue-600 transition"
              >
                API Development
              </Link>
            </li>
            <li>
              <Link
                to="/services/devops"
                className="hover:text-blue-600 transition"
              >
                DevOps
              </Link>
            </li>
            <li>
              <Link
                to="/services/qa-testing"
                className="hover:text-blue-600 transition"
              >
                QA Testing
              </Link>
            </li>
            <li>
              <Link
                to="/services/digital-transformation"
                className="hover:text-blue-600 transition"
              >
                Digital Transformation
              </Link>
            </li>
            <li>
              <Link
                to="/services/plm"
                className="hover:text-blue-600 transition"
              >
                PLM
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-sm text-center text-gray-600">
        © {new Date().getFullYear()} Umbarkar Technology India Pvt Ltd (CIN:
        U72900PN2020PTC193410). All rights reserved.
      </div>
    </footer>
  );
};
