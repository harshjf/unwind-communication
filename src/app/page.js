import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/Instagram/Banner";
import About from "../components/Instagram/About";
import Services from "../components/Instagram/Services";
import InstagramAudience from "../components/Instagram/InstagramAudience";
import Partners from "../components/Instagram/Partners";
import VideoArea from "../components/Instagram/VideoArea";
import Podcast from "../components/Instagram/Podcast";
import BlogPost from "../components/Instagram/BlogPost";
import ContactArea from "./../components/Common/ContactArea";
import Footer from "../components/Layouts/Footer";
import Process from "../components/Instagram/Process";
import Problem from "../components/Instagram/Problem";
import Solution from "../components/Instagram/Solution";
import Testimonials from "@/components/Instagram/Testimonials";
import WhyWe from "@/components/Instagram/WhyWe";
import ProblemProcessSolution from "@/components/Instagram/ProblemProcessSolution";
import Banner2 from "@/components/Instagram/Banner2";
import Section3 from "@/components/Instagram/Section3";
import Section4 from "@/components/Instagram/Section4";
import VideoSection from "@/components/Instagram/VideoSection";
import RadioInterviews from "@/components/Instagram/RadioInterviews";
import Marquee from "@/components/Marquee";
export default function Home() {
  return (
    <>
      <Navbar />

      <Banner2 />

      <Banner />

      <About />

      <VideoArea />

      <Section3 />

      <Marquee />

      <Section4 />

      <Services />

      <ProblemProcessSolution />

      <Testimonials />

      <RadioInterviews />

      <VideoSection />

      {/* <InstagramAudience /> */}

      <WhyWe />

      {/*  <Podcast />
       */}
      {/*  <BlogPost /> */}

      <ContactArea />

      <Footer />
    </>
  );
}
