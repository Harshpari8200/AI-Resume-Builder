import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRocket, FaMagic, FaClock, FaUserTie, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router';

function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const features = [
    {
      icon: <FaBrain className="w-8 h-8 text-primary" />,
      title: "AI-Powered Generation",
      description: "Harness the power of advanced AI to create compelling resumes from simple descriptions of your experience."
    },
    {
      icon: <FaMagic className="w-8 h-8 text-secondary" />,
      title: "Smart Formatting",
      description: "Automatic formatting and styling that ensures your resume looks professional and ATS-friendly."
    },
    {
      icon: <FaClock className="w-8 h-8 text-accent" />,
      title: "Time-Saving",
      description: "Create a professional resume in minutes instead of hours, with AI-guided content suggestions."
    },
    {
      icon: <FaUserTie className="w-8 h-8 text-info" />,
      title: "Professional Templates",
      description: "Choose from professionally designed templates that catch recruiters' attention."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-success" />,
      title: "Career Optimization",
      description: "AI-powered suggestions to highlight your strengths and improve your career narrative."
    },
    {
      icon: <FaRocket className="w-8 h-8 text-warning" />,
      title: "Easy Customization",
      description: "Quickly customize and tailor your resume for different job applications."
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-base-100 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-base-content">
            Transform Your Career with
            <span className="text-primary"> AI-Powered</span> Resumes
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Your journey to professional success begins with a compelling resume.
            Let our AI technology craft your story while you focus on what matters most.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          className="bg-base-200 rounded-2xl p-8 mb-16 text-center shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4 text-base-content">Our Mission</h2>
          <p className="text-lg text-base-content/80 max-w-4xl mx-auto">
            To revolutionize the way professionals present themselves in the job market by combining
            artificial intelligence with human creativity. We believe everyone deserves a resume that
            truly reflects their potential.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-base-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-base-100 p-3 rounded-lg shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-base-content">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-primary text-primary-content rounded-2xl p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Future?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of professionals who've already transformed their job search with our AI Resume Builder.
          </p>
          <Link
            to="/generate-resume"
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
            className="btn btn-secondary btn-lg"

          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;