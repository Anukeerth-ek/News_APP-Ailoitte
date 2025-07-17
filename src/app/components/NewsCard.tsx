import Image from "next/image";
import Link from "next/link";
import React from "react";

type NewsCardProps = {
     imageUrl: string;
     title: string;
     description: string;
     source: string;
     date: string;
     category: string;
     readTime: string;
};

const NewsCard = ({ id, news }: any) => {
     console.log("hello", news);
     return (
          <Link href={news.url} target="_blank" rel="noopener noreferrer">
               <div className="max-w-xs rounded-lg shadow-md bg-white overflow-hidden">
                    <img src={news.urlToImage} alt={news.title} className="w-full h-auto object-cover rounded" />
                    <div className="p-4">
                         <div className="text-xs text-gray-500 flex gap-2 mb-2">
                              <span>{news.url}</span> •{" "}
                              <span>
                                   {news.publishedAt ? new Date(news.publishedAt).toLocaleDateString() : "yesterday"}
                              </span>
                         </div>
                         <h2 className="text-md font-semibold leading-tight">{news.title}</h2>
                         <p className="text-sm text-gray-600 mt-1 line-clamp-2">{news.description}</p>
                         <div className="text-xs text-gray-500 mt-2 flex justify-between">
                              {/* <span className="text-red-500 font-medium">{category}</span> */}
                              <span>{"5mins"} read</span>
                         </div>
                    </div>
               </div>
          </Link>
     );
};

export default NewsCard;
