import Courses from "@/Home Components/Courses";
import GoverningBody from "@/Home Components/GoverningBody";
import HeroNoticeSection from "@/Home Components/HeroNoticeSection";
import Oddhayan from "@/Home Components/Oddhayan";
import SliderGallery from "@/Home Components/SliderGallery";

const Page = () => {
  return (
    <main>
      <Oddhayan />

      <GoverningBody />

      <HeroNoticeSection/>

      <Courses />

      <SliderGallery />
    </main>
  );
};

export default Page;