"use client"

import React, { useState } from "react";
import { UserCircle2, Menu, X, PenTool } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
                NewsGlobe
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/top-headlines" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 relative group"
            >
              News
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="#" 
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50">
              <PenTool className="w-4 h-4" />
              Write
            </button>
            <button className="p-2 text-gray-700 hover:text-red-600 transition-colors duration-200 rounded-full hover:bg-gray-50">
              <UserCircle2 className="w-6 h-6" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/top-headlines" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                News
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                About
              </Link>
              <Link 
                href="#" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5 space-x-3">
                <button className="flex items-center gap-2 text-base font-medium text-gray-700 hover:text-red-600 transition-colors duration-200">
                  <PenTool className="w-4 h-4" />
                  Write
                </button>
                <button className="p-2 text-gray-700 hover:text-red-600 transition-colors duration-200">
                  <UserCircle2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;