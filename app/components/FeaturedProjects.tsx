"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with advanced search, filtering, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-blue-500 to-blue-600",
    stars: 120,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-purple-500 to-purple-600",
    stars: 85,
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media platforms with data visualization and reporting.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Vue.js", "D3.js", "Express"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-green-500 to-green-600",
    stars: 95,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#E6494D]/10 mb-4">
            <span className="text-sm font-medium text-[#E6494D]">
              Featured Projects
            </span>
          </div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our latest projects and see how we bring ideas to life with
            cutting-edge technology.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-3xl transform transition-transform duration-300 group-hover:-translate-y-2`}
              />
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-primary transition-colors group"
                      target="_blank"
                    >
                      <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Source Code
                    </Link>
                    <Link
                      href={project.demo}
                      className="flex items-center text-gray-600 hover:text-primary transition-colors group"
                      target="_blank"
                    >
                      <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition-opacity hover:scale-105 transform transition-transform"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 animate-bounce-x" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
