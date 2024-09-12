import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaBroom, FaClock, FaCheckCircle, FaPercent } from 'react-icons/fa';
import Image from 'next/image';

const LandingPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      <header className="bg-yellow-400 text-black py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.h1 
            className="text-3xl font-bold"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Busybee Movers and Cleaners
          </motion.h1>
          <nav>
            <ul className="flex space-x-4">
              <li><button onClick={() => scrollToSection('services')} className="hover:underline">Services</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:underline">About Us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:underline">Contact</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16 relative h-[600px]">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Moving and Cleaning Services"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg">
            <motion.h2 
              className="text-5xl font-bold mb-4 text-white"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Let us handle the heavy lifting!
            </motion.h2>
            <motion.p 
              className="text-2xl mb-8 text-yellow-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Efficient, hassle-free moving and cleaning services for busy professionals.
            </motion.p>
            <motion.a 
              href="https://www.facebook.com/profile.php?id=100070180724154"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Service Now
            </motion.a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: FaTruck, title: "Moving Services", description: "Efficient and careful relocation for your home or office.", image: "/placeholder.svg?height=300&width=400" },
              { icon: FaBroom, title: "Cleaning Services", description: "Thorough cleaning to make your space spotless and fresh.", image: "/placeholder.svg?height=300&width=400" },
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="relative h-48">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    layout="fill" 
                    objectFit="cover" 
                  />
                </div>
                <div className="p-6">
                  <service.icon className="text-5xl mb-4 text-yellow-400" />
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Busybee?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaClock, title: "Time-Saving", description: "We understand your busy schedule and work efficiently." },
              { icon: FaCheckCircle, title: "Reliable", description: "Our well-trained team ensures precision and punctuality." },
              { icon: FaPercent, title: "Great Value", description: "Competitive pricing with bundle deals for combined services." },
            ].map((reason, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <reason.icon className="text-5xl mb-4 mx-auto text-yellow-400" />
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Promotion Section */}
        <section id="contact" className="mb-16">
          <motion.div
            className="bg-black text-yellow-400 p-8 rounded-lg text-center relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Special Offer for New Customers!</h2>
              <p className="text-xl mb-6">Get 15% off on your first service or enjoy our bundle deal: Moving + Cleaning at a reduced rate!</p>
              <motion.a 
                href="https://www.facebook.com/profile.php?id=100070180724154"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Claim Your Discount
              </motion.a>
            </div>
            <div className="absolute inset-0 opacity-10">
              <Image 
                src="/placeholder.svg?height=400&width=800" 
                alt="Promotion background" 
                layout="fill" 
                objectFit="cover" 
              />
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-black text-yellow-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2023 Busybee Movers and Cleaners. All rights reserved.</p>
          <motion.a 
            href="https://www.facebook.com/profile.php?id=100070180724154"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us on Facebook
          </motion.a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;