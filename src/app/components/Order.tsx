"use client";
import Image from "next/image";
import { FC } from "react";
import note from "./images/icon-music.svg";

interface OrderProps {}

const Order: FC<OrderProps> = () => {
  return (
    <div className=" w-5/6 h-96 bg-white rounded-b-lg p-4 flex flex-col items-center justify-evenly">
      <h1 className="text-2xl text-gray-700 font-bold">Order Summary</h1>
      <p className="text-gray-400 text-sm  px-16 text-center">
        You can now listen to millions of songs, audiobooks and podcasts on any
        device anywhere you like!
      </p>
      <div className="bg-gray-100 w-4/5 h-20 flex items-center justify-evenly px-3">
        <div className="h-12 w-12 bg-indigo-100 rounded-full  relative">
          <Image src={note} alt="note" layout="fill" objectFit="conatainer" />
        </div>
        <div className="w-28 h-full  flex flex-col justify-center mr-20">
          <p className="text-black"> Annual Plan</p>
          <p className="text-gray-400"> $59.99/year</p>
        </div>
        <button className="text-purple-900 hover:underline">Change</button>
      </div>
      <div className="bg-indigo-700 h-12 shadow-xl shadow-inherit rounded-md w-4/5">
        <button className="text-white text-sm h-full w-full">
          Proceed to checkout
        </button>
      </div>
      <button className="text-gray-600  text-sm">Cancel Order</button>
    </div>
  );
};

export default Order;
