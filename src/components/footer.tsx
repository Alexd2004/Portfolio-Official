'use client';

import React from 'react';

export function Footer() {
  return (
    <div className="bg-[#141414]" id="contact">
      <div className="py-6 pt-24">
        <div className="flex items-center justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
          <h1 className="mx-4 text-xl font-semibold text-center text-white md:text-xl">
            Alexandre Duteau
          </h1>
          <div className="w-32 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
        </div>
        <div className="mt-4 flex justify-center space-x-6 text-white">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 pr-4">
            CV
          </a>
          <a href="https://www.linkedin.com/in/alexandreduteau/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 pr-4">
            LinkedIn
          </a>
          <a href="https://github.com/Alexd2004" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 pr-4">
            GitHub
          </a>
          <a href="mailto:alexandreduteau04@outlook.com" className="hover:text-gray-400">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

