"use client";

import { motion } from "framer-motion";
import {
  FaChartLine,
  FaCode,
  FaMobile,
  FaSearch,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies.",
    icon: <FaCode className="w-8 h-8 text-primary" />,
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications.",
    icon: <FaMobile className="w-8 h-8 text-primary" />,
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions for online growth.",
    icon: <FaChartLine className="w-8 h-8 text-primary" />,
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions for your digital assets.",
    icon: <FaShieldAlt className="w-8 h-8 text-primary" />,
  },
  {
    title: "SEO Optimization",
    description: "Improve your search engine rankings and visibility.",
    icon: <FaSearch className="w-8 h-8 text-primary" />,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure services.",
    icon: <FaServer className="w-8 h-8 text-primary" />,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Services
          </span>
          <h2 className="section-title mt-4">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions for your business needs
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2" />
              <div className="relative p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
