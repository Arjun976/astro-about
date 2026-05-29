"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ activePage }: { activePage?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Building Materials", href: "#" },
    { label: "Safety Products", href: "#" },
  ];

  return (
    <header className="bg-white border-b border-[#026BAE]/40 sticky top-0 z-30">
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-white text-[#026BAE] text-sm border-b border-[#026BAE]/20">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-4 divide-x divide-[#026BAE]/20 border-x border-[#026BAE]/20 h-[56px]">
            <div className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-phone text-[16px]" />
              <span className="font-medium">+971 50 688 9285</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-envelope text-[16px]" />
              <span className="font-medium">info@astrotrading.ae</span>
            </div>
            <div className="flex items-center justify-center gap-3 cursor-pointer hover:bg-[#026BAE]/5 transition">
              <i className="fa-solid fa-location-dot text-[16px]" />
              <span className="font-medium">Find our store</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-clock text-[16px]" />
              <span className="font-medium">Mon – Sat 8AM – 5PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-[1400px] mx-auto px-6 xl:px-10 h-[70px] xl:h-[100px] flex items-center justify-between">
        <span className="xl:hidden order-1">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-start gap-[6px] text-[#026BAE]"
          >
            <span className="block h-[2px] w-full bg-current" />
            <span className="block h-[2px] w-full bg-current" />
            <span className="block h-[2px] w-5 bg-current" />
          </button>
        </span>

        <div className="flex-shrink-0 order-2 xl:order-1">
          <Image src="/image/logo.png" alt="Astro Trading" width={160} height={45} className="h-[25px] md:h-[41px] w-auto" />
        </div>

        <div className="hidden xl:flex items-center gap-10 xl:order-2">
          <nav className="flex gap-8 text-[16px] text-[#026BAE] font-semibold font-poppins">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#014F82] transition duration-300 ${
                  activePage === link.label.toLowerCase()
                    ? "underline underline-offset-8 decoration-red-500"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden xl:flex items-center xl:order-3">
          <button className="bg-[#EC2226] text-white px-4 py-2 rounded-[3px] text-[14px] font-bold tracking-wider hover:bg-red-600 transition">
            Request A Quote
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden border-t border-[#026BAE33] bg-white">
          <nav className="flex flex-col text-sm text-[#026BAE] font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-6 py-4 border-b hover:bg-[#026BAE]/5">
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-4">
              <button className="w-full bg-[#EC2226] text-white py-3 rounded-[3px] text-sm font-bold tracking-wider">
                Request A Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}