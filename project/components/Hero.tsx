import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container-wide mx-auto py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Kattali Textile Ltd</h1>
          <p className="mt-4 text-gray-700 max-w-xl">We deliver high-quality textile products with sustainable practices and global distribution.</p>

          <div className="mt-6 flex gap-3">
            <a href="#explore" className="inline-block px-4 py-2 rounded bg-brand text-white font-semibold">Explore</a>
            <a href="/contact" className="inline-block px-4 py-2 rounded border border-gray-300 text-gray-800">Contact</a>
          </div>
        </div>

        <div className="order-first lg:order-last flex justify-center lg:justify-end">
          <Image src="/images/ktl/hero.png" alt="Textile products" width={680} height={520} className="rounded shadow-xl" />
        </div>
      </div>
    </section>
  );
}
