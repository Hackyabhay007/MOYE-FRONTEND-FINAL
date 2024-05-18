import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

function Supply() {
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const options = {
    backgroundColor: "transparent", // Transparent background for the pie chart
    animationEnabled: true,
    exportEnabled: true,
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        indexLabelFontColor: "#ffffff", // White font for labels
        indexLabelPlacement: "inside",
        dataPoints: [
          { y: 19, label: "Staking LP" },
          { y: 5, label: "Presale" },
          { y: 7, label: "Private Sale" },
          { y: 32, label: "CEX and DEX listing" },
          { y: 22, label: "Team" },
          { y: 15, label: "Marketing" },
        ],
      },
    ],
  };

  return (
    <div className="w-full border md:my-12 bg-gradient-to-b from-black to-blue-900 storyText">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center my-2">
          <p className="text-lg md:text-3xl text-white  text-center">
            The percentages were distributed based on our own vision that
          </p>
          <p className="text-lg md:text-3xl text-white font-semibold">
            would provide the maximum benefit to our investors primarily.
          </p>
        </div>
        <div className="text-center">
          <p className="text-lg md:text-3xl text-white font-bold text-center">
            Max Supply 100,000,000 WLTK
          </p>
        </div>
        <div className="w-full flex flex-wrap items-center gap-16 justify-center p-5">
          <div className="w-96 bg-opacity-50 bg-black p-4 rounded-lg">
            <CanvasJSChart options={options} />
          </div>
          <div className="md:w-96 bg-opacity-50 bg-black p-4 rounded-lg">
            <ul
              style={{ listStyleType: "disc", paddingLeft: "30px" }}
              className="text-lg lg:text-2xl font-medium text-gray-300"
            >
              <li>19% Staking LP</li>
              <li>5% Presale</li>
              <li>7% Private Sale</li>
              <li>32% CEX and DEX listing</li>
              <li>22% Team</li>
              <li>15% Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supply;
