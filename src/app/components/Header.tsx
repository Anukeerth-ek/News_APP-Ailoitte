import React from "react";
import { UserCircle2 } from "lucide-react";
import Link from "next/link";

const Header = () => {
     return (
          <header className="px-8 py-4 border-b bg-white flex items-center justify-between">
               <h1 className="text-2xl font-bold text-red-600">NewsGlobe</h1>
               <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
                    <Link href="#">Stories</Link>
                    <Link href="#">Creator</Link>
                    <Link href="#">Community</Link>
                    <Link href="#">Subscribe</Link>
               </nav>
               <div className="flex items-center gap-4">
                    <button className="text-sm text-gray-700 hover:text-black">Write</button>
                    <UserCircle2 className="w-6 h-6 text-gray-700" />
               </div>
          </header>
     );
};

export default Header;
