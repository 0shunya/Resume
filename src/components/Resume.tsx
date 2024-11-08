import React from "react";
import Education from "./Education";
import { Experience } from "./Experience";
import Projects from "./Projects";
import Extracurricular from "./Extracurriculars";
import ContactInfo from "./ContactInfo";
import { useCurrentFrame, interpolate, useVideoConfig } from "remotion";
import CloudAnimation from "./BackgroundAnimation";

export const Resume: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideDuration = fps * 3;

  const getOpacity = (start: number) => {
    return interpolate(
      frame,
      [start, start + 15, start + slideDuration - 15, start + slideDuration],
      [0, 1, 1, 0],
      {
        extrapolateRight: "clamp",
      },
    );
  };

  const totalSlides = 6;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        color: "#333",
        position: "relative",
      }}
    >
      <CloudAnimation />

      <div
        style={{
          opacity: getOpacity(0),
          position: "absolute",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Shlok Singh</h1>
        <p style={{ fontSize: "1.2rem", color: "black", fontWeight: "bold" }}>
          Full Stack Developer
        </p>
      </div>

      <div
        style={{
          opacity: getOpacity(slideDuration),
          position: "absolute",
          textAlign: "center",
        }}
      >
        <Education />
      </div>

      <div
        style={{
          opacity: getOpacity(slideDuration * 2),
          position: "absolute",
          textAlign: "center",
        }}
      >
        <Experience />
      </div>

      <div
        style={{
          opacity: getOpacity(slideDuration * 3),
          position: "absolute",
          textAlign: "center",
        }}
      >
        <Projects />
      </div>

      <div
        style={{
          opacity: getOpacity(slideDuration * 4),
          position: "absolute",
          textAlign: "center",
        }}
      >
        <Extracurricular />
      </div>

      <div
        style={{
          opacity: getOpacity(slideDuration * 5),
          position: "absolute",
          textAlign: "center",
        }}
      >
        <ContactInfo />
      </div>

      <div
        style={{
          opacity: getOpacity(slideDuration * 6),
          position: "absolute",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", color: "#333" }}>
          Thank You for Watching!
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Connect with me on LinkedIn or GitHub.
        </p>
      </div>
    </div>
  );
};
