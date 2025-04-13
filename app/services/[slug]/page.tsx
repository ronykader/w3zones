"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = {
  "ui-ux-design": {
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that enhance user experience and engagement.",
    longDescription:
      "Our UI/UX design service focuses on creating seamless digital experiences that delight users and drive business growth. We combine user research, modern design principles, and cutting-edge tools to craft interfaces that are both beautiful and functional.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
    ],
    benefits: [
      "Improved user satisfaction and engagement",
      "Higher conversion rates",
      "Reduced development costs",
      "Faster time to market",
      "Competitive advantage",
    ],
    process: [
      {
        title: "Discovery",
        description: "Understanding your business goals and user needs",
      },
      {
        title: "Research",
        description: "Analyzing market trends and user behavior",
      },
      {
        title: "Design",
        description: "Creating wireframes and visual designs",
      },
      {
        title: "Testing",
        description: "Validating designs with real users",
      },
      {
        title: "Implementation",
        description: "Handing off designs to development team",
      },
    ],
    stats: {
      projects: "500+",
      clients: "200+",
      satisfaction: "98%",
      deliveryTime: "2-4 weeks",
    },
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    color: "from-blue-500 to-blue-600",
  },
  // ... Add other services with similar structure
};

export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Service not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-transparent bg-clip-text px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                Our Services
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-xl mb-8"
              >
                {service.longDescription}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                {Object.entries(service.stats).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full"
                  >
                    {key === "deliveryTime" ? (
                      <Clock className="w-5 h-5 text-primary" />
                    ) : key === "clients" ? (
                      <Users className="w-5 h-5 text-primary" />
                    ) : key === "satisfaction" ? (
                      <Star className="w-5 h-5 text-primary" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    )}
                    <div>
                      <div className="text-lg font-bold text-primary">
                        {value}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {key}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition-opacity hover:scale-105 transform transition-transform text-lg"
                >
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Key Features</h2>
            <p className="text-gray-600">
              Discover what makes our {service.title} service stand out
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-600">
                  Comprehensive {feature.toLowerCase()} to ensure the best
                  results for your project.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-gray-600">
              A systematic approach to delivering exceptional results
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Benefits</h2>
            <p className="text-gray-600">
              Why choose our {service.title} service?
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
                  <p className="text-gray-600">
                    Achieve better results with our proven approach to{" "}
                    {service.title.toLowerCase()}.
                  </p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 text-xl mb-8">
              Let's discuss how we can help you achieve your goals with our{" "}
              {service.title} service.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition-opacity hover:scale-105 transform transition-transform text-lg"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
