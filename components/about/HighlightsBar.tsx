export default function HighlightsBar() {
  const highlights = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Project Completed" },
    { number: "50+", label: "Partner Brands" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="bg-white py-12 border-y border-zinc-100">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="text-3xl md:text-4xl font-bold text-[#EC2226] mb-2">{item.number}</span>
            <span className="text-zinc-500 font-medium uppercase tracking-wider text-xs md:text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
