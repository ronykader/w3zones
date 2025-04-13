"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
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

const teamMembers = {
  ceo: {
    name: "Md. Tarikul Islam",
    role: "CEO & Founder",
    description:
      "Visionary leader with 10+ years of experience in fintech and digital transformation.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop",
    social: {
      linkedin: "#",
      twitter: "#",
    },
    experience:
      "Over 10 years of experience in fintech and digital transformation, leading multiple successful startups and innovative projects.",
    skills: [
      "Strategic Planning",
      "Business Development",
      "Fintech Innovation",
      "Team Leadership",
    ],
  },
  leadership: [
    {
      name: "Md Chanchal",
      role: "CTO",
      description:
        "Technical expert specializing in blockchain and financial systems.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop",
      experience:
        "8 years of experience in blockchain technology and financial systems development.",
      skills: [
        "Blockchain",
        "System Architecture",
        "Technical Leadership",
        "Security",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Md Shaidul Islam",
      role: "Head of Product",
      description:
        "Product strategist with a focus on user experience and innovation.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
      experience:
        "7 years of experience in product management and user experience design.",
      skills: [
        "Product Strategy",
        "UX Design",
        "Agile Methodology",
        "Market Analysis",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ],
  engineering: [
    {
      name: "Ashikur Rahman",
      role: "Lead Developer",
      description:
        "Full-stack developer with expertise in modern web technologies.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&h=800&fit=crop",
      experience:
        "6 years of experience in full-stack development and team leadership.",
      skills: ["React", "Node.js", "TypeScript", "AWS", "Team Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Ryad Hossain",
      role: "UI/UX Designer",
      description:
        "Creative designer focused on creating intuitive user interfaces.",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&h=800&fit=crop",
      experience: "5 years of experience in UI/UX design and user research.",
      skills: [
        "UI Design",
        "UX Research",
        "Figma",
        "Prototyping",
        "User Testing",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Nur Islam",
      role: "Backend Engineer",
      description: "Expert in building robust and scalable backend systems.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop",
      experience:
        "5 years of experience in backend development and system architecture.",
      skills: ["Python", "Django", "PostgreSQL", "Docker", "API Design"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Emon Hossain",
      role: "Frontend Engineer",
      description: "Specializing in React and modern frontend development.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=800&fit=crop",
      experience:
        "4 years of experience in frontend development and performance optimization.",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "CSS",
        "Performance Optimization",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Rakib Hasan",
      role: "DevOps Engineer",
      description: "Expert in cloud infrastructure and deployment automation.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop",
      experience: "5 years of experience in DevOps and cloud infrastructure.",
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Infrastructure as Code",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sakib Ahmed",
      role: "Mobile Developer",
      description: "Creating seamless mobile experiences for iOS and Android.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
      experience: "4 years of experience in mobile app development.",
      skills: ["React Native", "iOS", "Android", "Mobile UI", "Performance"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Fahim Rahman",
      role: "QA Engineer",
      description: "Ensuring the highest quality standards in our products.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=800&fit=crop",
      experience: "4 years of experience in quality assurance and testing.",
      skills: [
        "Automated Testing",
        "Manual Testing",
        "Test Planning",
        "Bug Tracking",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ],
  marketing: [
    {
      name: "Tabassum Maryaum",
      role: "Digital Marketing Expert",
      description:
        "Driving online visibility and growth through strategic marketing.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
      experience:
        "5 years of experience in digital marketing and growth strategies.",
      skills: [
        "SEO",
        "Content Marketing",
        "Social Media",
        "Analytics",
        "Campaign Management",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Nur Islam",
      role: "SEO Specialist",
      description: "Optimizing our digital presence for maximum visibility.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop",
      experience: "4 years of experience in SEO and digital marketing.",
      skills: [
        "SEO",
        "Keyword Research",
        "Content Strategy",
        "Analytics",
        "Technical SEO",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ],
};

export default function About() {
  const [selectedMember, setSelectedMember] = useState<{
    name: string;
    role: string;
    description: string;
    image: string;
    social?: {
      linkedin?: string;
      twitter?: string;
    };
    skills?: string[];
    experience?: string;
  } | null>(null);

  const handleMemberClick = (member: any) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

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
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#E6494D]/10 mb-4">
              <span className="text-sm font-medium text-[#E6494D]">
                Our Story
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Our Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leader in fintech innovation
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#E6494D] to-[#FF6B6B] hidden lg:block" />

            {/* Timeline Items */}
            <div className="space-y-12 lg:space-y-0">
              {/* 2023 - Foundation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative lg:grid lg:grid-cols-2 lg:gap-12 items-center"
              >
                <div className="lg:text-right mb-8 lg:mb-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6494D]/10 mb-4">
                    <span className="text-sm font-medium text-[#E6494D]">
                      2023
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">The Beginning</h3>
                  <p className="text-gray-600">
                    W3Zones was founded with a vision to revolutionize financial
                    technology. Our journey began with a small team of
                    passionate innovators.
                  </p>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
                    alt="W3Zones Foundation"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* 2024 - Growth */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:grid lg:grid-cols-2 lg:gap-12 items-center"
              >
                <div className="lg:order-2 mb-8 lg:mb-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6494D]/10 mb-4">
                    <span className="text-sm font-medium text-[#E6494D]">
                      2024
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Rapid Expansion
                  </h3>
                  <p className="text-gray-600">
                    We expanded our team and launched our first major product.
                    Our innovative solutions started gaining recognition in the
                    industry.
                  </p>
                </div>
                <div className="lg:order-1 relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="W3Zones Growth"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Present - Innovation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative lg:grid lg:grid-cols-2 lg:gap-12 items-center"
              >
                <div className="lg:text-right mb-8 lg:mb-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6494D]/10 mb-4">
                    <span className="text-sm font-medium text-[#E6494D]">
                      Present
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Leading Innovation
                  </h3>
                  <p className="text-gray-600">
                    Today, we're at the forefront of fintech innovation, serving
                    thousands of customers and continuously pushing the
                    boundaries of what's possible.
                  </p>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                    alt="W3Zones Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8">
                To create innovative solutions that make financial management
                accessible, secure, and efficient for everyone.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get in Touch
                </Link>
                <Link href="#team" className="btn-secondary">
                  Meet Our Team
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Section */}
      <section id="ceo" className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-square lg:aspect-auto">
                  <Image
                    src={teamMembers.ceo.image}
                    alt={teamMembers.ceo.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        CEO & Founder
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold mb-2">
                      {teamMembers.ceo.name}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {teamMembers.ceo.description}
                    </p>
                    <div className="flex gap-4 mt-6">
                      <Link
                        href={teamMembers.ceo.social.linkedin}
                        className="text-white hover:text-primary transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </Link>
                      <Link
                        href={teamMembers.ceo.social.twitter}
                        className="text-white hover:text-primary transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl font-semibold mb-6">Our Vision</h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    At W3Zones, we believe in transforming the way people
                    interact with their finances. Our mission is to create
                    innovative solutions that make financial management
                    accessible, secure, and efficient for everyone.
                  </p>
                  <p className="text-gray-600 mb-6 text-lg">
                    Under the leadership of our CEO, we've built a team of
                    passionate professionals dedicated to pushing the boundaries
                    of what's possible in fintech.
                  </p>
                  <div className="flex gap-4">
                    <Link href="/contact" className="btn-primary">
                      Get in Touch
                    </Link>
                    <Link href="#team" className="btn-secondary">
                      Meet Our Team
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Leadership Team</h2>
            <p className="section-subtitle">
              Our experienced leaders driving innovation
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.leadership.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-3xl transform transition-transform duration-300 group-hover:-translate-y-2" />
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={800}
                      height={800}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <button
                      onClick={() => handleMemberClick(member)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg group-hover:scale-110"
                      title="View Details"
                    >
                      <Info className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        {member.role}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engineering Team */}
      <section id="engineering" className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Engineering Team</h2>
            <p className="section-subtitle">
              Our talented developers building the future
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.engineering.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-3xl transform transition-transform duration-300 group-hover:-translate-y-2" />
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={800}
                      height={800}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <button
                      onClick={() => handleMemberClick(member)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg group-hover:scale-110"
                      title="View Details"
                    >
                      <Info className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        {member.role}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marketing Team */}
      <section id="marketing" className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Marketing Team</h2>
            <p className="section-subtitle">Driving growth and engagement</p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.marketing.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-3xl transform transition-transform duration-300 group-hover:-translate-y-2" />
                <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={800}
                      height={800}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <button
                      onClick={() => handleMemberClick(member)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg group-hover:scale-110"
                      title="View Details"
                    >
                      <Info className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        {member.role}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <Modal
        isOpen={selectedMember !== null}
        onClose={handleCloseModal}
        member={
          selectedMember || {
            name: "",
            role: "",
            description: "",
            image: "",
          }
        }
      />
    </main>
  );
}
