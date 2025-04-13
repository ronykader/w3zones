"use client";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Filter, Search, Star } from "lucide-react";
import Image from "next/image";
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

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with advanced product management and payment integration.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB"],
    rating: 4.8,
    views: 1200,
    link: "/projects/ecommerce-platform",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure and user-friendly mobile banking application with biometric authentication.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    category: "Mobile Development",
    tags: ["React Native", "Firebase", "Redux"],
    rating: 4.9,
    views: 1500,
    link: "/projects/mobile-banking",
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description:
      "Real-time analytics dashboard with machine learning insights and predictive modeling.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    category: "Data Science",
    tags: ["Python", "TensorFlow", "D3.js"],
    rating: 4.7,
    views: 900,
    link: "/projects/analytics-dashboard",
  },
  {
    id: 4,
    title: "Smart Home Automation",
    description:
      "IoT-based home automation system with voice control and energy optimization.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    category: "IoT",
    tags: ["Raspberry Pi", "Node.js", "MQTT"],
    rating: 4.6,
    views: 800,
    link: "/projects/smart-home",
  },
  {
    id: 5,
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare management system with patient records and appointment scheduling.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    category: "Web Development",
    tags: ["Vue.js", "PostgreSQL", "Docker"],
    rating: 4.9,
    views: 1100,
    link: "/projects/healthcare-system",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description:
      "Mobile application for tracking workouts, nutrition, and health metrics.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    category: "Mobile Development",
    tags: ["Flutter", "Firebase", "HealthKit"],
    rating: 4.8,
    views: 1300,
    link: "/projects/fitness-app",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "IoT",
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const filteredProjects = projects
    .filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "views") return b.views - a.views;
      return 0;
    });

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
              Our Projects
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Explore Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Portfolio
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-600 text-xl">
              Discover our innovative solutions and successful projects that
              have helped businesses transform their digital presence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="text-gray-400" />
                <select
                  className="bg-transparent border border-gray-200 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <select
                className="bg-transparent border border-gray-200 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rating">Sort by Rating</option>
                <option value="views">Sort by Views</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform transition-transform duration-300 group-hover:-translate-y-2" />
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="font-medium">{project.rating}</span>
                        <Eye className="w-5 h-5 ml-4" />
                        <span className="font-medium">{project.views}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      View Project <ArrowRight className="w-4 h-4" />
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
            <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-gray-600 text-xl mb-8">
              Let's discuss how we can help you bring your ideas to life with
              our expertise and innovative solutions.
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
