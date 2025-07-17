import React from "react";

const HeroBanner = () => {
     return (
          <section className="text-center py-10 bg-gray-100 px-6 md:px-8">
               <p className="text-sm text-black tracking-widest uppercase mb-2">Welcome to NewsGlobe</p>
               <h2 className="text-xl md:text-2xl font-semibold leading-relaxed text-black max-w-3xl mx-auto">
                    Deliver <span className="text-red-600 font-bold">breaking stories</span>, spark
                    <span className="text-red-600 font-bold"> meaningful conversations</span>, and share
                    <span className="text-red-600 font-bold"> powerful perspectives</span> with the world.
               </h2>
          </section>
     );
};

export default HeroBanner;
