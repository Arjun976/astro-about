export default function HeroBanner({ title }: { title: string }) {
  return (
    <section className="relative h-[300px] md:h-[425px] w-full overflow-hidden">
      <img src="/image/banner_bg.png" alt="About" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-center h-full">
          <h1
            className="text-white text-[32px] md:text-[40px] 2xl:text-[46px] font-semibold font-poppins uppercase"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <div className="absolute bottom-6 left-0 px-5 md:px-10">
          <p className="text-white text-sm md:text-base font-poppins">Home &gt; About</p>
        </div>
      </div>
    </section>
  );
}