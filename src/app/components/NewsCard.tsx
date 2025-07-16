import Image from "next/image";
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

const NewsCard = ({ imageUrl, title, description, source, date, category, readTime }: NewsCardProps) => {
     return (
          <div className="max-w-xs rounded-lg shadow-md bg-white overflow-hidden">
               <Image src={imageUrl} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
               <div className="p-4">
                    <div className="text-xs text-gray-500 flex gap-2 mb-2">
                         <span>{source}</span> • <span>{date}</span>
                    </div>
                    <h2 className="text-md font-semibold leading-tight">{title}</h2>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
                    <div className="text-xs text-gray-500 mt-2 flex justify-between">
                         <span className="text-red-500 font-medium">{category}</span>
                         <span>{readTime} read</span>
                    </div>
               </div>
          </div>
     );
};

export default NewsCard;
