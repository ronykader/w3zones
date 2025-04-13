"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowRightLeft, CheckCircle2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const processSteps = [
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Planning",
    description:
      "Understanding requirements and creating a detailed project roadmap",
    details: [
      "Requirement gathering and analysis",
      "Project scope definition",
      "Resource planning",
      "Timeline estimation",
      "Risk assessment",
    ],
    additionalInfo: {
      duration: "2-4 weeks",
      deliverables: ["Project Plan", "Scope Document", "Resource Allocation"],
      tools: ["Jira", "Confluence", "Trello", "Miro"],
    },
    color: "from-[#E6494D] to-[#FF6B6B]",
    iconColor: "text-[#E6494D]",
    gradient: "bg-gradient-to-br from-[#E6494D]/20 to-[#FF6B6B]/20",
    accent: "bg-[#E6494D]/10",
    highlight: "bg-[#E6494D]/5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Analysis",
    description: "Deep dive into system requirements and architecture",
    details: [
      "System architecture design",
      "Database schema planning",
      "API design",
      "Security requirements",
      "Performance considerations",
    ],
    additionalInfo: {
      duration: "2-3 weeks",
      deliverables: ["System Design", "Architecture Diagram", "API Specs"],
      tools: ["Draw.io", "Postman", "Swagger", "Lucidchart"],
    },
    color: "from-[#FF6B6B] to-[#FF8787]",
    iconColor: "text-[#FF6B6B]",
    gradient: "bg-gradient-to-br from-[#FF6B6B]/20 to-[#FF8787]/20",
    accent: "bg-[#FF6B6B]/10",
    highlight: "bg-[#FF6B6B]/5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Design",
    description: "Creating detailed UI/UX designs and system architecture",
    details: [
      "UI/UX wireframing",
      "Prototype development",
      "Component design",
      "User flow mapping",
      "Design system creation",
    ],
    additionalInfo: {
      duration: "3-4 weeks",
      deliverables: ["Wireframes", "Prototypes", "Design System"],
      tools: ["Figma", "Adobe XD", "Sketch", "InVision"],
    },
    color: "from-[#FF8787] to-[#FFA8A8]",
    iconColor: "text-[#FF8787]",
    gradient: "bg-gradient-to-br from-[#FF8787]/20 to-[#FFA8A8]/20",
    accent: "bg-[#FF8787]/10",
    highlight: "bg-[#FF8787]/5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Implementation",
    description: "Development and coding of the software solution",
    details: [
      "Frontend development",
      "Backend development",
      "Database implementation",
      "API integration",
      "Code review and optimization",
    ],
    additionalInfo: {
      duration: "6-8 weeks",
      deliverables: ["Source Code", "API Documentation", "Database Schema"],
      tools: ["VS Code", "Git", "Docker", "Postman"],
    },
    color: "from-[#FFA8A8] to-[#FFC9C9]",
    iconColor: "text-[#FFA8A8]",
    gradient: "bg-gradient-to-br from-[#FFA8A8]/20 to-[#FFC9C9]/20",
    accent: "bg-[#FFA8A8]/10",
    highlight: "bg-[#FFA8A8]/5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Testing & Integration",
    description: "Rigorous testing and system integration",
    details: [
      "Unit testing",
      "Integration testing",
      "Performance testing",
      "Security testing",
      "User acceptance testing",
    ],
    additionalInfo: {
      duration: "3-4 weeks",
      deliverables: ["Test Reports", "Bug Reports", "Performance Metrics"],
      tools: ["Jest", "Cypress", "Selenium", "JMeter"],
    },
    color: "from-[#FFC9C9] to-[#FFE3E3]",
    iconColor: "text-[#FFC9C9]",
    gradient: "bg-gradient-to-br from-[#FFC9C9]/20 to-[#FFE3E3]/20",
    accent: "bg-[#FFC9C9]/10",
    highlight: "bg-[#FFC9C9]/5",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Maintenance",
    description: "Ongoing support and continuous improvement",
    details: [
      "Bug fixes",
      "Performance optimization",
      "Feature updates",
      "Security patches",
      "User feedback implementation",
    ],
    additionalInfo: {
      duration: "Ongoing",
      deliverables: ["Updates", "Patches", "Documentation"],
      tools: ["GitHub", "Jira", "Sentry", "New Relic"],
    },
    color: "from-[#FFE3E3] to-[#FFF5F5]",
    iconColor: "text-[#FFE3E3]",
    gradient: "bg-gradient-to-br from-[#FFE3E3]/20 to-[#FFF5F5]/20",
    accent: "bg-[#FFE3E3]/10",
    highlight: "bg-[#FFE3E3]/5",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

const rotateIn = {
  initial: { rotate: -180, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export default function DevelopmentProcess() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState<
    (typeof processSteps)[0] | null
  >(null);

  const handleStepClick = (step: (typeof processSteps)[0]) => {
    setSelectedStep(step);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedStep(null);
  };

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
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#E6494D]/10 mb-4"
          >
            <span className="text-sm font-medium text-[#E6494D]">
              Development Process
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            Our Development Process
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A systematic approach to delivering high-quality software solutions
            that meet your business needs.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden lg:block" />

          {/* Process steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 0 ? "lg:text-right" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`mb-8 lg:mb-0 ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6494D]/10 mb-4">
                    <span className="text-sm font-medium text-[#E6494D]">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <motion.button
                    onClick={() => handleStepClick(step)}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors group shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-medium">View Details</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Image */}
                <div
                  className={`relative aspect-video rounded-2xl overflow-hidden shadow-xl ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div
                    className={`absolute inset-0 ${step.gradient} mix-blend-overlay`}
                  />
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg"
                    variants={rotateIn}
                  >
                    <span className="text-2xl font-bold text-white">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>

                {/* Connecting arrow */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                    <ArrowRightLeft className="w-8 h-8 text-[#E6494D]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedStep.image}
                  alt={selectedStep.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 ${selectedStep.gradient} mix-blend-overlay`}
                />
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4">
                  {selectedStep.title}
                </h3>
                <p className="text-gray-600 mb-8">{selectedStep.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Details</h4>
                    <ul className="space-y-2">
                      {selectedStep.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">
                      Additional Info
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-500">Duration:</span>
                        <span className="ml-2 font-medium">
                          {selectedStep.additionalInfo.duration}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Deliverables:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedStep.additionalInfo.deliverables.map(
                            (deliverable, index) => (
                              <motion.span
                                key={index}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                {deliverable}
                              </motion.span>
                            )
                          )}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Tools:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedStep.additionalInfo.tools.map(
                            (tool, index) => (
                              <motion.span
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                {tool}
                              </motion.span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
