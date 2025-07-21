import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#1a1a1a', // Dark background
  },
  container: {
    flex: 1,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#60a5fa', // Lighter blue for dark theme
    marginBottom: 5,
  },
  contact: {
    fontSize: 10,
    color: '#d1d5db', // Light gray for better contrast
    marginBottom: 3,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#818cf8', // Lighter indigo for dark theme
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#374151', // Darker border for separation
    paddingBottom: 5,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#e5e7eb', // Light gray for text
    marginBottom: 3,
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#9ca3af', // Medium gray for subtitles
    marginBottom: 2,
  },
  text: {
    fontSize: 10,
    color: '#d1d5db', // Light gray for better readability
    marginBottom: 5,
    lineHeight: 1.4,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skill: {
    fontSize: 10,
    color: '#818cf8', // Lighter indigo for skills
    padding: '4 8',
    borderWidth: 1,
    borderColor: '#818cf8',
    borderRadius: 12,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#374151', // Darker border for dividers
    marginVertical: 10,
  },
  bullet: {
    width: 3,
    height: 3,
    backgroundColor: '#9ca3af', // Medium gray for bullets
    borderRadius: 1.5,
    marginRight: 5,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 3,
  },
});

const ResumePDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.personalInformation.fullName}</Text>
          <Text style={styles.contact}>{data.personalInformation.location}</Text>
          <Text style={styles.contact}>{data.personalInformation.email} • {data.personalInformation.phoneNumber}</Text>
          <Text style={styles.contact}>
            {data.personalInformation.gitHub && 'GitHub • '}
            {data.personalInformation.linkedIn && 'LinkedIn'}
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.text}>{data.summary}</Text>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsGrid}>
            {data.skills?.map((skill, index) => (
              <Text key={index} style={styles.skill}>
                {skill.title} - {skill.level}
              </Text>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {data.experience?.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.itemTitle}>{exp.jobTitle}</Text>
              <Text style={styles.itemSubtitle}>{exp.company} | {exp.location}</Text>
              <Text style={[styles.itemSubtitle, { fontStyle: 'italic' }]}>{exp.duration}</Text>
              <Text style={styles.text}>{exp.responsibility}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education?.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.itemTitle}>{edu.degree}</Text>
              <Text style={styles.itemSubtitle}>{edu.university}, {edu.location}</Text>
              <Text style={styles.itemSubtitle}>Graduation Year: {edu.graduationYear}</Text>
            </View>
          ))}
        </View>

        {/* Certifications */}
        {data.certifications && data.certifications.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {data.certifications.map((cert, index) => (
              <View key={index} style={styles.row}>
                <View style={styles.bullet} />
                <Text style={styles.text}>
                  {cert.title} - {cert.issuingOrganization} ({cert.year})
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {data.projects.map((proj, index) => (
              <View key={index} style={{ marginBottom: 8 }}>
                <Text style={styles.itemTitle}>{proj.title}</Text>
                <Text style={styles.text}>{proj.description}</Text>
                <Text style={styles.itemSubtitle}>
                   Technologies: {Array.isArray(proj.technologiesUsed) ? 
                    proj.technologiesUsed.join(", ") : 
                    proj.technologiesUsed || 'N/A'
                  }
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Languages and Interests in two columns */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {data.languages && data.languages.length > 0 && (
            <View style={[styles.section, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.sectionTitle}>Languages</Text>
              {data.languages.map((lang, index) => (
                <View key={index} style={styles.row}>
                  <View style={styles.bullet} />
                  <Text style={styles.text}>{lang.name}</Text>
                </View>
              ))}
            </View>
          )}
          
          {data.interests && data.interests.length > 0 && (
            <View style={[styles.section, { flex: 1, marginLeft: 10 }]}>
              <Text style={styles.sectionTitle}>Interests</Text>
              {data.interests.map((interest, index) => (
                <View key={index} style={styles.row}>
                  <View style={styles.bullet} />
                  <Text style={styles.text}>{interest.name}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
