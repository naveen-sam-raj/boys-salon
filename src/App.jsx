import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-[#C7A77B]/20">
        <h1 className="text-3xl font-extrabold text-[#171717] tracking-tight">BOYS SALON</h1>
        <p className="text-[#C7A77B] font-medium mt-1 text-sm tracking-widest uppercase">Your Style. Your Salon. Your Time.</p>
        <div className="my-6 p-4 bg-[#F7F5F0] rounded-xl text-left text-xs text-[#858585] space-y-2">
          <p className="font-semibold text-[#171717]">Folder Setup Ready:</p>
          <p>• Ready for Antigravity / Vite</p>
          <p>• Tailwind CSS configured</p>
          <p>• Lucide Icons ready</p>
        </div>
        <p className="text-xs text-[#858585]">Run <code className="bg-gray-100 px-2 py-1 rounded text-[#171717]">npm install</code> then <code className="bg-gray-100 px-2 py-1 rounded text-[#171717]">npm run dev</code></p>
      </div>
    </div>
  );
}
