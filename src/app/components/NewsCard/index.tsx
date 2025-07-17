import { NewsArticle } from "@/app/types/news";
import { handleCalculateReadTime } from "@/app/utils/readTime";
import Link from "next/link";
import React, { useState } from "react";

interface NewsCardProps {
     news: NewsArticle;
     className?: string;
}

const NewsCard = ({ news, className = "" }: NewsCardProps) => {
     const [imageError, setImageError] = useState(false);
     const readTime = handleCalculateReadTime(news.content);
     const fallbackImg = "/FeatureArticle_FallBack.webp";

     const formatDate = (dateString: string) => {
          const date = new Date(dateString);
          const now = new Date();
          const diffInHours = Math.abs(now.getTime() - date.getTime()) / 36e5;

          if (diffInHours < 24) {
               return `${Math.floor(diffInHours)}h ago`;
          } else if (diffInHours < 168) {
               return `${Math.floor(diffInHours / 24)}d ago`;
          } else {
               return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
               });
          }
     };

     return (
          // <Link href={news.url} target="_blank" rel="noopener noreferrer" className={`block group ${className}`}>
               <article className="max-w-xs bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1">
                    <div className="relative w-full h-48 overflow-hidden">
                         <img
                              src={imageError ? fallbackImg : news.urlToImage || fallbackImg}
                              alt={news.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              onError={() => setImageError(true)}
                              loading="lazy"
                         />

                         <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-4 space-y-3">
                         <div className="flex items-center justify-between text-xs text-gray-500">
                              <span className="font-medium text-gray-600 truncate max-w-[120px]">{news.source.name}</span>
                              <span className="flex-shrink-0">
                                   {news.publishedAt ? formatDate(news.publishedAt) : "Recently"}
                              </span>
                         </div>

                         <h2 className="text-sm font-semibold leading-tight text-gray-900 line-clamp-3 group-hover:text-gray-700 transition-colors duration-200">
                              {news.title}
                         </h2>

                         {news.content && (
                              <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                                   {news.content.replace(/\[.*?\]$/, "").trim()}
                              </p>
                         )}

                         <div className="flex items-center justify-between text-xs pt-1 border-t border-gray-50">
                              <span className="text-red-500 font-medium truncate max-w-[120px]">
                                   {news.author || "Unknown"}
                              </span>
                              {readTime && <span className="text-gray-500 flex-shrink-0">{readTime} min read</span>}
                         </div>
                    </div>
               </article>
          // </Link>
     );
};

export default NewsCard;
