import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-20 bg-white shadow-lg flex items-center sticky top-0 left-0 right-0 z-50">
      <div className="container flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/logo/logo_new.JPG"}
            alt={"Logo Nahda Trans"}
            width={45}
            height={45}
            className="rounded-full border border-sky-400"
          />
          <p className="text-base underline decoration-wavy font-semibold text-slate-800">Nahda Trans Lombok</p>
        </Link>
        <div className="hidden md:flex space-x-10">
          <Link
            href="/"
            className="font-medium hover:text-sky-500 transition-colors duration-150 ease-linear"
          >
            Home
          </Link>
          <Link
            href="/sewa-kendaraan"
            className="font-medium hover:text-sky-500 transition-colors duration-150 ease-linear"
          >
            Sewa Mobil
          </Link>
          <Link
            href="/paket-wisata"
            className="font-medium hover:text-sky-500 transition-colors duration-150 ease-linear"
          >
            Paket Tour
          </Link>
        </div>
        {/* hamburger menu for mobile */}
        <div className="md:hidden">
          <button
           title="toggle"
            type="button"
            className="text-slate-800 p-2 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <MdOutlineMenu size={24} />
          </button>
        </div>
        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 w-1/2 bg-white border border-slate-200 rounded-lg shadow-lg p-5 space-y-8">
            <Link
              href="/"
              className="font-medium hover:text-sky-500 transition-colors duration-150 ease-linear block"
            >
              Home
            </Link>
            <Link
              href="/sewa-kendaraan"
              className="font-medium hover:text-sky-500 transition-colors duration-150 ease-linear block"
            >
              Sewa Mobil
            </Link>
            <Link
              href="/paket-wisata"
              className="font-medium hover:text-sky-500 transition-colors duration-150 ease-linear block"
            >
              Paket Tour
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
