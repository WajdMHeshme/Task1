import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Benefits from "./components/benefits/Benefits";
import Testimonials from "./components/testimonials/Testimonials";
import Question from "./components/questions/Question";
import Info from "./components/infoSection/Info";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الحركة بالميلي ثانية (اختياري)
      once: true, // الحركة تحدث مرة واحدة فقط أثناء التمرير (اختياري)
    });
  }, []);

    
  return (
    <>
      <Header />
      <Hero
        title={"Welcome to Little Learners Academy "}
        headingInf={"Where Young Minds Blossom and "}
        textInnerHeading={"Dreams Take Flight."}
        mainP={
          "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        }
        num1={"+7000"}
        p1={"Students Passed Out"}
        num2={"+37"}
        p2={"Awards & Recognitions"}
        num3={"+15"}
        p3={"Experience Educators"}
      />
      <Benefits />
      <Testimonials />
      <Question />
      <Info />
      <Footer />
    </>
  );
};

export default App;
