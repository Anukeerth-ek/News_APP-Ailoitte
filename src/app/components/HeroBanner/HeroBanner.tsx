import React from "react";

const HeroBanner = () => {
     return (
          <section className="relative text-center py-10 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 px-6 md:px-8 overflow-hidden">
               {/* Subtle background pattern */}
               <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.08),transparent_70%)]" />
               
               {/* Content */}
               <div className="relative z-10">
                    <p className="text-sm text-gray-700 tracking-[0.15em] uppercase mb-2 font-medium">
                         Welcome to NewsGlobe
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold leading-relaxed text-gray-900 max-w-3xl mx-auto">
                         Deliver <span className="text-red-600 font-bold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-200 after:rounded-full">breaking stories</span>, spark
                         <span className="text-red-600 font-bold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-200 after:rounded-full"> meaningful conversations</span>, and share
                         <span className="text-red-600 font-bold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-200 after:rounded-full"> powerful perspectives</span> with the world.
                    </h2>
               </div>

               {/* Decorative elements */}
               <div className="absolute top-2 left-1/4 w-1 h-1 bg-red-300 rounded-full opacity-60" />
               <div className="absolute bottom-3 right-1/3 w-0.5 h-0.5 bg-red-400 rounded-full opacity-40" />
          </section>
     );
};

export default HeroBanner;