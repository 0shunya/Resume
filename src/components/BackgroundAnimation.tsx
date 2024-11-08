import { interpolate, useCurrentFrame, useVideoConfig, Audio } from "remotion";
import cloudimg from "../images/cloud.png";
import backgroundMusic from "../music/Under The Sun - Everet Almond.mp3";

const CloudAnimation: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, width } = useVideoConfig();

  const clouds = [
    { top: "20%", speedMultiplier: 1 },
    { top: "40%", speedMultiplier: 1.2 },
    { top: "60%", speedMultiplier: 0.8 },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Audio src={backgroundMusic} volume={0.3} />
      {clouds.map((cloud, index) => {
        const cloudPosition = interpolate(
          frame,
          [0, durationInFrames],
          [-width * cloud.speedMultiplier, width * cloud.speedMultiplier],
        );

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              top: cloud.top,
              left: cloudPosition,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={cloudimg}
              alt={`Moving Cloud ${index}`}
              style={{
                width: "200px",
                opacity: 0.7,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CloudAnimation;
