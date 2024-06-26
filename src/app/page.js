"use client"
import Image from "next/image";

// lottie
import Lottie from "react-lottie";
import * as animationData from "@/lottie/key_animation.json";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={300}
        width={300}
        isStopped={false}
        isPaused={false}
      />
    </main>
  );
}
