import AboutUs from "@/components/AboutUs";
import Achievement from "@/components/Achievement";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Courses/>
    <Achievement/>
    <Achievement/>
    <Services/>
    <AboutUs/>
    <Testimonial/>
    
    </>
  );
}
