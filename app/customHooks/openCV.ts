import React from "react";

const openCV = () => {
  const pdfPath = "/documents/cvDariaCzupreta.pdf";
  return window.open(pdfPath, "_blank");
};

export default openCV;
