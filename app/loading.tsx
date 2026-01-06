export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0C1519] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[#CF9D7B]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#CF9D7B] border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Text */}
        <p className="text-[#A0A0A0] font-playfair tracking-widest text-sm font-bold uppercase animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
