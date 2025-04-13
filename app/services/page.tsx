"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code,
  Database,
  Layout,
  Shield,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that enhance user experience and engagement.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    color: "from-blue-500 to-blue-600",
    stats: {
      projects: "500+",
      clients: "200+",
      satisfaction: "98%",
    },
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Building robust and scalable web applications using modern technologies and best practices.",
    features: [
      "Frontend Development",
      "Backend Development",
      "API Integration",
      "Performance Optimization",
      "Cross-browser Compatibility",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    color: "from-purple-500 to-purple-600",
    stats: {
      projects: "1000+",
      clients: "300+",
      satisfaction: "97%",
    },
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications that work seamlessly across devices.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Solutions",
      "Mobile UI/UX",
      "App Store Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    color: "from-green-500 to-green-600",
    stats: {
      projects: "300+",
      clients: "150+",
      satisfaction: "99%",
    },
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Solutions",
    description:
      "Designing and implementing efficient database solutions for optimal performance.",
    features: [
      "Database Design",
      "Data Migration",
      "Performance Tuning",
      "Backup & Recovery",
      "Data Security",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-ebf2519e3eb2?w=800&h=600&fit=crop",
    color: "from-orange-500 to-orange-600",
    stats: {
      projects: "400+",
      clients: "180+",
      satisfaction: "96%",
    },
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Services",
    description:
      "Providing cloud solutions for scalable and reliable application deployment.",
    features: [
      "Cloud Migration",
      "Serverless Architecture",
      "Containerization",
      "Cloud Security",
      "Cost Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    color: "from-red-500 to-red-600",
    stats: {
      projects: "250+",
      clients: "120+",
      satisfaction: "98%",
    },
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security Solutions",
    description:
      "Implementing robust security measures to protect your applications and data.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Data Encryption",
      "Access Control",
      "Compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    color: "from-indigo-500 to-indigo-600",
    stats: {
      projects: "200+",
      clients: "100+",
      satisfaction: "99%",
    },
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-transparent bg-clip-text px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Our Services
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Transform Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Digital Vision
              </span>{" "}
              into Reality
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-600 text-xl">
              We combine cutting-edge technology with creative excellence to
              deliver exceptional digital solutions that drive business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeService === index
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl transform transition-transform duration-300 group-hover:-translate-y-2`}
                />
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <div
                      className={`w-16 h-16 ${service.color
                        .replace("from-", "bg-")
                        .replace(
                          " to-",
                          "/10"
                        )} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            {value}
                          </div>
                          <div className="text-sm text-gray-500 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition-opacity hover:scale-105 transform transition-transform"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 text-xl mb-8">
              Let's discuss how we can help you achieve your digital goals and
              create something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition-opacity hover:scale-105 transform transition-transform text-lg"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
