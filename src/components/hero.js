import React from "react"

const Hero = () => (
  <section className="h-50vh lg:h-60vh  xl:h-70vh text-gray-700 flex mt-12 sm:mt-16">
    <div className=" lg:max-w-1/2 lg:mr-8">
      <h1 className="text-4xl  md:text-6xl tracking-tight font-bold">
        File and pay <span className="text-indigo-400">nothing</span> now.
      </h1>
      <p className="mt-4 sm:mt-2 leading-relaxed  text-gray-600 text-xl sm:text-4xl  ">
        User your refund to pay your tax prep fees.
      </p>
      <div className="mt-4 flex">
        <button>Get started</button>
        <span className="mx-4">or</span>
        <button>Pay with paypal</button>
      </div>
    </div>
    <div className="hidden lg:block h-60vh w-full bg-indigo-400 lg:max-w-1/2">
      {" "}
      lool
    </div>
  </section>
)

export default Hero
