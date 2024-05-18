import React from "react";
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Moyenomics from '../Components/Moyenomics'
import Banner from '../Components/Banner'
import MoyeStory from '../Components/MoyeStory'
import bgImages from "../Assets/images/bg2.jpg";
import Navbar from "../Components/Navbar";

function HomePage() {
  return (
    <>
     <Navbar/>
      <div
        className="p-4  z-9"
        style={{
          backgroundImage: `url('${bgImages}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "100%",
        }}
      >


<div className="fixedBG">
        <section className="fxiing">
          {Array.from({ length: 14 }).map((_, index) => (
            <span key={index}></span>
          ))} 
        </section>
      </div>

     
      <Banner />
            <MoyeStory />
            <Moyenomics />
      </div>
      <Footer/>
    </>
  );
}

export default HomePage;
