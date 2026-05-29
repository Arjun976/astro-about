import Image from "next/image";

export default function WhyChooseSection() {
  return (
    <section className="relative py-24 bg-zinc-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <Image 
          src="/image/why_bg.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-10"
        />
      </div>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
        <div className="lg:w-1/2">
          <h3 className="text-[#EC2226] font-bold tracking-widest uppercase mb-4">Why Choose Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#026BAE] leading-tight mb-8 font-poppins">
            Delivering Excellence in Every Project We Undertake
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-10 font-poppins">
            Our reputation is built on reliability, quality, and an unwavering commitment to our clients' safety and success. We don't just supply products; we provide peace of mind and structural integrity.
          </p>
          <div className="relative w-full h-[300px] md:h-[400px] rounded-[5px] overflow-hidden shadow-xl lg:hidden mb-12">
            <Image 
              src="/image/why_main_img.png" 
              alt="Why Choose Astro" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 hidden lg:block">
        <Image 
          src="/image/why_main_img.png" 
          alt="Why Choose Astro" 
          width={600}
          height={600}
          className="object-contain absolute bottom-0 right-0"
        />
      </div>
    </section>
  );
}
