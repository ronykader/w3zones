"use client";

import { motion } from "framer-motion";
import { Code, Layout, Smartphone, Zap } from "lucide-react";

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

const processSteps = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that enhance user experience and engagement.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development",
    description:
      "Building robust and scalable applications using modern technologies and best practices.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications that work seamlessly across devices.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Deployment",
    description:
      "Ensuring smooth deployment and continuous integration for optimal performance.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Our Development Process
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We follow a systematic approach to deliver high-quality solutions
            that meet your business needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl transform transition-transform duration-300 group-hover:-translate-y-2`}
              />
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div
                    className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                />
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each step in our process is carefully planned and executed to ensure
            the best possible outcome for your project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
