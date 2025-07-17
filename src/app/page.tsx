import FeaturedArticles from "./components/FeaturedArticles";
import HeroBanner from "./components/HeroBanner/HeroBanner";

export default function Home() {
     return (
          <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
               <HeroBanner />
               <FeaturedArticles />
          </div>
     );
}
