import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaEdit, FaMagic, FaRegFileAlt, FaChartLine, FaDownload, FaCheck, FaStar, FaCrown, FaRocket } from 'react-icons/fa';

function Services() {
  const handleGetStarted = () => {
    window.location.href = '/generate-resume';
  };

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
      icon: <FaRobot className="w-8 h-8 text-primary" />,
      title: "AI-Powered Resume Generation",
      description: "Transform your career experience into a professional resume with our advanced AI technology."
    },
    {
      icon: <FaEdit className="w-8 h-8 text-secondary" />,
      title: "Smart Content Suggestions",
      description: "Get intelligent suggestions for skills, achievements, and professional summaries."
    },
    {
      icon: <FaMagic className="w-8 h-8 text-accent" />,
      title: "Multiple Format Support",
      description: "Export your resume in various formats including PDF, Word, and ATS-friendly versions."
    },
    {
      icon: <FaRegFileAlt className="w-8 h-8 text-info" />,
      title: "Template Library",
      description: "Access a wide range of professionally designed resume templates."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-success" />,
      title: "ATS Optimization",
      description: "Ensure your resume passes Applicant Tracking Systems with our optimization tools."
    },
    {
      icon: <FaDownload className="w-8 h-8 text-warning" />,
      title: "Unlimited Downloads",
      description: "Download your resume as many times as you need in multiple formats."
    }
  ];

  const pricingPlans = [
    {
      icon: <FaStar className="w-12 h-12 text-primary" />,
      name: "Basic",
      price: "Free",
      description: "Start building your career today",
      features: [
        "AI-Powered Resume Generation",
        "Multiple Resume Templates",
        "PDF Downloads",
        "ATS-Friendly Format",
        "Easy Customization",
        "Standard Support"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "btn-primary"
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
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-base-content">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Revolutionize your job search with our AI-powered resume builder. 
            Create professional, ATS-friendly resumes in minutes.
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

        {/* Pricing Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-base-content">
            Choose Your <span className="text-primary">Plan</span>
          </h2>
          <div className="max-w-lg mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-base-200 rounded-2xl p-8 shadow-lg ${
                  plan.highlighted ? 'ring-2 ring-primary ring-offset-2 ring-offset-base-100' : ''
                }`}
              >
                <div className="text-center mb-6">
                  {plan.icon}
                  <h3 className="text-2xl font-bold mt-4 mb-2 text-base-content">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {plan.price}
                    <span className="text-base font-normal text-base-content/70">{plan.period}</span>
                  </div>
                  <p className="text-base-content/70">{plan.description}</p>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <FaCheck className="w-5 h-5 text-success" />
                      <span className="text-base-content/80">{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGetStarted}
                  className={`btn ${plan.buttonVariant} w-full`}
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-primary text-primary-content rounded-2xl p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Start Building Your Future Today</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of professionals who've already discovered the power of AI-driven resume creation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="btn btn-secondary btn-lg"
          >
            Try It Free
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Services;