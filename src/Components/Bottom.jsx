import React from "react";
import { ImSad } from "react-icons/im";
import { ImSmile } from "react-icons/im";
import { ImHappy } from "react-icons/im";


function Bottom() {
  return (
    <div className="w-full py-12 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap   w-full  my-12 items-center justify-center gap-16  ">
          <a
            href="#"
            class="block w-72 p-6 pb-4 bg-white border border-gray-200 rounded-xl shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Limited Supply
            </h5>
            <p class="font-normal text-center text-gray-700 dark:text-gray-400">
              The maximum supply is 100,000,000 MOYE, which ensures no
              inflation, and makes it a low-risk token, strong and trusted by
              everyone.
            </p>
          </a>

          <a
            href="#"
            class="block w-72   pb-10 p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Recyclable
            </h5>
            <p class="font-normal text-center text-gray-700 dark:text-gray-400">
            MOYE token is recyclable, by collecting it for MOYE's
              paid services and refunding it into staking protocol again.
            </p>
          </a>
          <a
            href="#"
            class="block w-72  p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fully Decentralized
            </h5>
            <p class="font-normal text-center text-gray-700 dark:text-gray-400">
            MOYE token is 100% decentralized and transactions can't be
              controlled such as pausing it or adding wallets to the blacklist.
            </p>
          </a>
        </div>
        <div className="w-full my-12 flex items-center justify-center  ">
          <div
            className=" relative "
            style={{
              backgroundImage:
                "url('data:image/jpeg;base64,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')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "1000px",
              height: "350px",
              borderRadius: "30px",
            }}
          >
            <div className=" p-8  absolute bottom-0 ">
              <div className="my-2">
                <p className=" text-xl md:text-4xl tracking-wider font-bold">
                  Team Wallet is Locked
                </p>
                <p className="text-xl md:text-xl font-bold">
                  100% of team tokens are locked, 30% vesting annually for 4
                  years.
                </p>
              </div>
              <div>
                <button className=" bg-blue-600 text-white p-4 px-8 rounded-xl font-semibold">
                  Check Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="md:w-1/2  flex flex-col   mx-auto p-5  justify-center  rounded-xl   bg-gray-200">
            <div className=" text-center my-4  ">
              <p className=" font-medium text-lg ">How do you feel about Moye token?</p>
            </div>
            <div className="flex justify-center gap-5">
            <ImSad size={34} />
            <ImSmile  size={34}/>
            <ImHappy  size={34}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
