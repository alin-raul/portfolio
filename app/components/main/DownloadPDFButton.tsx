"use client";

import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CurriculumPDF from "./CurriculumPDF";

import {
  otherSkills,
  projects,
  workExperiences,
  educationData,
  TechStack,
  designTools,
} from "@/constants"; // Adjust path to your constants

// Import your regular Button component for styling (optional)
import { Button } from "@/components/ui/button"; // Adjust path

const DownloadPDFButton = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure this component only renders the PDFLink on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Pass the imported data as a prop to CurriculumPDF
  const pdfData = {
    otherSkills,
    projects,
    workExperiences,
    educationData,
    TechStack,
    designTools,
  };

  return (
    <div>
      {isClient ? (
        <PDFDownloadLink
          document={<CurriculumPDF data={pdfData} />}
          fileName={`Nastase_Raul_Alin_CV_${
            new Date().toISOString().split("T")[0]
          }.pdf`} // Dynamic filename
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              <Button variant="outline" disabled>
                Generating PDF...
              </Button>
            ) : (
              // Use your existing Button component for consistent styling
              <Button className="py-8 px-6 rounded-3xl text-2xl bg-violet-500 font-bold ">
                Download as PDF
              </Button>
            )
          }
        </PDFDownloadLink>
      ) : (
        // Placeholder button while rendering on server or before hydration
        <Button variant="outline" disabled>
          Loading PDF...
        </Button>
      )}
      {/* Optional: Display error message */}
      {/* {error && <p style={{color: 'red', marginTop: '5px'}}>Failed to generate PDF.</p>} */}
    </div>
  );
};

export default DownloadPDFButton;
