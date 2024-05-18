import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const [copied, setCopied] = useState(false);
  const textToCopy = "fCuw5ppJ9aZYvfV1h5JwUfqXM44iX3Pzbzxcdfdgfdgfdzdccdfvfd";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide the "Copied!" message after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <section className="banner py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="standEmoji lg:mr-8 mb-6 lg:mb-0">
          <img src="images/moon.png" alt="Moon Moye" className="lg:w-78" />
        </div>
        <div className="textContent text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Sed ut perspiciatis unde omnis iste natus error sit
          </h1>
          <div className="mb-10 mt-10 flex flex-col lg:flex-row justify-center lg:justify-between text-white p-5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="overflow-hidden w-full lg:w-5/6 mb-4 lg:mb-0 lg:mr-10">
              <span>{textToCopy}</span>
            </div>
            <button className="w-full lg:w-auto flex justify-center lg:justify-end text-blue-500 font-semibold py px-4 rounded-lg" onClick={copyToClipboard}>
              <FontAwesomeIcon icon={faCopy} className="mr-2 text-white" />
          
            </button>
            {copied && <span className="mt-2 lg:mt-0 lg:ml-2 ml-2 text-black">Copied!</span>}
          </div>
        </div>
        <div className="verseEmoji lg:ml-8">
          <img src="images/moye_verse1.png" alt="Moye Verse" className="img-fluid lg:w-78" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
