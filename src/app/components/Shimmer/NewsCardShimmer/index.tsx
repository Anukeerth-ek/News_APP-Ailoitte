import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function NewsCardShimmer() {
     return (
          <div className={`max-w-xs bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden }`}>
               <div className="relative w-full h-48">
                    <Skeleton height="100%" width="100%" />
               </div>

               <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                         <Skeleton width={80} height={12} />
                         <Skeleton width={50} height={12} />
                    </div>

                    <Skeleton count={2} height={16} />

                    <Skeleton height={12} width="90%" />

                    <div className="flex items-center justify-between pt-1 border-t border-gray-50">
                         <Skeleton width={60} height={12} />
                         <Skeleton width={40} height={12} />
                    </div>
               </div>
          </div>
     );
}
