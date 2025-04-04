"use client";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import {
  otherSkills,
  projects,
  workExperiences,
  educationData,
  TechStack,
  designTools,
} from "@/constants";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  // Add more styles as needed
});

const CurriculumPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Replicate your UI structure using react-pdf components */}
      <View style={styles.header}>
        <Text>Năstase Raul-Alin</Text>
        <Text>29 years old, Romania</Text>
      </View>

      {/* Add other sections similarly */}
      {workExperiences.map((experience) => (
        <View key={experience.name} style={styles.section}>
          <Text>{experience.name}</Text>
          <Text>{experience.role}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default CurriculumPDF;
