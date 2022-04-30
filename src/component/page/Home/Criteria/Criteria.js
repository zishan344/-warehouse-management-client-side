import React from "react";

const Criteria = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 justify-center text-center">
        <div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-15 w-20 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>

          <h2 className="text-3xl text-gray-600 font-semibold ">
            FREE SHIPPING
          </h2>
          <p className="text-gray-500 ">On all orders over $50.00</p>
        </div>
        <div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-15 w-20 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>

          <h2 className="text-3xl text-gray-600 font-semibold ">
            100% PAYMENT SECURE
          </h2>
          <p className="text-gray-500 ">We ensure secure payment with PEV</p>
        </div>
        <div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-15 w-20 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>

          <h2 className="text-3xl text-gray-600 font-semibold ">
            30 DAYS GUARANTEE
          </h2>
          <p className="text-gray-500 ">30-days free return policy</p>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
