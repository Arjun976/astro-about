import Image from "next/image";

export default function WhyChooseCards() {
  const cards = [
    {
      title: "Quality Assurance",
      description: "We source only the best materials from internationally recognized manufacturers.",
      image: "/image/card_img2.png"
    },
    {
      title: "Fast Delivery",
      description: "Our efficient logistics network ensures your project stays on schedule.",
      image: "/image/card_img3.png"
    },
    {
      title: "Expert Support",
      description: "Our team provides technical expertise to help you choose the right products.",
      image: "/image/card_img4.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-[5px] overflow-hidden shadow-lg border border-zinc-100 hover:shadow-2xl transition duration-300 group">
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#026BAE] mb-4 font-poppins">{card.title}</h3>
                <p className="text-zinc-600 leading-relaxed font-poppins">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
