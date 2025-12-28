export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9EB] via-white to-[#FFF9EB] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-[#9FB2AC]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#5D0D18] border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Text */}
        <p className="text-[#555555] font-medium">Loading...</p>
      </div>
    </div>
  );
}
