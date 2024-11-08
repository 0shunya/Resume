import { Composition } from "remotion";
import { Resume } from "./components/Resume";

const slideDuration = 30 * 3.5;
const totalSlides = 6;
const totalDuration = totalSlides * slideDuration;

export const RemotionVideo: React.FC = () => {
  return (
    <Composition
      id="Resume"
      component={Resume}
      durationInFrames={totalDuration}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
