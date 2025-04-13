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

const teamMembers = [
  {
    name: "Md. Tarikul Islam",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop",
  },
  {
    name: "Md Chanchal",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop",
  },
  {
    name: "Md Shaidul Islam",
    role: "Head of Product",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Our Team
          </span>
          <h2 className="section-title mt-4">Meet Our Leadership</h2>
          <p className="section-subtitle">The brilliant minds behind W3Zones</p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2" />
              <div className="relative">
                <div className="aspect-square rounded-t-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={800}
                    height={800}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/about" className="btn-primary">
            Meet the Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}
