import React from "react";
import MajorTokenCard from "../Components/MajorTokenCard";
import BuyNow from "../Components/BuyNow";
import Community from "../Components/Community";
import Supply from "../Components/Supply";
import Bottom from "../Components/Bottom";
import bgImages from "../Assets/images/bg2.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function PreSale() {
  return (
    <>

      <Header/>
      <div
        className="p-4  z-50"
        style={{
          backgroundImage: `url('${bgImages}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "100%",
        }}
      >

{/* 
<div className="fixedBG">
        <section className="fxiing">
          {Array.from({ length: 14 }).map((_, index) => (
            <span key={index}></span>
          ))} 
        </section>
      </div> */}
       
        <MajorTokenCard />
        <BuyNow />
        <Community />
        <Supply />
        <Bottom />
       
      </div>
      <Footer/>
    </>
  );
}

export default PreSale;
