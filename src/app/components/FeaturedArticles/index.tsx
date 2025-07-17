"use client";

import { useFetchNews } from "@/app/hooks/useFetchNews";
import { handleCalculateReadTime } from "@/app/utils/readTime";
import React from "react";
import ErrorMessage from "../ErrorMessage";

const FeaturedArticles = () => {
     const { newsData, loading, error } = useFetchNews();

     if (loading || newsData.length === 0) return null;

     const featured = newsData[0];

     const readTime = handleCalculateReadTime(featured.description);

     const featuredFallBackImg = "/FeatureArticle_FallBack.webp";

     if (error) return <ErrorMessage error={error} />;

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
               <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
                    <p className="text-sm text-gray-600">
                         {featured?.source?.name} ·{" "}
                         <span>
                              {" "}
                              {featured?.publishedAt ? new Date(featured.publishedAt).toLocaleDateString() : "5mins ago"}
                         </span>
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900 leading-11 line-clamp-3">{featured?.title}</h2>
                    <p className="text-gray-700 text-sm leading-relaxed max-w-xl line-clamp-2">{featured?.description}</p>
                    <p className="text-sm text-red-500 font-medium">
                         {featured?.author} · <span className="text-gray-500 font-normal">{readTime ? `${readTime} min read` : ""}</span>
                    </p>
               </div>
          </section>
     );
};

export default FeaturedArticles;
