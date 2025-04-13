"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const features = [
  {
    title: "Real-time Transaction Tracking",
    description:
      "Monitor all your financial activities in real-time with our advanced tracking system.",
    icon: "📊",
  },
  {
    title: "Multi-currency Support",
    description:
      "Manage multiple currencies seamlessly with automatic conversion rates.",
    icon: "💱",
  },
  {
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns and financial health.",
    icon: "📈",
  },
  {
    title: "Secure Payment Processing",
    description:
      "Bank-grade security for all your transactions and sensitive data.",
    icon: "🔒",
  },
  {
    title: "Budget Planning",
    description:
      "Create and manage budgets with smart recommendations and alerts.",
    icon: "📋",
  },
  {
    title: "Expense Management",
    description: "Track and categorize expenses with intelligent automation.",
    icon: "💰",
  },
];

export default function WalletMasterPro() {
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
            Our Product
          </span>
          <h2 className="section-title mt-4">Wallet Master Pro</h2>
          <p className="section-subtitle">
            Your Ultimate Financial Management Solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
                alt="Wallet Master Pro Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Wallet Master Pro?
            </h3>
            <p className="text-gray-600 mb-6">
              Wallet Master Pro is a comprehensive financial management solution
              designed to help businesses and individuals take control of their
              finances. With powerful features and an intuitive interface,
              managing your money has never been easier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/wallet-master-pro" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2" />
              <div className="relative p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
