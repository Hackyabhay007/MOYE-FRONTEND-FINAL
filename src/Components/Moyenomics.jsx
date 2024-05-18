import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Moyenomics = () => {
  const sampleData = [
    { name: "John Doe", text: "Excellent performance and growth", number: 4018 },
    { name: "Jane Smith", text: "Consistent returns over time", number: 4020 },
    { name: "Alice Johnson", text: "Strong market presence", number: 4035 },
    { name: "Chris Lee", text: "High investor confidence", number: 4042 },
    { name: "Patricia Brown", text: "Robust financial health", number: 4051 },
    { name: "Michael White", text: "Innovative and forward-thinking", number: 4063 },
    { name: "John Doe", text: "Excellent performance and growth", number: 4018 },
    { name: "Jane Smith", text: "Consistent returns over time", number: 4020 },
  
  ];

  return (
    <section className="moyenomics" id="nomics">
      <div className="container">
        <div className="heading">
          <h2>Moyenomics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-20">
  <div className="md:order-2 sm:order">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="countItem bg-gray-100 rounded-lg shadow-md p-4">
        <h4 className="text-xl font-semibold">Total Supply</h4>
        <h4 className="text-lg">699M</h4>
      </div>
      <div className="countItem bg-gray-100 rounded-lg shadow-md p-4">
        <h4 className="text-xl font-semibold">50% LP</h4>
        <h4 className="text-lg">50% PRESALE</h4>
      </div>
      <div className="countItem bg-gray-100 rounded-lg shadow-md p-4">
        <h4 className="text-xl font-semibold">LP BURNED AT</h4>
        <h4 className="text-lg">LAUNCH</h4>
      </div>
      <div className="countItem bg-gray-100 rounded-lg shadow-md p-4">
        <h4 className="text-xl font-semibold">OWNERSHIP</h4>
        <h4 className="text-lg">REVOKED</h4>
      </div>
    </div>
  </div>
  <div className="md:order-1 md:text-center">
    <div className="finger2">
      <img src="images/2_finger.png" alt="2 Finger" className="img-fluid mx-auto md:mb-0" />
    </div>
  </div>
</div>


        <div className="stats" id="stats">
          <div className="heading">
            <h2>Stats</h2>
          </div>
          <div className="statsList grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sampleData.map((item, index) => (
        <div className="statsItem bg-gray-100 rounded-lg shadow-md p-4 flex flex-col justify-between" key={index}>
          <div>
            <div className="name">{item.name}</div>
            <div className="text">{item.text}</div>
            <div className="stars flex items-center">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mx-1" key={starIndex} />
              ))}
            </div>
          </div>
          <div className="number text-right">{item.number}</div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </section>
  );
};

export default Moyenomics;
