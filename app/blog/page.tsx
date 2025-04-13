"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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

const blogPosts = [
  {
    title: "The Future of Digital Payments",
    excerpt:
      "Exploring the latest trends and innovations in digital payment solutions.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    date: "March 15, 2024",
    author: "Md. Tarikul Islam",
    category: "Technology",
  },
  {
    title: "Building Secure Financial Applications",
    excerpt:
      "Best practices for developing secure and reliable financial software.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63fb27b46?w=800&h=600&fit=crop",
    date: "March 10, 2024",
    author: "Md Chanchal",
    category: "Security",
  },
  {
    title: "Digital Transformation in Business",
    excerpt:
      "How businesses are adapting to the digital age and staying competitive.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    date: "March 5, 2024",
    author: "Md Shaidul Islam",
    category: "Business",
  },
  {
    title: "Mobile App Development Trends",
    excerpt: "The latest trends and technologies in mobile app development.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    date: "February 28, 2024",
    author: "Ashikur Rahman",
    category: "Development",
  },
  {
    title: "Cloud Computing for Startups",
    excerpt:
      "How startups can leverage cloud computing for growth and scalability.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63fb27b46?w=800&h=600&fit=crop",
    date: "February 20, 2024",
    author: "Ryad Hossain",
    category: "Cloud",
  },
  {
    title: "User Experience in FinTech",
    excerpt: "Designing intuitive and user-friendly financial applications.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    date: "February 15, 2024",
    author: "Nur Islam",
    category: "Design",
  },
];

const categories = [
  "All",
  "Technology",
  "Security",
  "Business",
  "Development",
  "Cloud",
  "Design",
];

export default function Blog() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Blog
            </span>
            <h1 className="section-title mt-4">Latest Articles</h1>
            <p className="section-subtitle">
              Insights and updates from our team
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts */}
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2" />
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 rounded-t-2xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={600}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-primary">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        By {post.author}
                      </span>
                      <Link href="#" className="text-primary hover:underline">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
