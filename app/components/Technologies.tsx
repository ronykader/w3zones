"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";

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

const technologies = [
  {
    category: "Frontend Development",
    priority: 1,
    technologies: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        level: "Expert",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        level: "Expert",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        level: "Expert",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        level: "Expert",
      },
      {
        name: "Vue.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
        level: "Expert",
      },
      {
        name: "Angular",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
        level: "Advanced",
      },
    ],
  },
  {
    category: "Backend Development",
    priority: 2,
    technologies: [
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        level: "Expert",
      },
      {
        name: "Laravel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        level: "Expert",
      },
      {
        name: "Symfony",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/symfony/symfony-original.svg",
        level: "Expert",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        level: "Expert",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        level: "Expert",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        level: "Expert",
      },
      {
        name: "Django",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        level: "Expert",
      },
      {
        name: "Go",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
        level: "Advanced",
      },
    ],
  },
  {
    category: "CMS & E-commerce",
    priority: 3,
    technologies: [
      {
        name: "WordPress",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg",
        level: "Expert",
      },
      {
        name: "WooCommerce",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg",
        level: "Expert",
      },
      {
        name: "Shopify",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/shopify/shopify-plain.svg",
        level: "Expert",
      },
    ],
  },
  {
    category: "Database & Cloud",
    priority: 4,
    technologies: [
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        level: "Expert",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        level: "Expert",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        level: "Expert",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
        level: "Expert",
      },
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        level: "Advanced",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        level: "Advanced",
      },
      {
        name: "Kubernetes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
        level: "Advanced",
      },
    ],
  },
];

export default function Technologies() {
  // Combine all technologies into a single array
  const allTechnologies = technologies.reduce((acc, category) => {
    return [...acc, ...category.technologies];
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-primary font-medium mb-4"
          >
            <Zap className="w-4 h-4" />
            Our Tech Stack
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Technologies We Work With
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We leverage cutting-edge technologies to build robust and scalable
            solutions for our clients.
          </motion.p>
        </motion.div>

        {/* Main Technologies Display */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl" />

          {/* Technologies Grid */}
          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-8">
            {allTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative w-16 h-16 mb-3">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      width={64}
                      height={64}
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 text-center">
                    {tech.name}
                  </span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-1">
                    {tech.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Labels */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {category.category}
              </h3>
              <p className="text-sm text-gray-600">
                {category.technologies.length} technologies
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            And many more technologies to meet your specific project
            requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "GraphQL",
              "Redis",
              "Kubernetes",
              "CI/CD",
              "Microservices",
              "REST APIs",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
