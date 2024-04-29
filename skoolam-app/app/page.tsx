"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TopBanner from "./src/TopBanner";
import Carousel from "./src/Carousel";
import Vision from "./src/Vision";
import Projects from "./src/Projects";
import Volunteering from "./src/Volunteering";
import Donation from "./src/Donation";
import PeopleList from "./src/utils/ListOfPeople";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <Carousel />
      <Vision />
      <Projects />
      <Volunteering />
      <Donation />
      <PeopleList listType="advisoryCommittee" title="Advisory Committee" />
      <PeopleList listType="boardOfTrustees" title="Board of Trustees" />
    </main>
  );
}
