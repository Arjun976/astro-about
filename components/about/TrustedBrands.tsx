import Image from "next/image";

export default function TrustedBrands() {
  const brands = [
    { name: "ATEC", logo: "/image/atec.png" },
    { name: "AWS", logo: "/image/aws.png" },
    { name: "DEWA", logo: "/image/dewa.png" },
    { name: "Khansaheb", logo: "/image/khansaheb.png" },
    { name: "NBTC", logo: "/image/nbtc.png" },
    { name: "Rotana", logo: "/image/rotana.png" },
    { name: "RTA", logo: "/image/rta.png" },
    { name: "SAF", logo: "/image/saf.png" },
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h3 className="text-[#EC2226] font-bold tracking-widest uppercase mb-4 text-sm">Our Partners</h3>
        <h2 className="text-2xl md:text-3xl font-bold text-[#026BAE] font-poppins">Trusted by Leading Organizations</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition duration-500">
        {brands.map((brand, index) => (
          <div key={index} className="grayscale hover:grayscale-0 transition duration-300">
            <Image 
              src={brand.logo} 
              alt={brand.name} 
              width={120} 
              height={60} 
              className="h-auto w-auto max-h-[40px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
