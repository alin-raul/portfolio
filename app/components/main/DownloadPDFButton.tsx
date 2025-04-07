"use client";

import React, { useState, useEffect, Suspense, lazy } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import CurriculumPDF from "./CurriculumPDF";
import { Download, RefreshCcw } from "lucide-react";

const LazyCurriculumPDF = lazy(() => import("./CurriculumPDF"));

const DownloadPDFButton = () => {
  // Trick to only render the PDFDownloadLink on the client after mount
  // Avoids SSR mismatch errors with @react-pdf/renderer
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const LoadingButton = (
    <Button
      variant="default"
      size="lg"
      disabled
      className="w-fit mx-auto text-base px-4 rounded-xl bg-blue-500 "
    >
      <Download className="mr-2 h-5 w-5" /> Download
    </Button>
  );

  return (
    <>
      {isClient ? (
        <Suspense fallback={LoadingButton}>
          <PDFDownloadLink
            document={<CurriculumPDF />}
            fileName="Nastase_Raul_Alin_CV.pdf" // Set the desired file name
          >
            {({ blob, url, loading, error }) => (
              <Button
                variant="default"
                size="lg"
                disabled={loading}
                className="w-fit mx-auto text-base text-white font-semibold px-5 rounded-xl bg-blue-500 hover:bg-blue-600 dark:bg-indigo-600 dark:hover:bg-indigo-800 "
              >
                {loading ? (
                  <>
                    <RefreshCcw className="mr-2 h-5 w-5 animate-spin" />
                    Building pdf
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" /> Download
                  </>
                )}
              </Button>
            )}
          </PDFDownloadLink>
        </Suspense>
      ) : (
        LoadingButton
      )}
    </>
  );
};

export default DownloadPDFButton;
