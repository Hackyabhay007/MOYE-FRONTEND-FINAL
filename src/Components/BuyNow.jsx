import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function BuyNow() {
  const fruits = [
    "Receive your tokens immediately",
    "Staking is live now to earn more rewards",
    "Listing price $0.15",
    "20% Buyback for +$100k buyers",
    "KYC and Audited by Cyberscope",
    "100% of Team wallet is locked",
    "Listing on top exchanges ByBit, OKX, GateIO, KuCoin, BitMart, Bitget and Pancakeswap",
  ];

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const address = "0xa255c6d982C7a13c2d7337775D3fc05D801183e5";
  const [usdtToMoyeRate] = useState(0.1027); // Example rate
  const [usdcToMoyeRate] = useState(0.1027); // Example rate
  const [copied, setCopied] = useState(false);


  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USDT");
  const [calculatedTokens, setCalculatedTokens] = useState(0);
  const [orderAmount, setOrderAmount] = useState(856); // Example order amount in MOYE
  const [orderCost, setOrderCost] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const futureDate = new Date("2024-05-21T00:00:00").getTime(); // Change this to your desired future date

      const distance = futureDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let cost = 0;
    if (currency === "USDT") {
      cost = amount / usdtToMoyeRate;
    } else if (currency === "USDC") {
      cost = amount / usdcToMoyeRate;
    }
    setCalculatedTokens(cost);
    setOrderCost(cost);
  }, [amount, currency, usdtToMoyeRate, usdcToMoyeRate]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const images = [
    // { id: 1, src: "https://via.placeholder.com/150", alt: "Image 1" },
    // { id: 2, src: "https://via.placeholder.com/150", alt: "Image 2" },
    // { id: 3, src: "https://via.placeholder.com/150", alt: "Image 3" },
    // { id: 4, src: "https://via.placeholder.com/150", alt: "Image 4" },
    // { id: 5, src: "https://via.placeholder.com/150", alt: "Image 5" },
    // { id: 6, src: "https://via.placeholder.com/150", alt: "Image 6" },
    // // Add more images as needed
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    closeModal();
    openSecondModal();
  };
  const handleCopyAddress = () => {
    const address = "0xa255c6d982C7a13c2d7337775D3fc05D801183e5";
    navigator.clipboard.writeText(address);
    alert("Address copied to clipboard");
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
            <div className="text-center pb-3 border-b border-gray-200">
              <h3 className="text-xl font-semibold">Available Tokens</h3>
              <h3 className="text-xl font-semibold">28,945,540 MOYE</h3>
            </div>
            <div className="mt-4">
              <p className="text-xl font-bold">How much you can buy?</p>
              <div className="flex my-2 gap-2">
                <form className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Amount"
                    className="bg-gray-50 border-gray-50 rounded-lg"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                  <select
                    id="countries"
                    className="border-none"
                    value={currency}
                    onChange={handleCurrencyChange}
                  >
                    <option value="USDT">USDT</option>
                    <option value="USDC">USDC</option>
                  </select>
                </form>
              </div>
              <p className="text-gray-700">
                You'II buy {calculatedTokens.toFixed(2)} Moye instead of {amount} Moye from the exchange!
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                onClick={handleConfirm}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      {isSecondModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <h3 className="text-xl font-semibold">We're almost done!</h3>
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={closeSecondModal}
              >
                &times;
              </button>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <p className="text-black font-medium">Order Amount</p>
                <p className="text-gray-400">{orderAmount} MOYE</p>
              </div>
              <div className="flex justify-between">
                <p className="text-black font-medium">Order Cost</p>
                <p className="text-gray-400">{orderCost.toFixed(2)} MOYE</p>
              </div>
              <div className="flex justify-between">
                <p className="text-black font-medium">Network</p>
                <p className="text-right text-gray-400">
                  Ethereum (ERC20) ,<br />
                  <p>BNB Smart Chain (BEP20)</p>
                </p>
              </div>
              <div className="my-4">
                <p className="text-red-400 text-center">
                  *Don't deposit from the exchange, You'II receive your tokens in a few minutes on the same deposit address
                </p>
              </div>
              <div className="my-4">
                <p className="text-center font-medium">
                  Make a deposit {amount} {currency} to the following address
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <p className="mr-2 text-sm">0xa255c6d982C7a13c2d7337775D3fc05D801183e5</p>
                  <button
                    className="ml-3"
                    onClick={handleCopyAddress}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                  {copied && <span className="ml-2">Copied!</span>}
                </div>
                <div className="mt-4">
                  <img src="./images/qr.png" className="h-40 w-40" alt="QR" />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              {/* <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 mr-2"
                onClick={closeSecondModal}
              >
                Cancel
              </button> */}
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                onClick={closeSecondModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full md:py-12">
        <div className="max-w-screen-xl mx-auto h-full md:flex gap-8 justify-center">
        <div className="mt-10 mb-6 sm:mb-0">
            <h2 className="font-bold text-white text-2xl">
              Why Should I Buy Now?
            </h2>
            <ul
              className="flex text-white font-medium flex-col gap-3 py-4 text-lg"
              style={{ listStyleType: "disc", paddingLeft: "30px" }}
            >
              {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
              ))}
            </ul>
            <div className="pl-8" style={{ display: "flex", gap: "10px" }}>
              {images.map((image) => (
                <div key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="rounded-full"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blend-multiply lg:w-96 rounded-xl border p-5 shadow-lg lg:border-gray-400 flex flex-col justify-between leading-normal">
            <div className="mb-8 flex flex-col gap-4 h-full">
              <div className="w-full flex justify-between p-2">
                <div className="flex gap-3">
                  <button className="border text-white rounded-xl w-14 text-center">
                    KYC
                  </button>
                  <button className="border text-white rounded-xl w-16 text-center">
                    Audit
                  </button>
                </div>
                <button className="border text-white rounded-xl w-16 text-center">
                  Live
                </button>
              </div>

              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex flex-col">
                  <p className="text-white text-lg font-medium">
                    Buy Before The Price Rises
                  </p>
                  <p className="text-lg text-white">
                    The Next Price is 0.103 USD
                  </p>
                </div>
                <div>
                  <div className="flex gap-3">
                    <div>
                      <p className="text-white font-bold text-2xl text-center">{`${time.days}`}</p>
                      <p className="text-white">Days</p>
                    </div>
                    <p>:</p>
                    <div className="text-white">
                      <p className="text-white font-bold text-2xl text-center">{`${time.hours}`}</p>
                      <p>Hours</p>
                    </div>
                    <p>:</p>
                    <div className="text-white">
                      <p className="font-bold text-2xl text-center">{` ${time.minutes}`}</p>
                      <p>Minutes</p>
                    </div>
                    <p>:</p>
                    <div className="text-white">
                      <p className="font-bold text-2xl text-center">{`${time.seconds}`}</p>
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 flex-col w-full justify-center">
                <div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white font-medium">Sale</p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-medium">
                        35,000,000 MOYE
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white font-medium">Price</p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-medium">0.1027 USD</p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white font-medium">Sold</p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-medium">
                        6,054,460 MOYE (17%)
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      type="range"
                      className="w-full"
                      id="vol"
                      value="20"
                      name="vol"
                      min="0"
                      max="40"
                    ></input>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white font-medium">$605,446</p>
                    </div>
                    <div>
                      <p className="text-gray-400 font-medium">$3,500,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <div>
                  <p className="text-2xl text-white  font-bold">+50% APR </p>
                </div>
                <div>
                  <p className="text-center text-white">
                    Be among the first holders to get as much as of staking
                    rewards
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={openModal}
                className="border rounded-lg px-12 w-96 py-2 bg-blue-500 text-white"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyNow;
