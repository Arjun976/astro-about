import Image from "next/image";

export default function ContactBanner() {
  return (
    <section className="bg-[#026BAE] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            Need High-Quality Building Materials or Safety Products?
          </h2>
          <p className="text-lg opacity-90 mb-8 font-poppins">
            Contact us today for a personalized quote or to learn more about our extensive range of products.
          </p>
          <button className="bg-[#EC2226] text-white px-8 py-4 rounded-[3px] text-base font-bold tracking-wider hover:bg-red-600 transition">
            GET IN TOUCH
          </button>
        </div>
        <div className="md:w-1/3 flex justify-center">
          {/* Using one of the contact images if available, or just a placeholder */}
          <div className="relative w-full max-w-[300px] aspect-square">
             <Image 
               src="/image/contact_image.png" 
               alt="Contact Us" 
               fill 
               className="object-contain"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
