"use client";
import React from "react";

// lottie
import Lottie from "react-lottie";
import DataANIMATION from "@/lottie/data";

const PageDetail = ({ params }) => {
  const { id } = params;
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: DataANIMATION[id].animation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={"100%"}
        width={"100%"}
        isStopped={false}
        isPaused={false}
      />
    </main>
  );
};

export default PageDetail;
