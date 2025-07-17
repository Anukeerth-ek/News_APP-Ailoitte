import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function FeaturedShimmer() {
     return (
          <section className="flex flex-col md:flex-row md:justify-center gap-12 px-6 md:px-0 py-10 bg-white">
               <div className="w-full md:w-1/2">
                    <Skeleton height={320} borderRadius={12} />
               </div>
               <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
                    <Skeleton width={120} height={16} />
                    <Skeleton count={2} height={32} />
                    <Skeleton width="75%" height={16} />
                    <Skeleton width={100} height={14} />
               </div>
          </section>
     );
}
