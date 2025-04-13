"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechStart Inc.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop",
    rating: 5,
    content:
      "W3Zones transformed our digital presence with their innovative solutions. Their team's expertise and dedication were instrumental in our success.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, GrowthHub",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
    rating: 5,
    content:
      "Working with W3Zones was a game-changer for our business. Their attention to detail and customer-centric approach made all the difference.",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateTech",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop",
    rating: 5,
    content:
      "The team at W3Zones delivered exceptional results. Their technical expertise and problem-solving skills are truly impressive.",
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
      staggerChildren: 0.1,
    },
  },
};

export default function Testimonials() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-transparent bg-clip-text px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6">
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Clients Say
            </span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600 text-xl">
            Hear from our satisfied clients about their experience working with
            us.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100 relative group hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-8 right-8 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
