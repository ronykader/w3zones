"use client";

import { motion } from "framer-motion";
import {
  Bolt,
  Clock,
  Code,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const stats = [
  {
    icon: <Code className="w-8 h-8" />,
    value: "100+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries",
    color: "from-blue-500 to-blue-600",
    iconColor: "text-blue-500",
    highlightColor: "bg-blue-500/10",
    accentColor: "text-blue-400",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "50+",
    label: "Happy Clients",
    description: "Satisfied clients from around the globe",
    color: "from-green-500 to-green-600",
    iconColor: "text-green-500",
    highlightColor: "bg-green-500/10",
    accentColor: "text-green-400",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "5+",
    label: "Years Experience",
    description: "Years of industry expertise and innovation",
    color: "from-purple-500 to-purple-600",
    iconColor: "text-purple-500",
    highlightColor: "bg-purple-500/10",
    accentColor: "text-purple-400",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "95%",
    label: "Success Rate",
    description: "High project success and client retention rate",
    color: "from-orange-500 to-orange-600",
    iconColor: "text-orange-500",
    highlightColor: "bg-orange-500/10",
    accentColor: "text-orange-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const boltVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: [0, 1, 0],
    scale: [0, 1.2, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glowing Background */}
              <div
                className={`absolute inset-0 ${stat.highlightColor} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}
              />

              {/* Bolt Effect */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                variants={boltVariants}
                initial="initial"
                animate="animate"
              >
                <Bolt
                  className={`absolute top-0 right-0 w-8 h-8 ${stat.accentColor} opacity-30`}
                />
              </motion.div>

              {/* Main Card */}
              <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50">
                {/* Icon Container with Glow */}
                <div
                  className={`relative w-16 h-16 rounded-xl ${stat.highlightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div
                    className={`absolute inset-0 ${stat.highlightColor} rounded-xl blur-md`}
                  />
                  <div className={`relative ${stat.iconColor}`}>
                    {stat.icon}
                  </div>
                </div>

                {/* Stats Content */}
                <div className="space-y-2">
                  <motion.h3
                    className="text-4xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-lg font-semibold text-gray-700">
                    {stat.label}
                  </p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
