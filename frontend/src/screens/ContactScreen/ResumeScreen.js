import React from "react";
import Main from "../../shared/components/UIElements/Main/Main";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./ResumeScreen.css";
import FileSaver from "file-saver";
import resume from "../../assets/Jimmy_Oliva_Resume_2022.pdf";

const ResumeScreen = () => {
  let handleClick = (e) => {
    console.log("add", e);
    e.preventDefault();
    // let file = new Blob(
    //   [
    //     `BEGIN:VCARD
    //             VERSION:3.0
    //             N:${formState.name}};${formState.job};;;
    //             FN:${formState.name}
    //             TITLE:${formState.job};
    //             EMAIL;type=INTERNET;type=pref:${formState.email}
    //             TEL;type=MAIN:${formState.phone}
    //             TEL;type=CELL;type=VOICE;type=pref:${formState.phone}
    //             ADR;type=WORK;type=pref:;;;${formState.companyAddress};;;
    //             END:VCARD
    //     `,
    //   ],
    //   { type: "text/vcard;charset=utf-8" }
    // );
    FileSaver.saveAs(resume, "Resume");
  };
  return (
    <Main className={"resume"}>
      <div className="resume-wrapper">
        <Document file={resume}>
          <Page pageNumber={1} />
        </Document>
      </div>
      <a href="" onClick={handleClick} className="download">
        <span>Download Resume</span>
        <div className="icon-wrapper">{downloadIcon}</div>
      </a>
    </Main>
  );
};

export default ResumeScreen;

const downloadIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
  </svg>
);
