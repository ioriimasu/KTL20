import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 py-6">
      <div className="container-wide mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Kattali Textile Ltd</div>
        <div className="flex gap-4 text-sm">
          <a href="/privacy" className="text-gray-600">Privacy</a>
          <a href="/contact" className="text-gray-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
