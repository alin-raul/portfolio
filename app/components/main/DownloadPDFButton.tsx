"use client";

import React, { Suspense, useMemo } from "react"; // Import useMemo
import { PDFDownloadLink } from "@react-pdf/renderer";
import CurriculumPDF from "./CurriculumPDF";
import { Download, RefreshCcw } from "lucide-react";
import useMobileSmallScreen from "@/hooks/useMobileSmallScreen";

const DownloadPDFButtonComponent = ({
  className = "", // Note: This prop isn't currently used on the buttons below
}: {
  className?: string;
}) => {
  const size = useMobileSmallScreen(); // Use the hook
  const isSmallScreen = size.width !== undefined && size.width < 480; // Determine if screen is small

  // Memoize the PDF document element
  // This ensures <CurriculumPDF /> is only created once (or when dependencies change,
  // but since there are no dependencies here, it's effectively once).
  const pdfDocument = useMemo(() => {
    return <CurriculumPDF />;
  }, []); // Empty dependency array means this memoized value never changes after the initial render

  // Define the classes you *only* want to apply when the screen is NOT small (>= 480px)
  // These strings are static and don't cause re-renders themselves.
  const buttonClasses = `
    cursor-pointer mr-4 md:rounded-2xl h-6 sm:h-10
    bg-[var(--bg-dynamic-1)] hover:bg-white text-center
    group w-fit px-3 hover:px-4 py-2 rounded-3xl flex gap-1 items-center
    outline outline-1 outline-accent-foreground/10 text-primary/60
    hover:text-primary dark:hover:text-primary-foreground
    hover:outline-accent-foreground/20 transition-all duration-400
    font-normal hover:font-semibold hover:rounded-xl
  `;

  // Define the classes for the loading state when screen is NOT small
  const loadingButtonClasses = `
    mr-4 md:rounded-2xl h-6 sm:h-10
    bg-[var(--bg-dynamic-1)] text-center w-fit px-3 py-2 rounded-3xl
    flex gap-1 items-center outline outline-1 outline-accent-foreground/10
    text-primary/60 transition-all duration-400 font-normal
  `;

  // Build the className string dynamically based on isSmallScreen
  const activeButtonClassName = isSmallScreen ? "" : buttonClasses;
  const loadingButtonClassName = isSmallScreen ? "" : loadingButtonClasses;

  const LoadingButton = (
    <button
      disabled
      className={loadingButtonClassName} // Applies empty string or full classes
    >
      <Download className="w-3.5 h-3.5 sm:h-4 sm:w-4 mr-1" />{" "}
      <span className="text-sm sm:text-base hidden xs:block ">Download</span>
    </button>
  );

  return (
    <>
      <Suspense fallback={LoadingButton}>
        <PDFDownloadLink
          // Pass the memoized document element
          document={pdfDocument}
          fileName="Nastase_Raul_Alin_CV.pdf"
        >
          {({ loading, error }) =>
            error ? (
              <p>Error generating PDF</p>
            ) : (
              <button
                disabled={loading}
                className={activeButtonClassName} // Applies empty string or full classes
              >
                {loading ? (
                  <>
                    <RefreshCcw className="h-4 w-4 xs:h-3.5 xs:w-3.5 group-hover:!h-6 group-hover:!w-6 transition-all duration-200 animate-spin mr-2 xs:mr-1" />
                    <span className="text-sm sm:text-base hidden xs:block ">
                      Building pdf
                    </span>
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 mr-2 xs:mr-1" />
                    <span className="text-sm sm:text-base hidden xs:block ">
                      Download
                    </span>
                  </>
                )}
              </button>
            )
          }
        </PDFDownloadLink>
      </Suspense>
    </>
  );
};

const DownloadPDFButton = React.memo(DownloadPDFButtonComponent);

export default DownloadPDFButton;
