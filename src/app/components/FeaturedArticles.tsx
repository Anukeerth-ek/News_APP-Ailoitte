"use client";

import React from "react";
import { useFetchNews } from "../hooks/useFetchNews";
import { handleCalculateReadTime } from "../utils/readTime";

const FeaturedArticles = () => {
     const { newsData, loading, error } = useFetchNews();

     if (loading || newsData.length === 0) return null;
     const featured = newsData[0];
     console.log("feature", featured);
     const readTime = handleCalculateReadTime(featured.description);
     const featuredFallBackImg = "/FeatureArticle_FallBack.webp";
     if(error) return <p>Please refresh the page</p>
     return (
          <section className="flex flex-col md:flex-row md:justify-center gap-12 px-6 md:px-0 py-10 bg-white ">
               <div className="w-full md:w-1/2 h-1/2">
                    <img
                         src={featured?.urlToImage || featuredFallBackImg}
                         alt="John Wick Chapter 4"
                         width={420}
                         height={280}
                         className="rounded-lg w-full h-80 object-cover"
                    />
               </div>
               <div className="w-full md:w-1/2 flex flex-col justify-center gap-3">
                    <p className="text-sm text-gray-600">
                         {featured?.source?.name} ·{" "}
                         <span>
                              {" "}
                              {featured?.publishedAt ? new Date(featured.publishedAt).toLocaleDateString() : "5mins ago"}
                         </span>
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 leading-snug">{featured?.title}</h2>
                    <p className="text-gray-700 text-sm leading-relaxed max-w-xl">{featured?.description}</p>
                    <p className="text-sm text-red-500 font-medium">
                         {featured?.author} · <span>{readTime ? `${readTime} min read` : ""}</span>
                    </p>
               </div>
          </section>
     );
};

export default FeaturedArticles;
