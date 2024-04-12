"use client"
import React from 'react'

// lottie
import Lottie from "react-lottie";
import DataANIMATION from '@/lottie/data'

const PageDetail = ({params}) => {
  const {id} = params
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: DataANIMATION[id].animation,
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
  )
}

export default PageDetail
