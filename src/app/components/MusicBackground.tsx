"use client";
import Image from "next/image";
import { FC } from "react";
import music from "./images/illustration-hero.svg";

interface MusicBackgroundProps {}

const MusicBackground: FC<MusicBackgroundProps> = () => {
  return (
    <div className=" h-56 w-5/6 rounded-t-xl p-10 bg-gray-900 relative">
      <Image src={music} objectFit="container" layout="fill" alt="music" />
    </div>
  );
};

export default MusicBackground;
