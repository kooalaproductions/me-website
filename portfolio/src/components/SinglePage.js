import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import resume from '../documents/Ernesto-Sanchez-Santana.pdf'

export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }


  const { pdf } = props;

  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: resume }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      
    </>
  );
}