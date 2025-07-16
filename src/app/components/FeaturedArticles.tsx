import Image from "next/image";
import React from "react";

const FeaturedArticles = () => {
     return (
          <section className="flex flex-col md:flex-row md:justify-center gap-12 px-6 md:px-0 py-10 bg-white ">
               <div className="w-full md:w-1/2 h-1/2">
                    <Image
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHMZgOBFSHooVjTf0PFuur2m_wblFcG6fP-qC6TeeU1-BqvSiTLiSLraSRSb4_oId7tXE&usqp=CAU"
                         alt="John Wick Chapter 4"
                         width={420}
                         height={280}
                         className="rounded-lg w-full h-80 object-cover"
                    />
               </div>
               <div className="w-full md:w-1/2 flex flex-col justify-center gap-3">
                    <p className="text-sm text-gray-600">Netflix · 12 minutes ago</p>
                    <h2 className="text-4xl font-bold text-gray-900 leading-snug">Where To Watch 'John Wick: Chapter 4'</h2>
                    <p className="text-gray-700 text-sm leading-relaxed max-w-xl">
                         There’s been no official announcement regarding John Wick: Chapter 4’s streaming release. However,
                         given it’s a Lionsgate film, John Wick: Chapter 4 will eventually be released on Starz...
                    </p>
                    <p className="text-sm text-red-500 font-medium">Movies · 4 min read</p>
               </div>
          </section>
     );
};

export default FeaturedArticles;
