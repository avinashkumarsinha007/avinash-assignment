import React from "react";
import Comparision from "../../Components/Dashboard/Comparision";
import FAQ from "../../Components/Dashboard/FAQ";
import Featured from "../../Components/Dashboard/Featured";
import Testimonials from "../../Components/Dashboard/TestimonialsOpen";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ExploreCars from "../ExploreCars/ExploreCars";

function Open() {
  return (
    <div>
      <Navbar />
      <br />
      <br/>
      <ExploreCars/>
      <FAQ />
      <Comparision />
      <Testimonials />
      <Featured />
      <Footer/>
    </div>
  );
}

export default Open;
