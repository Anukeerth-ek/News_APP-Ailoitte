import FeaturedArticles from "./components/FeaturedArticles";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import { TopHeadlines } from "./components/TopHeadlines";
import { Suspense } from "react";

export default function Home() {
     return (
          <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
               <Header />
               <HeroBanner />
               <FeaturedArticles />
               <Suspense fallback={<div>Loading news...</div>}>
                    <TopHeadlines />
               </Suspense>
          </div>
     );
}
