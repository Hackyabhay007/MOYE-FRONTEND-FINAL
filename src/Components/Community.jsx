import React from "react";

function Community() {
  const cardData = [
    {
      id: 1,
      title: "1- Start Buy",
      description:
        "Click on the “Buy Now” button situated at the bottom of the presale box above. Click on it to proceed.",
      link: "#",
    },
    {
      id: 2,
      title: "2- Specify Amount",
      description:
        "A purchase widget will appear. From here, choose the stablecoin of your preference and input the amount you wish to purchase. Once done, click on the “Checkout” button.",
      link: "#",
    },
    {
      id: 3,
      title: "3- Complete Checkout",
      description:
        "You will be presented with the order details, which include the payable amount, accepted networks, and the deposit address. Complete the transfer",
      link: "#",
    },
    {
      id: 4,
      title: "4- Token Receipt",
      description:
        "Upon successful completion of Step 3, your tokens will be transferred to the same deposit address within a few minutes.",
      link: "#",
    },
  ];

  return (
    <div className="  py-8  w-full   ">
      <div className="max-w-screen-xl mx-auto  flex flex-col gap-8  ">

        <div className=" p-5 px-12 border   rounded-xl">
          <div className=" text-center my-2 ">
            <p className="text-white font-medium  text-lg">
              Join our community to be up to date about the sale stages and the
              latest news.
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="w-40 font-medium text-blue-600 bg-gray-100 hover:bg-gray-200 py-3 px-4 rounded-md">join community</button>
          </div>
        </div>

        <div className="w-full ">
          <h3 className="text-3xl my-10 text-center  text-white font-bold">How to Buy $MOYE?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {cardData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const Card = ({ title, description, link }) => (
    <a href={link} className="block w-60 h-72 p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2  text-center font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal text-center text-gray-700 dark:text-gray-400">{description}</p>
    </a>
  );
export default Community;
