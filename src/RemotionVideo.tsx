import { Composition } from "remotion";
import { Resume } from "./components/Resume";

export const RemotionVideo: React.FC = () => {
  return (
    <Composition
      id="Resume"
      component={Resume}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
