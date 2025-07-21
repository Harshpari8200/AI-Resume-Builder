import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBrain, FaTrash, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { generateResume } from "../api/ResumeService";
import { BiBook } from "react-icons/bi";
import { useForm, useFieldArray } from "react-hook-form";
import { FaPlusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Resume from "../components/Resume";

const GenerateResume = () => {
  const [data, setData] = useState({
    personalInformation: {},
    summary: "",
    skills: [],
    experience: [],
    education: [],
    certifications: [],
    projects: [],
    languages: [],
    interests: [],
  });

  const { register, handleSubmit, control, setValue, reset } = useForm({
    defaultValues: data,
  });

  const [showFormUI, setShowFormUI] = useState(false);
  const [showResumeUI, setShowResumeUI] = useState(false);
  const [showPromptInput, setShowPromptInput] = useState(true);

  const experienceFields = useFieldArray({ control, name: "experience" });
  const educationFields = useFieldArray({ control, name: "education" });
  const certificationsFields = useFieldArray({
    control,
    name: "certifications",
  });
  const projectsFields = useFieldArray({ control, name: "projects" });
  const languagesFields = useFieldArray({ control, name: "languages" });
  const interestsFields = useFieldArray({ control, name: "interests" });
  const skillsFields = useFieldArray({ control, name: "skills" });

  // Resume Preview Component
  const ResumePreview = ({ data }) => {
    const { personalInformation = {}, summary = '', skills = [], experience = [], education = [], certifications = [], projects = [], languages = [], interests = [] } = data;

    return (
      <div className="bg-white text-gray-800 p-8 font-sans leading-relaxed">
        {/* Header */}
        <div className="border-b-2 border-gray-300 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {personalInformation.fullName || 'Your Name'}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            {personalInformation.email && (
              <span className="flex items-center gap-1">
                <FaEnvelope className="text-blue-500" />
                {personalInformation.email}
              </span>
            )}
            {personalInformation.phoneNumber && (
              <span className="flex items-center gap-1">
                <FaPhone className="text-green-500" />
                {personalInformation.phoneNumber}
              </span>
            )}
            {personalInformation.location && (
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-red-500" />
                {personalInformation.location}
              </span>
            )}
            {personalInformation.linkedin && (
              <span className="flex items-center gap-1">
                <FaLinkedin className="text-blue-700" />
                LinkedIn
              </span>
            )}
            {personalInformation.gitHub && (
              <span className="flex items-center gap-1">
                <FaGithub className="text-gray-800" />
                GitHub
              </span>
            )}
            {personalInformation.portfolio && (
              <span className="flex items-center gap-1">
                <FaGlobe className="text-purple-500" />
                Portfolio
              </span>
            )}
          </div>
        </div>

        {/* Summary */}
        {summary && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {skill.title} {skill.level && `(${skill.level})`}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Experience
            </h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{exp.jobTitle}</h3>
                  <span className="text-sm text-gray-600">{exp.duration}</span>
                </div>
                <p className="text-gray-700 font-medium mb-1">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </p>
                {exp.responsibility && (
                  <p className="text-gray-600 text-sm">{exp.responsibility}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.university} {edu.location && `• ${edu.location}`}</p>
                  </div>
                  <span className="text-sm text-gray-600">{edu.graduationYear}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Projects
            </h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{project.title}</h3>
                  {project.githubLink && (
                    <span className="text-sm text-blue-600">GitHub</span>
                  )}
                </div>
                {project.description && (
                  <p className="text-gray-600 text-sm mb-1">{project.description}</p>
                )}
                {project.technologiesUsed && (
                  <p className="text-gray-500 text-xs">
                    <strong>Technologies:</strong> {project.technologiesUsed}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Certifications
            </h2>
            {certifications.map((cert, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{cert.title}</h3>
                    <p className="text-gray-700 text-sm">{cert.issuingOrganization}</p>
                  </div>
                  <span className="text-sm text-gray-600">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Languages and Interests */}
        {(languages.length > 0 || interests.length > 0) && (
          <div className="flex flex-wrap gap-6">
            {languages.length > 0 && (
              <div className="flex-1 min-w-48">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                  Languages
                </h2>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {interests.length > 0 && (
              <div className="flex-1 min-w-48">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                  Interests
                </h2>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                      {interest.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      transition: { duration: 0.2 } 
    },
    tap: { 
      scale: 0.95 
    }
  };

  //handle form submit
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setData({ ...data });

    setShowFormUI(false);
    setShowPromptInput(false);
    setShowResumeUI(true);
  };

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    console.log(description);
    // server call to get resume

    try {
      setLoading(true);
      const responseData = await generateResume(description);
      console.log(responseData);
      reset(responseData.data);

      toast.success("Resume Generated Successfully!", {
        duration: 3000,
        position: "top-center",
      });
      setShowFormUI(true);
      setShowPromptInput(false);
      setShowResumeUI(false);
    } catch (error) {
      console.log(error);
      toast.error("Error Generating Resume!");
    } finally {
      setLoading(false);
      setDescription("");
    }
  };

  const handleClear = () => {
    setDescription("");
  };

  const renderInput = (name, label, type = "text") => (
    <motion.div 
      variants={itemVariants}
      className="form-control w-full mb-4"
    >
      <label className="label">
        <span className="label-text text-base-content font-medium">{label}</span>
      </label>
      <input
        type={type}
        {...register(name)}
        className="input input-bordered rounded-xl w-full bg-base-100 text-base-content focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
      />
    </motion.div>
  );

  const renderFieldArray = (fields, label, name, keys) => {
    return (
      <motion.div 
        variants={itemVariants}
        className="form-control w-full mb-6 bg-base-200 p-6 rounded-xl shadow-sm"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-base-content">{label}</h3>
          <motion.button
            type="button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => fields.append(
              keys.reduce((acc, key) => ({ ...acc, [key]: "" }), {})
            )}
            className="btn btn-primary btn-sm gap-2"
          >
            <FaPlusCircle className="w-4 h-4" /> Add {label}
          </motion.button>
        </div>
        
        <AnimatePresence>
          {fields.fields?.map((field, index) => (
            <motion.div 
              key={field.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-lg mb-4 bg-base-100 border border-base-300 hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keys.map((key) => (
                  <div key={key} className="form-control">
                    <label className="label">
                      <span className="label-text capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </label>
                    <input
                      type="text"
                      {...register(`${name}.${index}.${key}`)}
                      placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1').trim()}`}
                      className="input input-bordered w-full bg-base-100 text-base-content focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <motion.button
                  type="button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => fields.remove(index)}
                  className="btn btn-error btn-sm gap-2"
                >
                  <FaTrash className="w-4 h-4" /> Remove
                </motion.button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {fields.fields?.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-8 text-base-content/60"
          >
            No {label} added yet. Click the button above to add one.
          </motion.div>
        )}
      </motion.div>
    );
  };

  function showFormFunction() {
    return (
      <motion.div 
        key="form"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full max-w-6xl mx-auto p-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-8 flex items-center justify-center gap-2 text-base-content"
        >
          <BiBook className="text-accent" /> Resume Form
        </motion.h1>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 bg-base-200 rounded-xl text-base-content overflow-hidden"
          >
            {/* Personal Information Section */}
            <div className="bg-base-300 p-8">
              <h2 className="text-2xl font-bold text-base-content mb-6">Personal Information</h2>
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <div className="col-span-1 lg:col-span-3">
                  {renderInput("personalInformation.fullName", "Full Name")}
                </div>
                {renderInput("personalInformation.email", "Email", "email")}
                {renderInput("personalInformation.phoneNumber", "Phone Number", "tel")}
                {renderInput("personalInformation.location", "Location")}
                {renderInput("personalInformation.linkedin", "LinkedIn Profile URL", "url")}
                {renderInput("personalInformation.gitHub", "GitHub Profile URL", "url")}
                {renderInput("personalInformation.portfolio", "Portfolio Website", "url")}
              </motion.div>
            </div>

            {/* Summary Section */}
            <div className="px-8">
              <motion.div variants={itemVariants} className="bg-base-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-base-content">Professional Summary</h3>
                <textarea
                  {...register("summary")}
                  className="textarea textarea-bordered w-full bg-base-100 text-base-content focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 min-h-[120px]"
                  placeholder="Write a compelling professional summary highlighting your key achievements, skills, and career objectives..."
                ></textarea>
              </motion.div>
            </div>

            <div className="space-y-8">
              {/* Skills Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {renderFieldArray(skillsFields, "Skills", "skills", ["title", "level"])}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderFieldArray(languagesFields, "Languages", "languages", ["name"])}
                  {renderFieldArray(interestsFields, "Interests", "interests", ["name"])}
                </div>
              </div>

              {/* Professional Experience Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-base-content border-b border-base-300 pb-2">Professional Background</h2>
                {renderFieldArray(experienceFields, "Experience", "experience", [
                  "jobTitle",
                  "company",
                  "location", 
                  "duration",
                  "responsibility",
                ])}
              </div>

              {/* Education and Certifications Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {renderFieldArray(educationFields, "Education", "education", [
                  "degree",
                  "university",
                  "location",
                  "graduationYear",
                ])}
                {renderFieldArray(
                  certificationsFields,
                  "Certifications",
                  "certifications",
                  ["title", "issuingOrganization", "year"]
                )}
              </div>

              {/* Projects Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-base-content border-b border-base-300 pb-2">Projects</h2>
                {renderFieldArray(projectsFields, "Projects", "projects", [
                  "title",
                  "description",
                  "technologiesUsed",
                  "githubLink",
                ])}
              </div>
            </div>

            <motion.button 
              type="submit" 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn btn-primary w-full text-lg py-3"
            >
              Generate Resume
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    );
  }

  function ShowInputField() {
    return (
      <motion.div 
        key="input"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="bg-base-200 shadow-xl rounded-lg p-10 max-w-2xl w-full mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-6 flex items-center justify-center gap-2 text-base-content"
        >
          <FaBrain className="text-accent" /> AI Resume Generator
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6 text-lg text-base-content/70 text-center"
        >
          Enter a detailed description about yourself to generate your professional resume.
        </motion.p>
        
        <motion.textarea
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          disabled={loading}
          className="textarea textarea-bordered w-full h-48 mb-6 resize-none bg-base-100 text-base-content focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          placeholder="Example: I'm a software engineer with 3 years of experience in React, Node.js, and Python. I've worked on e-commerce platforms and have a degree in Computer Science..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <motion.button
            disabled={loading || !description.trim()}
            onClick={handleGenerate}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="btn btn-primary flex items-center gap-2 disabled:opacity-50"
          >
            {loading && <span className="loading loading-spinner loading-sm"></span>}
            <FaPaperPlane />
            Generate Resume
          </motion.button>
          
          <motion.button
            onClick={handleClear}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="btn btn-secondary flex items-center gap-2"
          >
            <FaTrash /> Clear
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

function showResume() {
  return <Resume data={data} />;
}

  return (
    <div className="min-h-screen bg-base-100 py-8 px-4">
      <div className="container mx-auto">
        <AnimatePresence mode="wait">
          {showFormUI && showFormFunction()}
          {showPromptInput && ShowInputField()}
          {showResumeUI && showResume()}
        </AnimatePresence>

        {/* Floating Action Buttons - Always visible for quick access */}
        <AnimatePresence>
          {!showPromptInput && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              className="fixed bottom-6 right-6 z-50"
            >
              <div className="flex flex-col gap-3">
                {/* Quick Edit Button */}
                {showResumeUI && (
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => {
                      setShowPromptInput(false);
                      setShowFormUI(true);
                      setShowResumeUI(false);
                    }}
                    className="btn btn-circle btn-success shadow-lg"
                    title="Quick Edit"
                  >
                    <FaPlusCircle className="w-5 h-5" />
                  </motion.button>
                )}

                {/* Generate New Button */}
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => {
                    setShowPromptInput(true);
                    setShowFormUI(false);
                    setShowResumeUI(false);
                  }}
                  className="btn btn-circle btn-accent shadow-lg"
                  title="Generate New Resume"
                >
                  <FaBrain className="w-5 h-5" />
                </motion.button>

                {/* Back to Resume Button */}
                {showFormUI && (
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => {
                      setShowPromptInput(false);
                      setShowFormUI(false);
                      setShowResumeUI(true);
                    }}
                    className="btn btn-circle btn-primary shadow-lg"
                    title="View Resume"
                  >
                    <BiBook className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GenerateResume;