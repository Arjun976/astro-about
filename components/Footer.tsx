import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Image src="/image/logo.png" alt="Astro Trading" width={160} height={45} className="mb-6 brightness-0 invert" />
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">
            Astro International is a leading provider of medical equipment and personal protective safety products across Dubai and the GCC region.
          </p>
          <div className="flex gap-4">
            {/* Social links placeholder */}
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#026BAE] transition cursor-pointer">
              <i className="fa-brands fa-facebook-f" />
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#026BAE] transition cursor-pointer">
              <i className="fa-brands fa-twitter" />
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#026BAE] transition cursor-pointer">
              <i className="fa-brands fa-linkedin-in" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="#" className="hover:text-white transition">Building Materials</Link></li>
            <li><Link href="#" className="hover:text-white transition">Safety Products</Link></li>
            <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Contact Info</h3>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="flex gap-3">
              <i className="fa-solid fa-location-dot text-[#EC2226]" />
              <span>Dubai, United Arab Emirates</span>
            </li>
            <li className="flex gap-3">
              <i className="fa-solid fa-phone text-[#EC2226]" />
              <span>+971 50 688 9285</span>
            </li>
            <li className="flex gap-3">
              <i className="fa-solid fa-envelope text-[#EC2226]" />
              <span>info@astrotrading.ae</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Newsletter</h3>
          <p className="text-zinc-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-zinc-800 text-white px-4 py-2 rounded-l-[3px] w-full focus:outline-none focus:ring-1 focus:ring-[#026BAE]"
            />
            <button className="bg-[#026BAE] text-white px-4 py-2 rounded-r-[3px] hover:bg-[#014F82] transition">
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Astro International. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
