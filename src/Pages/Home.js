import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import BookAppointmentLandingPage from "../Components/BookAppointmentLandingPage";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <About />
      <BookAppointmentLandingPage />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
