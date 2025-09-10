import React from "react";
import HeroSection from "@/components/HeroSection";
import { clients, testimonials } from "./Data";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

function Ourclient() {
  return (
    <>
      {/* ==== HERO SECTION ==== */}
      <HeroSection
        backgroundImage="/assets/portfolio/ourclinethero.jpg"
        title="Trusted by Leading Companies"
        description="We are proud to collaborate with global leaders and innovative startups to drive digital transformation."
        buttonText="Work With Us"
        buttonLink="/contact-us"
        imageFit="cover"
      />

     {/* ==== CLIENTS SCROLLING ANIMATION ==== */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
      Our <span className="text-teal-600">Clients</span>
    </h2>
    <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
      We are honored to work with forward-thinking enterprises and startups, 
      empowering them with innovative digital solutions that drive growth.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">
      {clients.map((client, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-md rounded-2xl p-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.1, rotate: 3 }}
        >
          <img
            src={client.logo}
            alt={client.name}
            className="h-14 w-auto object-contain"
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>



      {/* ==== TESTIMONIALS AUTO-SCROLL ==== */}
 <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-4">
      WHAT CLIENTS ARE SAYING
    </h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Curious why so many businesses enjoy working with us? Here’s what our customers have to say in their testimonials.
    </p>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center relative">
        <p className="text-gray-700 text-base italic mb-6">
          "We selected Chetu because of their proven track record as well as
          their impressive global software delivery model. They were easy to
          work with and delivered a quality product within the projected
          timeline and within budget."
        </p>
        <div>
          <p className="font-medium text-teal-600">Charles Braganza</p>
          <span className="text-sm text-gray-500">Wild Birds Unlimited</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center relative">
        <p className="text-gray-700 text-base italic mb-6">
          "The most attractive aspect of working with Chetu is the price and
          professionalism of the project team: I am provided with progress
          reports, weekly conferences, and the team very promptly responds to
          any questions or concerns I raise."
        </p>
        <div>
          <p className="font-medium text-teal-600">Richard Moe</p>
          <span className="text-sm text-gray-500">Study Suite</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center relative">
        <p className="text-gray-700 text-base italic mb-6">
          "Chetu has provided skilled and useful programming services to our
          company with very little learning curve. The delivered code is clean
          and on-time. The daily reports and weekly team meeting keep the
          projects on track."
        </p>
        <div>
          <p className="font-medium text-teal-600">David Zelmanovic</p>
          <span className="text-sm text-gray-500">LabThruPut</span>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center relative">
        <p className="text-gray-700 text-base italic mb-6">
          "The team’s communication and professionalism stood out. They kept us
          updated with weekly progress reports and ensured timely delivery
          without compromising on quality."
        </p>
        <div>
          <p className="font-medium text-teal-600">Amanda Lee</p>
          <span className="text-sm text-gray-500">TechSoft Solutions</span>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center relative">
        <p className="text-gray-700 text-base italic mb-6">
          "We were impressed with the seamless integration of their software
          into our existing system. The process was smooth and exceeded our
          expectations."
        </p>
        <div>
          <p className="font-medium text-teal-600">Michael Johnson</p>
          <span className="text-sm text-gray-500">FinEdge Corp</span>
        </div>
      </div>

      {/* Card 6 */}
      <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center relative">
        <p className="text-gray-700 text-base italic mb-6">
          "Their technical expertise was evident from day one. The product they
          delivered has helped us scale our business operations significantly."
        </p>
        <div>
          <p className="font-medium text-teal-600">Sophia Carter</p>
          <span className="text-sm text-gray-500">Medico Health</span>
        </div>
      </div>

      {/* Card 7 */}
      <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center relative">
        <p className="text-gray-700 text-base italic mb-6">
          "We truly value their attention to detail and strong project
          management. Every milestone was achieved on time and within budget."
        </p>
        <div>
          <p className="font-medium text-teal-600">Daniel White</p>
          <span className="text-sm text-gray-500">EduLearn</span>
        </div>
      </div>

      {/* Card 8 */}
      <div className="bg-gray-50 shadow-md rounded-lg p-6 text-center relative">
        <p className="text-gray-700 text-base italic mb-6">
          "From start to finish, the experience was excellent. The team went
          above and beyond to ensure our satisfaction with the final product."
        </p>
        <div>
          <p className="font-medium text-teal-600">Emily Davis</p>
          <span className="text-sm text-gray-500">Retail Hub</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ==== CASE STUDIES SECTION ==== */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
      Our Work <span className="text-teal-600">Speaks for Itself</span>
    </h2>
    <p className="text-lg text-gray-600 mb-14 max-w-3xl mx-auto">
      We deliver cutting-edge solutions across multiple domains, ensuring
      business success through scalable, innovative, and reliable software.
    </p>

    <div className="grid md:grid-cols-3 gap-12 items-start">
      {/* Item 1 */}
      <div className="text-center">
        <img
          src="/assets/portfolio/desktoweb.gif"
          alt="Web App Development"
          className="mx-auto mb-6 h-48 object-contain"
        />
        <h3 className="text-xl font-semibold text-teal-600 mb-2">
          WEB-BASED APP DEVELOPMENT
        </h3>
        <p className="text-gray-600 mb-3">MLS Data Management</p>
        <a
          href="#"
          className="text-teal-500 font-medium hover:underline"
        >
          READ CASE STUDY &gt;&gt;
        </a>
      </div>

      {/* Item 2 */}
      <div className="text-center">
        <img
          src="/assets/portfolio/mobileapp.gif"
          alt="Mobile App Development"
          className="mx-auto mb-6 h-48 object-contain"
        />
        <h3 className="text-xl font-semibold text-teal-600 mb-2">
          MOBILE APP DEVELOPMENT
        </h3>
        <p className="text-gray-600 mb-3">Mobile Booking Engine Application</p>
        <a
          href="#"
          className="text-teal-500 font-medium hover:underline"
        >
          READ CASE STUDY &gt;&gt;
        </a>
      </div>

      {/* Item 3 */}
      <div className="text-center">
        <img
          src="/assets/portfolio/hrm.gif"
          alt="Custom Integrations"
          className="mx-auto mb-6 h-48 object-contain"
        /> 
        <h3 className="text-xl font-semibold text-teal-600 mb-2">
          CUSTOM INTEGRATIONS & ANALYTICSsss
        </h3>
        <p className="text-gray-600 mb-3">Custom HRMS Solutions</p>
        <a
          href="#"
          className="text-teal-500 font-medium hover:underline"
        >
          READ CASE STUDY &gt;&gt;
        </a>
      </div>
    </div>
  </div>
</section>





    </>
  );
}

export default Ourclient;
