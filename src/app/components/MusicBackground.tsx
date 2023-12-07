"use client";
import Image from "next/image";
import { FC } from "react";
import cube from "./images/image-equilibrium.jpg";
import avatar from "./images/image-avatar.png";
interface MusicBackgroundProps {}

const MusicBackground: FC<MusicBackgroundProps> = () => {
  return (
    <div className="w-10/12 h-5/6 rounded-lg p-10 bg-gray-900 flex flex-col desktop:w-4/12 tablet:w-8/12 justify-evenly"></div>
  );
};

export default MusicBackground;
