import { Suspense } from "react";
import FeaturedArticles from "./components/FeaturedArticles";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import TopHeadlines from "./components/TopHeadlines";

export default function Home() {
     return (
          <div className="mx-4 px-0 sm:px-6 md:px-12 lg:px-20 xl:px-28">
               <Header />
               <HeroBanner />
               <FeaturedArticles />
               <Suspense fallback={<div>Loading headlines...</div>}>
                    <TopHeadlines />
               </Suspense>
          </div>
     );
}
