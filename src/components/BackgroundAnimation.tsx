import React from "react";
import { useCurrentFrame, useVideoConfig, random } from "remotion";

const BubbleBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Generate random bubbles
  const bubbles = Array.from({ length: 20 }).map((_, i) => ({
    size: random(`size-${i}`) * 20 + 10,
    x: random(`x-${i}`) * width,
    delay: random(`delay-${i}`) * 100,
    speed: random(`speed-${i}`) * 0.5 + 0.5,
  }));

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {bubbles.map((bubble, index) => {
        const translateY = ((frame + bubble.delay) * bubble.speed) % height;

        return (
          <div
            key={index}
            style={{
              position: "absolute",
              bottom: translateY - bubble.size,
              left: bubble.x,
              width: bubble.size,
              height: bubble.size,
              borderRadius: "50%",
              backgroundColor: "#a0c4ff",
              opacity: 0.3,
              transform: `translateY(-${translateY}px)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default BubbleBackground;
