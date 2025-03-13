import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 text-gray-800 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center text-sm">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Hicran Apaydın. All rights reserved 🦋
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 