"use client";
import useStore from "@/store/useStore";
import Image from "next/image";

export default function Home() {
  const { setText } = useStore();
  return (
    <div>
      <div>home</div>
      <Image src="/1.png" width={500} height={500} alt={"Blog Slider"}></Image>
      <div className="bg-red-500 mt-4">
        <input onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
}
