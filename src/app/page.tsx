import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import FeaturedArticles from "./components/FeaturedArticles";
import { TopHeadlines } from "./components/TopHeadlines";

export default function Home() {
     return (
          <div className="px-28">
               <Header />
               <HeroBanner />
               <FeaturedArticles />
               <TopHeadlines/>
          </div>
     );
}
