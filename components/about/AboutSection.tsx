import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2">
        <h3 className="text-[#EC2226] font-bold tracking-widest uppercase mb-4">About Our Company</h3>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#026BAE] leading-tight mb-6 font-poppins">
          Leading the Way in Building Materials and Safety Products
        </h2>
        <div className="space-y-4 text-zinc-600 leading-relaxed font-poppins">
          <p>
            Astro International has established itself as a premier trading company in Dubai, specializing in the distribution of high-quality building materials and comprehensive safety equipment.
          </p>
          <p>
            With years of experience and a deep understanding of the Middle Eastern market, we provide our clients with reliable solutions that meet the highest international standards. Our commitment to excellence and customer satisfaction has made us a trusted partner for major projects across the GCC.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="relative z-10 rounded-[5px] overflow-hidden shadow-2xl">
          <Image 
            src="/image/about-us.webp" 
            alt="About Astro" 
            width={650} 
            height={450} 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#026BAE]/10 rounded-full -z-0" />
      </div>
    </section>
  );
}
