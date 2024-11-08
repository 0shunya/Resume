import { AbsoluteFill } from "remotion";

const SkillsAndCourses = () => {
  const skills = [
    "C",
    "C++",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "PHP",
    "Python",
    "Java",
  ];
  const tools = [
    "MySQL",
    "MongoDB",
    "VS Code",
    "PyCharm",
    "Git",
    "GitHub",
    "Outlook",
    "Microsoft Office",
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: "#c0c0f0", padding: "2em" }}>
      <h2>Skills and Courses</h2>
      <h3>Programming Languages:</h3>
      <p>{skills.join(", ")}</p>
      <h3>Tools and Technologies:</h3>
      <p>{tools.join(", ")}</p>
    </AbsoluteFill>
  );
};

export default SkillsAndCourses;
