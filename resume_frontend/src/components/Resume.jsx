import React from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { pdf } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';

const Resume = ({ data }) => {
  if (!data) {
    return <div>No resume data available</div>;
  }

  const [isGenerating, setIsGenerating] = React.useState(false);
  const resumeRef = React.useRef(null);

  const handleDownloadPdf = async () => {
    try {
      setIsGenerating(true);
      const blob = await pdf(<ResumePDF data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${data.personalInformation?.fullName || 'Resume'}_${new Date().toISOString().split('T')[0]}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  return (
    <>
      <div
        ref={resumeRef}
        style={{
          maxWidth: '56rem',
          margin: '0 auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          borderRadius: '0.5rem',
          padding: '2rem',
          gap: '1.5rem',
          backgroundColor: '#1a1a1a',
          color: '#1f2937',
          border: '1px solid #1a1a1a'
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem' }}>
            {data.personalInformation.fullName}
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#ffffff' }}>
            {data.personalInformation.location}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            {data.personalInformation.email && (
              <a
                href={`mailto:${data.personalInformation.email}`}
                style={{ display: 'flex', alignItems: 'center', color: '#4f46e5', textDecoration: 'none' }}
              >
                <FaEnvelope style={{ marginRight: '0.5rem' }} /> {data.personalInformation.email}
              </a>
            )}
            {data.personalInformation.phoneNumber && (
              <p style={{ display: 'flex', alignItems: 'center', color: '#ffffff', margin: 0 }}>
                <FaPhone style={{ marginRight: '0.5rem' }} />{" "}
                {data.personalInformation.phoneNumber}
              </p>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            {data.personalInformation.gitHub && (
              <a
                href={data.personalInformation.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', color: '#ffffff', textDecoration: 'none' }}
              >
                <FaGithub style={{ marginRight: '0.5rem' }} /> GitHub
              </a>
            )}
            {data.personalInformation.linkedIn && (
              <a
                href={data.personalInformation.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', color: '#2563eb', textDecoration: 'none' }}
              >
                <FaLinkedin style={{ marginRight: '0.5rem' }} /> LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="divider"></div>

        {/* Summary Section */}
        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4f46e5', marginBottom: '0.5rem' }}>Summary</h2>
          <p style={{ color: '#374151' }}>{data.summary}</p>
        </section>

        <div style={{ borderTop: '1px solid #ffffff', margin: '1rem 0' }}></div>

        {/* Skills Section */}
        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4f46e5', marginBottom: '1rem' }}>Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '0.5rem' }}>
            {data.skills?.map((skill, index) => (
              <div
                key={index}
                style={{
                  border: '1px solid #4f46e5',
                  borderRadius: '1rem',
                  padding: '0.5rem 1rem',
                  display: 'inline-block',
                  fontSize: '0.875rem',
                  color: '#4f46e5'
                }}
              >
                {skill.title} -{" "}
                <span style={{ marginLeft: '0.25rem', fontWeight: '600' }}>{skill.level}</span>
              </div>
            )) || null}
          </div>
        </section>

        <div style={{ borderTop: '1px solid #e5e7eb', margin: '1rem 0' }}></div>

        {/* Experience Section */}
        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4f46e5', marginBottom: '1rem' }}>Experience</h2>
          {data.experience?.map((exp, index) => (
            <div
              key={index}
              style={{
                marginBottom: '1rem',
                padding: '1rem',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                // backgroundColor: '#1f2937',
                // border: '1px solid #e5e7eb'
              }}
              className="bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.5rem' }}>{exp.jobTitle}</h3>
              <p style={{ color: '#ffffff', marginBottom: '0.25rem' }}>
                {exp.company} | {exp.location}
              </p>
              <p style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>{exp.duration}</p>
              <p style={{ color: '#4b5563', marginTop: '0.5rem' }}>
                {exp.responsibility}
              </p>
            </div>
          ))}
        </section>

        <div style={{ borderTop: '1px solid #e5e7eb', margin: '1rem 0' }}></div>

        {/* Education Section */}
        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4f46e5', marginBottom: '1rem' }}>Education</h2>
          {data.education?.map((edu, index) => (
            <div
              key={index}
              style={{
                marginBottom: '1rem',
                padding: '1rem',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                // backgroundColor: '#f8fafc',
                // border: '1px solid #e5e7eb'
              }}
              className="bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ffffff', marginBottom: '0.5rem' }}>{edu.degree}</h3>
              <p style={{ color: '#6b7280', marginBottom: '0.25rem' }}>
                {edu.university}, {edu.location}
              </p>
              <p style={{ color: '#9ca3af' }}>
                🎓 Graduation Year: {edu.graduationYear}
              </p>
            </div>
          ))}
        </section>

        <div className="divider"></div>

        {/* Certifications Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Certifications
          </h2>
          {data.certifications?.map((cert, index) => (
            <div
              key={index}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-white">{cert.title}</h3>
              <p className="text-gray-500">
                {cert.issuingOrganization} - {cert.year}
              </p>
            </div>
          ))}
        </section>

        <div className="divider"></div>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">Projects</h2>
          {data.projects?.map((proj, index) => (
            <div
              key={index}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-white">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {proj.description}
              </p>
              <p className="text-gray-500">
                🛠 Technologies: {Array.isArray(proj.technologiesUsed) ? proj.technologiesUsed.join(", ") : proj.technologiesUsed || 'N/A'}
              </p>
              {proj.githubLink && (
                <a
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  🔗 GitHub Link
                </a>
              )}
            </div>
          ))}
        </section>

        <div className="divider"></div>

        {/* Achievements Section */}
        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Achievements
          </h2>
          {data.achievements?.map((ach, index) => (
            <div
              key={index}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{ach.title}</h3>
              <p className="text-gray-500">{ach.year}</p>
              <p className="text-gray-600 dark:text-gray-300">
                {ach.extraInformation}
              </p>
            </div>
          ))}
        </section>

        <div style={{ borderTop: '1px solid #e5e7eb', margin: '1rem 0' }}></div>

        {/* Languages Section */}
        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4f46e5', marginBottom: '1rem' }}>Languages</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4b5563' }}>
            {data.languages?.map((lang, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{lang.name}</li>
            )) || null}
          </ul>
        </section>

        <div style={{ borderTop: '1px solid #e5e7eb', margin: '1rem 0' }}></div>

        {/* Interests Section */}
        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#4f46e5', marginBottom: '1rem' }}>Interests</h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#4b5563' }}>
            {data.interests?.map((interest, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{interest.name}</li>
            )) || null}
          </ul>
        </section>
      </div>

      <section style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <button
          onClick={handleDownloadPdf}
          disabled={isGenerating}
          style={{
            backgroundColor: '#4f46e5',
            color: '#ffffff',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500'
          }}
        >
          {isGenerating ? 'Generating PDF...' : 'Download PDF'}
        </button>
      </section>
    </>
  );
};

export default Resume;