import Image from "next/image";
import MusicBackground from "./components/MusicBackground";
import Order from "./components/Order";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center">
      <MusicBackground />
      <Order />
    </div>
  );
}
