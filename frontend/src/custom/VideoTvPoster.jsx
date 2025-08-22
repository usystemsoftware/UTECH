import PageLayout from "@/custom/PageLayout";
import { TypographyMuted, TypographyH3 } from "@/custom/Typography";

const VideoTvPoster = ({ information }) => {
  return (
    <PageLayout className="my-16 py-16 grid grid-cols-1 md:grid-cols-2 items-center space-y-10 bg-[url('/assets/industries/aviation/we-develop-elearning-background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="space-y-4">
        <TypographyH3 className="font-extrabold">
          {information?.title}
        </TypographyH3>
        <TypographyMuted>{information?.description}</TypographyMuted>
      </div>
      <img
        loading="lazy"
        src={
          information?.src ||
          "/assets/solutions/gis/custom-gis-software-solutions.png"
        }
        alt="Portfolio"
        className="md:w-165 lg:w-185 2xl:w-260 w-full mx-auto"
      />
    </PageLayout>
  );
};

export default VideoTvPoster;
