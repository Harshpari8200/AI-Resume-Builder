import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaInstagram } from 'react-icons/fa';
import toast from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "gosaiharsh8200@gmail.com",
      link: "mailto:gosaiharsh8200@gmail.com"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8200021429",
      link: "tel:+918200021429"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Gandhinagar, India",
      value: "Sector 26",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      name: "GitHub",
      link: "https://github.com/Harshpari8200"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/gosai-harshpari-93665524a/"
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      name: "Instagram",
      link: "https://www.instagram.com/harsh_gosai_8200/"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            Have questions about our AI Resume Builder? We're here to help you create
            the perfect resume for your career journey.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="bg-base-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-base-content">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  <div className="p-4 bg-base-100 rounded-lg text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-base-content">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="text-primary hover:underline">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base-content/70">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="bg-base-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-base-content">Connect With Us</h2>
            <div className="flex justify-center gap-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-base-100 rounded-full text-primary hover:text-primary-focus transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants} className="bg-base-200 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-base-content">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="collapse collapse-plus bg-base-100">
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title text-xl font-medium">
                  How does the AI Resume Builder work?
                </div>
                <div className="collapse-content">
                  <p>Our AI Resume Builder uses advanced algorithms to analyze your input and create professional resumes. It suggests relevant content, formats your information, and ensures your resume follows industry standards.</p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                  Is my information secure?
                </div>
                <div className="collapse-content">
                  <p>Yes, we take data security seriously. All your information is encrypted and stored securely. We never share your personal data with third parties.</p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                  Can I customize my resume template?
                </div>
                <div className="collapse-content">
                  <p>Absolutely! Our platform offers multiple customization options. You can choose from various templates, colors, fonts, and layouts to make your resume unique.</p>
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-xl font-medium">
                  How do I download my resume?
                </div>
                <div className="collapse-content">
                  <p>Once you've completed your resume, simply click the download button. You can export your resume in multiple formats including PDF, DOCX, and TXT.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;