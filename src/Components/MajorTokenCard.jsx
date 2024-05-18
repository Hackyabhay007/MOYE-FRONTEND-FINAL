import React from "react";

function MajorTokenCard() {
  return (
    <div className="w-full mt-20 md:py-12 py-8  gap-12 z-50 ">
      <div class="max-w-screen-xl mx-auto mt-14 my-12 p-4 text-center bg-[#081626] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 w-full ">
          <h5 class="mb-2  md:text-5xl font-bold text-white dark:text-white">
            The Major Token of MOYE
          </h5>
          <p class="mb-5  text-base text-white sm:text-2xl dark:text-gray-400">
            MOYE is the secure token for our investors to have great investment
            opportunities to grow together.
          </p>
        </div>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a
            href="#"
            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <div class="text-left px-4 rtl:text-right">
              <div class="-mt-1 font-sans md:text-xl font-semibold">
                Aduit Report
              </div>
            </div>
          </a>
          <a
            href="#"
            class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <div class="text-left px-3 rtl:text-right">
              <div class="mt-1 font-sans md:text-xl font-semibold">
                Smart Contract
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="max-w-screen-xl  mx-auto   text-center">
        <p className="text-4xl leading-relaxed font-bold text-white">Presale Stage</p>
        <p className="text-xl text-white">
          The best opportunities before starting trading on the exchanges!
        </p>
      </div>
    </div>
  );
}

export default MajorTokenCard;
