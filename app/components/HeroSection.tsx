"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Database, Server, Zap } from "lucide-react";
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

const techIcons = [
  { icon: <Code className="w-6 h-6" />, name: "Code" },
  { icon: <Cpu className="w-6 h-6" />, name: "CPU" },
  { icon: <Database className="w-6 h-6" />, name: "Database" },
  { icon: <Server className="w-6 h-6" />, name: "Server" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />

      {/* Animated Circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-primary font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              Transforming Ideas into Reality
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Building the <span className="text-primary">Future</span> of
              Digital Innovation
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              We create exceptional digital experiences that drive business
              growth and transform user interactions.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center px-6 py-3 font-medium text-white rounded-lg bg-primary hover:bg-primary/90 transition-colors"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center px-6 py-3 font-medium text-primary rounded-lg border border-primary hover:bg-primary/5 transition-colors"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[2rem] overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                {/* Main Image */}
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=800&fit=crop"
                  alt="Digital Innovation"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />

                {/* Overlay Shapes */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />

                {/* Floating Tech Icons */}
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="absolute bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1, 1, 0],
                      x: [
                        `${Math.random() * 100}%`,
                        `${Math.random() * 100}%`,
                        `${Math.random() * 100}%`,
                        `${Math.random() * 100}%`,
                      ],
                      y: [
                        `${Math.random() * 100}%`,
                        `${Math.random() * 100}%`,
                        `${Math.random() * 100}%`,
                        `${Math.random() * 100}%`,
                      ],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      delay: index * 2,
                      ease: "linear",
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                ))}

                {/* Floating Code Snippet */}
                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <pre className="text-xs font-mono text-gray-800">
                    <code>
                      {`function createInnovation() {
  return {
    technology: "cutting-edge",
    design: "modern",
    impact: "transformative"
  };
}`}
                    </code>
                  </pre>
                </motion.div>

                {/* Stats Overlay */}
                <motion.div
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        100+
                      </div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-xs text-gray-600">Clients</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
