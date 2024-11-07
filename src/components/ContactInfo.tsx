import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div
      style={{
        fontSize: "1rem",
        color: "#555",
        lineHeight: "1.5",
        marginBottom: "1.5rem",
      }}
    >
      <h2 style={{ color: "black" }}> Contact Information</h2>
      <p>
        <strong>Email:</strong> shloksingh2805@gmail.com
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://linkedin.com/in/code-singh"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/code-singh
        </a>
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/0shunya"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/0shunya
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
