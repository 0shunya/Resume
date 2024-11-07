import Education from "./Education";
import { Experience } from "./Experience";
import Projects from "./Projects";
import Extracurricular from "./Extracurriculars";
import ContactInfo from "./ContactInfo";
import { spring, useCurrentFrame, interpolate } from "remotion";

export const Resume: React.FC = () => {
  const frame = useCurrentFrame();

  // Slide-in animation for each section
  const slideIn = (delay: number) =>
    spring({
      frame: frame - delay,
      fps: 30,
      from: -50,
      to: 0,
    });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "40px",
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
        }}
      >
        Shlok Singh
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "Black",
          marginBottom: "2rem",
          fontStyle: "bold",
        }}
      >
        Full Stack Developer
      </p>
      {/* <ContactInfo /> */}
      <div style={{ marginTop: "2rem", width: "100%", maxWidth: "700px" }}>
        <div
          style={{
            transform: `translateY(${slideIn(0)}px)`,
            opacity: interpolate(frame, [0, 10], [0, 1]),
          }}
        >
          <Education />
        </div>
        <div
          style={{
            transform: `translateY(${slideIn(20)}px)`,
            opacity: interpolate(frame, [20, 30], [0, 1]),
          }}
        >
          <Experience />
        </div>
        <div
          style={{
            transform: `translateY(${slideIn(40)}px)`,
            opacity: interpolate(frame, [40, 50], [0, 1]),
          }}
        >
          <Projects />
        </div>
        <div
          style={{
            transform: `translateY(${slideIn(60)}px)`,
            opacity: interpolate(frame, [60, 70], [0, 1]),
          }}
        >
          <Extracurricular />
        </div>
        <div
          style={{
            transform: `translateY(${slideIn(60)}px)`,
            opacity: interpolate(frame, [60, 70], [0, 1]),
          }}
        >
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};
