import { Composition } from "remotion";
import { Resume } from "./components/Resume";

const slideDuration = 30 * 3.5; // 3 seconds per slide with 30 fps
const totalSlides = 6; // 5 main slides + 1 final "Thank You" slide
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
      totalSlides={totalSlides} // Passing totalSlides as a prop
    />
  );
};
