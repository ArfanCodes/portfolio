export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Soft warm ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-15%] w-[560px] h-[560px] rounded-full bg-[#F2E5D2] blur-[150px] opacity-55 animate-soft-float" />
        <div className="absolute bottom-[10%] left-[-15%] w-[560px] h-[560px] rounded-full bg-[#EFE4D4] blur-[150px] opacity-50 animate-soft-float" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #1A1614 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">

        {/* Logo lockup */}
        <div className="flex items-center gap-2.5 select-none">
          <span className="font-mono text-[17px] font-semibold tracking-tight text-[#C77F45] leading-none">
            {'</>'}
          </span>
          <span className="font-sora font-bold text-xl tracking-tight text-[#1A1614] leading-none">
            ArfanCodes
          </span>
        </div>

        {/* Loader ring */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border border-[#EFE3D0]" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C77F45] border-r-[#E8B97E] animate-spin" style={{ animationDuration: '1.1s' }} />
          <div className="absolute inset-[18px] rounded-full bg-[#C77F45] opacity-80" />
        </div>

        {/* Label */}
        <div className="flex items-center gap-2.5">
          <span className="h-[1px] w-8 bg-[#D9CFBE]" />
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7A5A3F] font-sora">
            Loading portfolio
          </span>
          <span className="h-[1px] w-8 bg-[#D9CFBE]" />
        </div>
      </div>
    </div>
  );
}
