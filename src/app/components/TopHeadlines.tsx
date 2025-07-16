import React from "react";
import NewsCard from "./NewsCard";

const newsData = [
     {
          imageUrl:
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHMZgOBFSHooVjTf0PFuur2m_wblFcG6fP-qC6TeeU1-BqvSiTLiSLraSRSb4_oId7tXE&usqp=CAU",
          title: "'He deserves a lot more' Verstappen backs Alonso",
          description: "Max Verstappen believes his fellow two-time world champion Fernando Alonso deserves...",
          source: "Formula 1",
          date: "3 hours ago",
          category: "Sport",
          readTime: "8 min",
     },
     {
          imageUrl:
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHMZgOBFSHooVjTf0PFuur2m_wblFcG6fP-qC6TeeU1-BqvSiTLiSLraSRSb4_oId7tXE&usqp=CAU",
          title: "Liverpool hammer Leeds for first win in five games",
          description: "Mohamed Salah and Diogo Jota both scored twice...",
          source: "BBC",
          date: "12 hours ago",
          category: "Sport",
          readTime: "8 min",
     },
     {
          imageUrl:
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHMZgOBFSHooVjTf0PFuur2m_wblFcG6fP-qC6TeeU1-BqvSiTLiSLraSRSb4_oId7tXE&usqp=CAU",
          title: "Papua: At least one killed in hunt for kidnapped NZ pilot",
          description: "At least one Indonesian soldier has been killed...",
          source: "IDN Times",
          date: "April 17, 2023",
          category: "Crime",
          readTime: "8 min",
     },
     {
          imageUrl:
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHMZgOBFSHooVjTf0PFuur2m_wblFcG6fP-qC6TeeU1-BqvSiTLiSLraSRSb4_oId7tXE&usqp=CAU",
          title: "Jeremy Bowen: Israel's unclear road ahead",
          description: "Tensions between Israel and the Palestinians are on the rise...",
          source: "BBC",
          date: "April 15, 2023",
          category: "Middle East",
          readTime: "8 min",
     },
];

export const TopHeadlines = () => {
     return (
          <section className="py-8 px-4">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-bold">Top Headlines</h2>
                    <div className="flex gap-3 w-full sm:w-auto">
                         <select className="px-5 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-400">
                              <option value="">All Categories</option>
                              <option value="sports">Sports</option>
                              <option value="business">Business</option>
                              <option value="technology">Technology</option>
                              <option value="entertainment">Entertainment</option>
                              <option value="health">Health</option>
                              <option value="science">Science</option>
                         </select>
                         <input
                              type="text"
                              placeholder="Search news..."
                              className="px-3 py-2 border rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-400"
                         />
                    </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {newsData.map((news, idx) => (
                         <NewsCard key={idx} {...news} />
                    ))}
               </div>
          </section>
     );
};
