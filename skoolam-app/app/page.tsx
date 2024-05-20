"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TopBanner from "./src/TopBanner";
import Carousel from "./src/Carousel";
import Vision from "./src/Vision";
import Projects from "./src/Projects";
import Volunteering from "./src/Volunteering";
import Donation from "./src/Donation";
import PeopleList from "./src/utils/ListOfPeople";
import Footer from "./src/utils/Footer";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Carousel />
      <Vision />
      <Projects />
      <Volunteering />
      <Donation />
      <div
        style={{
          backgroundImage: "url(/people/backgroundPeople.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          padding: "50px 20px",
        }}
      >
        <PeopleList listType="advisoryCommittee" title="Advisory Committee" />
        <PeopleList listType="boardOfTrustees" title="Board of Trustees" />
      </div>
      <Footer />
    </main>
  );
}
