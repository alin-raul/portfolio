"use client";

import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Link as PdfLink,
  Styles,
} from "@react-pdf/renderer";
import {
  otherSkillsPDF,
  projectsPDF,
  TechStackPDF,
  workExperiencesPDF,
  educationDataPDF,
  designToolsPDF,
  Flags,
} from "@/constants";

Font.registerEmojiSource({
  format: "png",
  url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20, // Reduced horizontal padding
    paddingVertical: 15, // Reduced vertical padding
    fontSize: 7, // Slightly reduced base font size
    color: "#333333",
    lineHeight: 1.2, // Added line-height for better readability
  },
  section: {
    marginBottom: 8, // Reduced section margin
  },
  h1: {
    fontSize: 16, // Reduced H1 size
    fontWeight: "semibold",
    color: "#111827",
    marginBottom: 0, // Adjusted margin
  },
  h2: {
    fontSize: 12, // Reduced H2 size
    fontWeight: "semibold",
    marginBottom: 4, // Adjusted margin
    color: "#4b5563",
  },
  h3: {
    fontSize: 8, // Reduced H3 size
    fontWeight: "bold",
    marginBottom: 3, // Adjusted margin
    color: "#4b5563",
  },
  textMuted: {
    color: "#4b5563",
  },
  textBold: {
    fontWeight: "bold",
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
    fontSize: 8, // Match surrounding text size
  },
  // Header
  profileHeaderContainer: {
    // Removed flexDirection and alignItems - no longer needed for this layout
    position: "relative", // Establish positioning context
    marginBottom: 16, // Keep margin below the container

    height: 16,
  },
  profileHeaderText: {
    position: "absolute", // Take out of normal flow
    bottom: 0,
    right: 0,
    left: 180,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    fontWeight: "bold",
    color: "#4b5563",
  },
  // Grid Card Base
  gridCard: {
    borderWidth: 0.5, // Thinner border
    borderColor: "#e5e7eb",
    borderRadius: 16, // Slightly smaller radius
    padding: 10, // Reduced padding
    backgroundColor: "#efefef", // Changed back to white from #efefef for contrast
    marginBottom: 12, // Reduced margin
  },
  // Profile Grid
  profileGridContainer: {
    flexDirection: "row",
    marginBottom: 6, // Reduced margin
    width: "100%", // Ensure it takes full width before wrapping items
  },
  profileGridItem: {
    width: "32%", // Adjusted width slightly
    marginRight: "2%",
    height: 100,
    // REMOVED minHeight: 140 - let content dictate height
  },
  profileGridItemLast: {
    marginRight: 0,
  },
  profileImage: {
    width: "100%",
    height: 100, // Give image a fixed height? Or keep auto? Let's try fixed.
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 16, // Match card radius if padding is 0
  },
  // Projects Section
  projectsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around", // Use space-around or space-evenly if space-between is too wide
    gap: 6, // Reduced gap
  },
  projectCard: {
    flexDirection: "column",
    alignItems: "center",
    width: "30%",
    marginBottom: 8,
  },
  projectIconWrapper: {
    width: 35, // Reduced size
    height: 35, // Reduced size
    borderWidth: 0.5,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 6, // Reduced padding
    marginTop: 2,
    marginBottom: 3,
    backgroundColor: "#f9fafb",
    justifyContent: "center",
    alignItems: "center",
  },
  projectIcon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  projectName: {
    fontSize: 5, // Further reduced size
    fontWeight: "semibold",
    textAlign: "center",
    color: "#4b5563",
    marginBottom: 3,
  },
  projectButton: {
    borderWidth: 1, // Thinner border
    borderColor: "#8b5cf6",
    color: "#8b5cf6",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 6, // Further reduced size
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
  },
  // Interests Section
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 14, // Added small top margin if needed
    padding: 2,
  },
  interestChip: {
    borderWidth: 0.5,
    borderColor: "#e5e7eb",
    paddingVertical: 2,
    paddingHorizontal: 5, // Adjusted padding
    borderRadius: 4,
    backgroundColor: "#f9fafb",
    margin: 1.5, // Reduced margin
  },
  interestText: {
    fontSize: 8, // Reduced size
    fontWeight: "semibold",
    padding: 2,
  },
  // Experience / Education Section
  expEduGridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8, // Reduced margin
  },
  expEduCardContainer: {
    width: "49%", // Adjusted width slightly
    marginRight: "2%",
    marginBottom: 10, // Reduced margin
  },
  expEduCardContainerLast: {
    marginRight: 0,
  },
  expEduCard: {
    padding: 15, // Reduced padding
    // REMOVED height: "100%"
  },
  expEduHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10, // Add some space before list
  },
  expEduIconWrapper: {
    width: 35, // Reduced size
    height: 35, // Reduced size
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 5,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "#e5e7eb",
  },
  expIcon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  expEduIcon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  expEduTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 10, // Reduced margin
    flexGrow: 1,
    marginRight: 6,
    overflow: "hidden",
  },
  expEduTitle: {
    fontSize: 11, // Reduced size
    fontWeight: "bold",
    color: "#4b5563",
    marginBottom: 4,
  },
  expEduRole: {
    fontSize: 8, // Match base size
    color: "#4b5563CC",
  },
  expEduRoleSpecialization: {
    fontSize: 6,
    marginTop: 2,
    color: "#4b5563B3",
  },
  expEduDurationWrapper: {
    flexShrink: 0,
  },
  expEduDuration: {
    borderRadius: 4,
    fontWeight: "bold",
    paddingVertical: 3, // Adjusted padding
    paddingHorizontal: 5, // Adjusted padding
    backgroundColor: "#ffffff",
    fontSize: 8, // Reduced size
    borderWidth: 0.5,
    borderColor: "#e5e7eb",
    textAlign: "center",
  },
  expEduDurationHighlight: {
    borderColor: "#8b5cf6",
    color: "#8b5cf6",
    borderWidth: 1, // Keep highlight border slightly thicker
    backgroundColor: "#ffffff",
  },
  expEduList: {
    marginTop: 3, // Reduced margin - header already has margin bottom
    paddingLeft: 8, // Reduced indent
  },
  expEduListItem: {
    marginBottom: 2, // Reduced gap
    flexDirection: "row",
  },
  bulletPoint: {
    width: 6,
    fontSize: 7, // Match base size
    marginRight: 3,
  },
  expEduListItemText: {
    flex: 1,
    fontSize: 7, // Ensure list item text matches base
  },
  // Skills Section
  skillsGridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  // Specific Skill Card Widths (adjust if needed after padding changes)
  codingSkillsCard: {
    width: "61%",
    marginRight: "2%",
    marginBottom: 12, // Consistent margin
    padding: 15, // Reduced padding
  },
  designSkillsCard: {
    width: "37%",
    marginRight: 0,
    marginBottom: 12,
    padding: 15, // Reduced padding
  },
  languageSkillsCard: {
    width: "23.5%",
    marginRight: "2%",
    marginBottom: 12, // Consistent margin
    padding: 15, // Reduced padding
    justifyContent: "space-between",
    flexDirection: "column",
  },
  otherSkillsCard: {
    width: "74.5%",
    marginRight: 0,
    marginBottom: 12, // Consistent margin
    padding: 15, // Reduced padding
  },
  // Coding Skills
  codingSkillsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 8, // Use gap for spacing
  },
  codingSkillItem: {
    backgroundColor: "#ffffff",
    padding: 2, // Reduced padding
    borderRadius: 10,
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#e5e7eb",
    minWidth: 30, // Reduced size
    minHeight: 30, // Reduced size
  },
  codingSkillImage: {
    width: 20, // Reduced size
    height: 20, // Reduced size
    objectFit: "contain",
  },
  // Design Skills
  designSkillsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around", // Use space-around for better distribution
    alignItems: "center",
    marginTop: 5, // Add some space below title
  },
  designToolImage: {
    objectFit: "contain",
    // Resized inline below
  },
  // Language Skills
  languageFlagsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexGrow: 1,
    marginTop: 4, // Add space below title
  },
  languageFlag: {
    fontSize: 18, // Reduced size
  },
  // Other Skills
  otherSkillsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around", // Use space-around
    alignItems: "center",
    marginTop: 4, // Add space below title
  },
  otherSkillImage: {
    objectFit: "contain",
  },
});

const CurriculumPDF = () => (
  <Document title="Năstase Raul-Alin - Curriculum Vitae">
    {/* Ensure Page size is A4 */}
    <Page size="A4" style={styles.page}>
      {/* Profile Header */}
      <View style={styles.profileHeaderContainer} fixed>
        {/* Fix header to top if it breaks across pages */}
        <Text style={styles.h1}>Nastase Raul-Alin</Text>
        <View style={styles.profileHeaderText}>
          <Text>29 years old, Romania</Text>
          <Text>workdevraul@gmail.com</Text>
          <PdfLink
            src="https://portfolio-lemon-rho-10.vercel.app"
            style={styles.link}
          >
            website.com {/* Replace */}
          </PdfLink>
        </View>
      </View>

      {/* Profile Grid Section */}
      {/* Use wrap={false} carefully - might cause content overflow if too wide */}
      <View style={styles.profileGridContainer} wrap={false}>
        {/* Image Card */}
        <View
          style={[
            styles.gridCard,
            styles.profileGridItem,
            { padding: 0, overflow: "hidden" }, // Keep padding 0 for image fill
          ]}
        >
          <Image
            style={styles.profileImage}
            src={"/pdf-assets/profile_pic.jpeg"}
          />
        </View>

        {/* Projects Card */}
        <View style={[styles.gridCard, styles.profileGridItem]}>
          <Text style={[styles.h3, { marginLeft: 6 }]}>Apps I made</Text>
          <View style={styles.projectsContainer}>
            {projectsPDF.map((project) => (
              <View key={project.name} style={styles.projectCard}>
                <View style={styles.projectIconWrapper}>
                  <Image style={styles.projectIcon} src={project.icon} />
                </View>
                <Text style={styles.projectName}>{project.name}</Text>
                <PdfLink
                  src={project.source_code_link}
                  style={styles.projectButton}
                >
                  <Text style={{ marginTop: 2 }}>VIEW</Text>
                </PdfLink>
              </View>
            ))}
          </View>
        </View>

        {/* Interests Card */}
        <View
          style={[
            styles.gridCard,
            styles.profileGridItem,
            styles.profileGridItemLast,
          ]}
        >
          <Text style={[styles.h3, { marginLeft: 6 }]}>Interests</Text>
          <View style={styles.interestsContainer}>
            {[
              "👨‍💻 Coding",
              "🏋️ Gym",
              "🚗 Cars",
              "📸 Photography",
              "⛰️ Traveling",
            ].map((interest) => (
              <View key={interest} style={styles.interestChip}>
                <Text style={styles.interestText}>{interest}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.h2}>Experience</Text>
        <View style={styles.expEduGridContainer} wrap={false}>
          {workExperiencesPDF.map((exp, index) => {
            return (
              <View
                key={exp.name}
                style={[
                  styles.gridCard,
                  styles.expEduCardContainer,
                  index % 2 !== 0 ? styles.expEduCardContainerLast : {},
                  styles.expEduCard,
                ]}
              >
                <View style={styles.expEduHeader}>
                  <View style={styles.expEduIconWrapper}>
                    <Image style={styles.expIcon} src={exp.icon} />
                  </View>
                  <View style={styles.expEduTextContainer}>
                    <Text style={styles.expEduTitle}>{exp.name}</Text>
                    <Text style={styles.expEduRole}>{exp.role}</Text>
                  </View>
                  <View style={styles.expEduDurationWrapper}>
                    <Text
                      style={[
                        styles.expEduDuration, // Base style always applied
                        ...(exp.workingHere
                          ? [styles.expEduDurationHighlight]
                          : []), // Spread highlight style only if workingHere is true
                      ]}
                    >
                      {exp.duration}
                    </Text>
                  </View>
                </View>
                <View style={styles.expEduList}>
                  {exp.list.map((item, idx) => (
                    <View key={idx} style={styles.expEduListItem}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={styles.expEduListItemText}>
                        <Text style={styles.textBold}>{item.skill}:</Text>
                        {` ${item.description}`}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            );
          })}
        </View>
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.h2}>Education</Text>
        <View style={styles.expEduGridContainer} wrap={false}>
          {educationDataPDF.map((edu, index) => (
            <View
              key={edu.name}
              style={[
                styles.gridCard,
                styles.expEduCardContainer,
                index % 2 !== 0 ? styles.expEduCardContainerLast : {},
                styles.expEduCard,
              ]}
            >
              <View style={styles.expEduHeader}>
                <View style={styles.expEduIconWrapper}>
                  <Image style={styles.expEduIcon} src={edu.icon} />
                </View>
                <View style={styles.expEduTextContainer}>
                  <Text style={styles.expEduTitle}>{edu.name}</Text>
                  <Text style={styles.expEduRole}>{edu.role}</Text>
                  <Text style={styles.expEduRoleSpecialization}>
                    {edu.specialization}
                  </Text>
                </View>
                <View style={styles.expEduDurationWrapper}>
                  <Text style={styles.expEduDuration}>{edu.duration}</Text>
                </View>
              </View>
              {edu.list && (
                <View style={styles.expEduList}>
                  {edu.list.map((item, idx) => (
                    <View key={idx} style={styles.expEduListItem}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text style={styles.expEduListItemText}>
                        <Text style={styles.textBold}>{item.skill}:</Text>
                        {` ${item.description}`}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        {/* Allow breaking page before skills if needed */}
        <Text style={styles.h2}>Skills</Text>
        <View style={styles.skillsGridContainer} wrap={false}>
          {/* Coding Skills */}
          <View style={[styles.gridCard, styles.codingSkillsCard]}>
            <Text style={styles.h3}>Coding</Text>
            <View style={styles.codingSkillsWrapper}>
              {TechStackPDF.map((tech) => (
                <View key={tech.skill_name} style={styles.codingSkillItem}>
                  <Image
                    key={tech.skill_name}
                    src={tech.icon}
                    style={[
                      styles.codingSkillImage,
                      { width: tech.width, height: tech.height },
                    ]}
                  />
                </View>
              ))}
            </View>
          </View>
          {/* Design Skills */}
          <View style={[styles.gridCard, styles.designSkillsCard]}>
            <Text style={styles.h3}>Design Tools</Text>
            <View style={styles.designSkillsWrapper}>
              {designToolsPDF.map((tool) => (
                <Image
                  key={tool.name}
                  src={tool.icon}
                  style={[
                    styles.designToolImage,
                    { width: tool.width, height: tool.height },
                  ]}
                  // Removed alt prop
                />
              ))}
            </View>
          </View>
          {/* Language Skills */}
          <View style={[styles.gridCard, styles.languageSkillsCard]}>
            <Text style={styles.h3}>Languages</Text>
            <View style={styles.languageFlagsWrapper}>
              {Flags.map((flag) => (
                <Image
                  key={flag.name}
                  src={flag.icon}
                  style={[
                    styles.otherSkillImage,
                    // Reduced size further
                    { width: flag.width, height: flag.height },
                  ]}
                  // Removed alt prop
                />
              ))}
            </View>
          </View>
          {/* Other Skills */}
          <View style={[styles.gridCard, styles.otherSkillsCard]}>
            <Text style={styles.h3}>Other</Text>
            <View style={styles.otherSkillsWrapper}>
              {otherSkillsPDF.map((skill) => (
                <Image
                  key={skill.name}
                  src={skill.icon}
                  style={[
                    styles.otherSkillImage,
                    // Reduced size further
                    { width: skill.width, height: skill.height },
                  ]}
                  // Removed alt prop
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default CurriculumPDF;
