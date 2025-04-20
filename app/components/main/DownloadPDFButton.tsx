"use client";

import React, { Suspense } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CurriculumPDF from "./CurriculumPDF";
import { Download, RefreshCcw } from "lucide-react";

const DownloadPDFButtonComponent = ({
  className = "",
}: {
  className?: string;
}) => {
  const LoadingButton = (
    <button
      disabled
      className="mr-4 md:rounded-2xl h-6 sm:h-10 bg-[var(--bg-dynamic-1)] text-center w-fit px-3 py-2 rounded-3xl flex gap-1 items-center outline outline-1 outline-accent-foreground/10 text-primary/60 transition-all duration-400 font-normal"
    >
      <Download className="w-3.5 h-3.5 sm:h-4 sm:w-4 mr-1" />
      <span className="text-sm sm:text-base">Download</span>
    </button>
  );

  return (
    <>
      <Suspense fallback={LoadingButton}>
        <PDFDownloadLink
          document={<CurriculumPDF />}
          fileName="Nastase_Raul_Alin_CV.pdf"
        >
          {({ loading, error }) =>
            error ? (
              <p>Error generating PDF</p>
            ) : (
              <button
                disabled={loading}
                className="cursor-pointer mr-4 md:rounded-2xl h-6 sm:h-10 bg-[var(--bg-dynamic-1)] hover:bg-white text-center group w-fit px-3 hover:px-4 py-2 rounded-3xl flex gap-1 items-center outline outline-1 outline-accent-foreground/10 text-primary/60 hover:text-primary dark:hover:text-primary-foreground hover:outline-accent-foreground/20 transition-all duration-400 font-normal hover:font-semibold hover:rounded-xl"
              >
                {loading ? (
                  <>
                    <RefreshCcw className="h-3.5 w-3.5 group-hover:!h-6 group-hover:!w-6 transition-all duration-200 animate-spin" />
                    <span className="text-sm sm:text-base">Building pdf</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 sm:h-4 sm:w-4 mr-1" />
                    <span className="text-sm sm:text-base">Download</span>
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
